import { Metadata } from "../Metadata.js";

export class CardArray extends Array {
  get allowMultiple() {
    throw new Error('allowMultiple getter must be defined');
  }

  get cards() {
    throw new Error('cards getter must be defined');
  }

  get type() {
    throw new Error('type getter must be defined');
  }

  addCard(cardId) {
    const card = structuredClone(this.cards.find(c => c.id === cardId));

    if (card.system?.charge) {
      card.currentCharges = card.system.charge;
    }

    if (this.allowMultiple) {
      let existingCard = this.find(i => i.id === card.id);

      if (existingCard) {
        existingCard.count++;
        this.updateCardCount(existingCard);
      } else {
        card.count = 1;
        this.push(card);
        this.renderCard(card);
        new Metadata().add(card);
      }
    } else {
      this.push(card);
      this.renderCard(card);
      new Metadata().add(card);
    }
  }

  removeCard(cardId) {
    const index = this.findIndex(card => card.id === cardId);

    if (index === -1) return;

    const card = this[index];

    if (this[index].count > 1) {
      this[index].count--;
      this.updateCardCount(card);
    } else {
      this.splice(index, 1);
      this.removeRenderedCard(card);
      new Metadata().remove(card);

      if (this.cards.length === 1) {
        this.findSelectButton.removeAttribute('disabled');
      }
    }
  }

  updateCharge(cardId, chargeChange) {
    const index = this.findIndex(card => card.id === cardId);

    if (index === -1) return;

    const card = this[index];

    card.currentCharges += chargeChange;

    // TODO: Are treasures discarded after their last charge is used?

    this.updateCardCharge(card);
  }

  render() {
    this.forEach(card => this.renderCard(card));

    if (this.cards.length === 0) {
      this.findSelectButton.setAttribute('disabled', 'true');
    }
  }

  renderCard(card) {
    const listElement = this.findListElement();

    const cardElement = this.#createElementFromHTML(`
    <li id="${card.type}-${card.id}" class="card" data-card-id="${card.id}" data-card-type="${card.type}">
      <div class="card-header">
        <button data-action="remove">X</button>
        <span>${card.name}</span>
        ${this.cardHeader(card)}
      </div>
      <div class="card-body">
        ${this.cardBody(card)}
      </div>
    </li>
    `);

    listElement.appendChild(cardElement);
  }

  cardHeader(_card) {
    throw new Error('cardHeader method must be defined');
  }

  cardBody(_card) {
    throw new Error('cardBody method must be defined');
  }

  updateCardCount(card) {
    const countElement = document.querySelector(`#${this.elementId(card)} div.card-header span.count`);
    countElement.textContent = `x${card.count}`;
  }

  updateCardCharge(card) {
    const chargeElement = document.querySelector(`#${this.elementId(card)} span.charges`);
    chargeElement.textContent = card.currentCharges;
  }

  removeRenderedCard(card) {
    const cardElement = document.getElementById(this.elementId(card));
    cardElement.remove();
  }

  elementId(card) {
    return this.type + '-' + card.id;
  }

  findAddButton() {
    return document.getElementById(this.type + '-add');
  }

  findContainerElement() {
    return document.getElementById(this.type + '-cards');
  }

  findListElement() {
    return document.getElementById(this.type + '-list');
  }

  findSelectButton() {
    return document.getElementById(this.type + '-select');
  }

  findSelector() {
    return document.getElementById(this.type + '-selector');
  }

  #createElementFromHTML(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }
}

import { CompanionCards } from "./cards/CompanionCards.js";
import { GearCards } from "./cards/GearCards.js";
import { PotionCards } from "./cards/PotionCards.js";
import { SpellCards } from "./cards/SpellCards.js";
import { TreasureCards } from "./cards/TreasureCards.js";
import { Metadata } from "./Metadata.js";
import { Storable } from "./Storable.js";

export class Cards extends Storable {
  companion;
  gear;
  potion;
  treasure;
  spell;

  constructor() {
    super();

    const data = this.loadStorage();

    this.companion = data.companion ? CompanionCards.from(data.companion) : new CompanionCards();
    this.gear = data.gear ? GearCards.from(data.gear) : new GearCards();
    this.potion = data.potion ? PotionCards.from(data.potion) : new PotionCards();
    this.treasure = data.treasure ? TreasureCards.from(data.treasure) : new TreasureCards();
    if (new Metadata().allowedSpells) {
      this.spell = data.spell ? SpellCards.from(data.spell) : new SpellCards();
    }

    this.addListener();
  }

  addListener() {
    document.getElementById('cards').addEventListener('click', (e) => {
      this.cardActionHandler(e);
    });

    document.getElementById('cards-spells').addEventListener('click', (e) => {
      this.cardActionHandler(e);
    });

    // This is only applicable when the Alliances expansion is included. And the AlliancesExpansion
    // class is responsible for opening the modal.
    document.getElementById('alliance-companion-modal').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'close') {
        document.getElementById('alliance-companion-modal').style.display = 'none';
      } else if (e.target.dataset.action === 'add') {
        document.getElementById('alliance-companion-modal').style.display = 'none';

        const cardId = document.getElementById('alliance-companion-selector').value;
        this.companion.addAlliancesCompanionCard(cardId);

        this.updateStorage();
      }
    });
  }

  cardActionHandler(e) {
    const action = e.target.dataset.action;
    const section = e.target.closest('section');
    const type = section.dataset.type;
    const helper = this[type];
    const card = e.target.closest('.card');

    if (action === 'select') {
      this.#selectCard(helper);
    } else if (action === 'add') {
      this.#addCard(helper);
    } else if (action === 'remove') {
      helper.removeCard(card.dataset.cardId);
      this.updateStorage();
    } else if (action === 'recover-charge') {
      helper.updateCharge(card.dataset.cardId, 1);
      this.updateStorage();
    } else if (action === 'use-charge') {
      helper.updateCharge(card.dataset.cardId, -1);
      this.updateStorage();
    }
  }

  start() {
    document.getElementById('cards').classList.remove('hidden');

    if (new Metadata().spellsAllowed()) {
      document.getElementById('cards-spells').classList.remove('hidden');
    }
  }

  render() {
    this.start();

    Object.keys(this).forEach(key => {
      if (key === 'spell' && new Metadata().allowedSpells.length === 0) {
        return;
      }

      this[key].render();
    });
  }

  reset() {
    this.companion = new CompanionCards();
    this.gear = new GearCards();
    this.potion = new PotionCards();
    this.treasure = new TreasureCards();
    this.spell = new Metadata().allowedSpells ? new SpellCards() : null;

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('cards-spells').classList.add('hidden');

    this.updateStorage();
  }

  get storageKey() {
    return 'cards';
  }

  #addCard(helper) {
    const selector = helper.findSelector();

    helper.addCard(selector.value);

    selector.classList.add('hidden');
    helper.findAddButton().classList.add('hidden');
    helper.findSelectButton().classList.remove('hidden');

    this.updateStorage();
  }

  #selectCard(helper) {
    helper.findSelectButton().classList.add('hidden');

    const selector = helper.findSelector();

    selector.replaceChildren();

    const postFilter = helper.allowMultiple ? (item) => item : (item) => this[helper.type].find((i) => i.id === item.id) === undefined

    helper.cards.filter(postFilter).forEach(card => {
      let opt = document.createElement('option');
      opt.value = card.id;
      opt.innerText = card.name;
      selector.append(opt);
    });

    selector.classList.remove('hidden');
    helper.findAddButton().classList.remove('hidden');
  }
}

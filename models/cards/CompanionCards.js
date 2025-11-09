import { ALLIANCE_COMPANIONS, COMPANIONS } from "../../data/companions.js";
import { Metadata } from "../Metadata.js";
import { CardArray } from "./CardArray.js";

export class CompanionCards extends CardArray {
  constructor() {
    super();
  }

  get allowMultiple() {
    return false;
  }
  get cards() {
    return COMPANIONS;
  }
  get type() {
    return 'companion'
  }

  addAlliancesCompanionCard(cardId) {
    const card = structuredClone(ALLIANCE_COMPANIONS.find(c => c.id === cardId));

    this.push(card);
    this.renderCard(card);
    new Metadata().add(card);
  }

  cardHeader(card) {
    return `
    <span class="companion-title">${card.title}</span>
    `;
  }

  cardBody(card) {
    // benefit - optional with text and usage (optional)
    const benefitHTML = card.benefit ? `
      <div>
        <span>${card.benefit.text}</span>
        ${card.benefit.usage ? `<span class="companion-usage">${card.benefit.usage}</span>` : ''}
      </div>
    ` : '';

    // advantage(s) - each with text and usage (optional)
    const advantagesHTML = card.advantage.map(adv => `
      <div>
        ${adv.text}
        ${adv.usage ? `<span class="companion-usage">${adv.usage}</span>` : ''}
      </div>
      `).join('');

    return `
    <dd>
      ${benefitHTML}
      ${advantagesHTML}
      <div>${card.name} ${card.event}</div>
    </dd>
    `;
  }
}

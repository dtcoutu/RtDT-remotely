import { CardArray } from "./CardArray.js";
import { QUEST_ITEMS } from "../../data/quest_items.js"

export class QuestItemCards extends CardArray {
  get allowMultiple() {
    return false;
  }

  get cards() {
    return QUEST_ITEMS;
  }

  get type() {
    return 'quest_item';
  }

  cardHeader(_card) { return ''; }

  cardBody(card) {
    const benefitHTML = card.benefit ? `
    <div>
      <span>${card.benefit}</span>
    </div>
    ` : '';

    const advantageHTML = card.advantage ? `
    <div>
      ${card.advantage}
    </div>
    ` : '';

    return `
      ${benefitHTML}
      ${advantageHTML}
    `;
  }
}

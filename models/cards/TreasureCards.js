import { TREASURES } from "../../data/treasure.js";
import { CardArray } from "./CardArray.js";

export class TreasureCards extends CardArray {
  get allowMultiple() {
    return false;
  }

  get cards() {
    return TREASURES;
  }

  get type() {
    return 'treasure';
  }

  cardHeader(_card) { return ''; }

  cardBody(card) {
    const benefitHTML = card.benefit ? `<div>
        <span>${card.benefit}</span>
      </div>` : '';

    const advantageHTML = card.advantage ? `<div>
        ${card.advantage}
      </div>` : '';

    const chargesHTML = card.currentCharges ? `<div>
      <span class="charges">${card.currentCharges}</span>
      <img src="icons/charge.png" height="15" width="15" style="padding-left: 4px; padding-right: 4px;" />
      <button data-action="use-charge">-1</button>
      <button data-action="recover-charge">+1</button>
    </div>` : '';

    return `
      ${benefitHTML.trim()}
      ${advantageHTML.trim()}
      ${chargesHTML.trim()}
    `;
  }
}

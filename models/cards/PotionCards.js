import { POTIONS } from "../../data/potions.js";
import { CardArray } from "./CardArray.js";

export class PotionCards extends CardArray {
  get allowMultiple() {
    return true;
  }

  get cards() {
    return POTIONS;
  }

  get type() {
    return 'potion';
  }

  cardHeader(card) {
    return `
    <span class="count">x${card.count}</span>
    `;
  }

  cardBody(card) {
    return `
    <span>${card.description}</span>
    `;
  }
}

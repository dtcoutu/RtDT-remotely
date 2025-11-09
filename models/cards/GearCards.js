import { GEAR } from "../../data/gear.js";
import { CardArray } from "./CardArray.js";

export class GearCards extends CardArray {
  get allowMultiple() {
    return false;
  }

  get cards() {
    return GEAR;
  }

  get type() {
    return 'gear';
  }

  cardHeader(_card) { return ''; }

  cardBody(card) {
    return `
    <span>${card.description}</span>
    `;
  }
}

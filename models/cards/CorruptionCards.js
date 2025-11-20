import { CORRUPTIONS } from "../../data/corruptions.js";
import { CardArray } from "./CardArray.js";

export class CorruptionCards extends CardArray {
  get allowMultiple() {
    return false;
  }

  get cards() {
    return CORRUPTIONS;
  }

  get type() {
    return 'corruption';
  }

  cardHeader(_card) { return ''; }

  cardBody(card) {
    return `
    <div>
      ${card.description}
    </div>
    `;
  }
}

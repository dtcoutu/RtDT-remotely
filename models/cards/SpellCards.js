import { SPELLS } from "../../data/spells.js";
import { Metadata } from "../Metadata.js";
import { CardArray } from "./CardArray.js";

export class SpellCards extends CardArray {
  get allowMultiple() {
    return false;
  }

  get cards() {
    const allowedSpells = new Metadata()._allowed_spells;

    return SPELLS.filter(spell => allowedSpells.includes(spell.type));
  }

  get type() {
    return 'spell';
  }

  cardHeader(_card) {
    return ``;
  }

  cardBody(card) {
    return `
    <span>${card.description}</span>
    `;
  }
}

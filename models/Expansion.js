import { AlliancesExpansion } from "./expansions/AlliancesExpansion.js";
import { CovenantExpansion } from "./expansions/CovenantExpansion.js";
import { Storable } from "./Storable.js";

export class Expansion extends Storable {
  static NO_EXPANSION = 'none';
  static ALLIANCES_EXPANSION = 'alliances';
  static COVENANT_EXPANSION = 'covenant';

  static EXPANSIONS = [
    this.NO_EXPANSION,
    this.ALLIANCES_EXPANSION,
    this.COVENANT_EXPANSION
  ];

  _expansion = '';
  _details;

  constructor() {
    super();

    const data = this.loadStorage();

    this.setExpansion(data._expansion, data._details);

    this.addListener();
  }

  get details() {
    return this._details;
  }
  get expansion() {
    return this._expansion;
  }

  set expansion(value) {
    this._expansion = value;
    this.updateStorage();
  }

  addListener() {
    this.#getExpansionDetailsElement().addEventListener('click', (e) => {
      this.details.handleEvent(e);
      this.updateStorage();
    });
  }

  isAlliances() {
    return this._expansion === Expansion.ALLIANCES_EXPANSION;
  }

  isCovenant() {
    return this._expansion === Expansion.COVENANT_EXPANSION;
  }

  isNone() {
    return this._expansion === Expansion.NO_EXPANSION;
  }

  setExpansion(expansion, details = null) {
    this._expansion = expansion;

    if (this.isAlliances()) {
      this._details = new AlliancesExpansion(details);
    } else if (this.isCovenant()) {
      this._details = new CovenantExpansion(details);
    } else {
      this._details = null;
    }

    this.updateStorage();
  }

  start() {
    this.#getExpansionDetailsElement().classList.remove('hidden');

    if (this.details) {
      this.details.start();
    }
  }

  reset() {
    if (this.details) {
      this.details.reset();
    }

    this._expansion = '';
    this._details = null;

    const containerElement = this.#getExpansionDetailsElement();
    containerElement.replaceChildren();
    containerElement.classList.add('hidden');
  }

  render(regionOrder) {
    this.start();

    this.#getExpansionDetailsElement().replaceChildren();

    if (this.details) {
      this.details.render(this.#getExpansionDetailsElement(), regionOrder);
    }
  }

  valid() {
    if (this.isNone()) {
      return true;
    }

    if (this.details === null) {
      return false;
    }

    return this.details.valid();
  }

  get storageKey() {
    return 'expansion';
  }

  #getExpansionDetailsElement() {
    return document.getElementById('expansion-details');
  }

  #getSelectorElement() {
    return document.getElementById('expansion-selector');
  }
}

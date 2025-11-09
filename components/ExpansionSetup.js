import { AlliancesExpansionSetup } from "./expansions/AlliancesExpansionSetup.js";
import { CovenantExpansionSetup } from "./expansions/CovenantExpansionSetup.js";

export class ExpansionSetup {
  static NO_EXPANSION = 'none';
  static ALLIANCES_EXPANSION = 'alliances';
  static COVENANT_EXPANSION = 'covenant';

  static EXPANSIONS = [
    this.NO_EXPANSION,
    this.ALLIANCES_EXPANSION,
    this.COVENANT_EXPANSION
  ];

  // This isn't storable so nothing is preserving these details on refresh...
  // Should just lean on the expansionModel.details instead...
  _specificExpansionSetup;
  expansionModel;

  constructor(expansionModel) {
    this.expansionModel = expansionModel;

    this.populateExpansionSelector();
    this.addSelectorListener();
    this.addExpansionSetupListener();
  }

  addExpansionSetupListener() {
    this.#getExpansionSetupElement().addEventListener('change', (e) => {
      this._specificExpansionSetup.handleEvent(e);
      this.expansionModel.updateStorage();
    });
  }

  addSelectorListener() {
    this.#getExpansionSelectorElement().addEventListener('change', (e) => {
      const selector = e.target.closest('#expansion-selector');

      if (selector.dataset.action === 'select') {
        this.expansionModel.setExpansion(e.target.value);
        this.specificExpansion();
      }
    });
  }

  populateExpansionSelector() {
    const selector = this.#getExpansionSelectorElement();

    if (selector.children.length > 1) {
      // Avoid populating the selector more than once.
      return;
    }

    ExpansionSetup.EXPANSIONS.forEach(expansion => {
      let opt = document.createElement('option');
      opt.value = expansion;
      opt.textContent = expansion.charAt(0).toUpperCase() + expansion.slice(1);
      selector.append(opt);
    });
  }

  specificExpansion() {
    this.#getExpansionSetupElement().replaceChildren();

    if (this.expansionModel.isNone()) {
      this._specificExpansionSetup = null;
      this.#getExpansionSetupElement().classList.add('hidden');
    } else {
      if (this.expansionModel.isAlliances()) {
        this._specificExpansionSetup = new AlliancesExpansionSetup(this.expansionModel);
      } else if (this.expansionModel.isCovenant()) {
        this._specificExpansionSetup = new CovenantExpansionSetup(this.expansionModel);
      }

      this.#getExpansionSetupElement().classList.remove('hidden');
    }
  }

  updateExpansionSelectorValues() {
    this.#getExpansionSelectorElement().value = this.expansionModel.expansion;

    this.specificExpansion();

    if (this._specificExpansionSetup) {
      this._specificExpansionSetup.updateSelectorValues();
    }
  }

  #getExpansionSelectorElement() {
    return document.getElementById('expansion-selector');
  }

  #getExpansionSetupElement() {
    return document.getElementById('expansion-setup');
  }
}

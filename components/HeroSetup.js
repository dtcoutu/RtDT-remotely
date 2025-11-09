import { REGIONS } from "../data/regions.js";
import { HEROES } from "../data/heroes.js";

export class HeroSetup {
  static HERO_SELECT_ID = 'hero-selector';
  static KINGDOM_SELECT_ID = 'kingdom-selector';

  constructor(heroModel) {
    this.heroModel = heroModel;

    this.populateHeroSelector();
    this.populateKingdomSelector();
    this.addListener();
  }

  addListener() {
    this.#getHeroSelectorElement().addEventListener('change', (e) => {
      const selector = e.target.closest('#hero-selector');

      if (selector.dataset.action === 'select') {
        this.heroModel.setHero(e.target.value);
      }
    });

    this.#getKingdomSelectorElement().addEventListener('change', (e) => {
      const selector = e.target.closest('#kingdom-selector');

      if (selector.dataset.action === 'select') {
        this.heroModel.setKingdom(e.target.value);
        this.updateKingdomSelectorValue();
      }
    });
  }

  populateHeroSelector() {
    const selector = this.#getHeroSelectorElement();

    if (selector.children.length > 1) {
      // Avoid populating the selector more than once.
      return;
    }

    HEROES.map(hero => {
      let opt = document.createElement('option');
      opt.value = hero.id;
      opt.innerHTML = hero.name;
      selector.append(opt);
    });
  }

  populateKingdomSelector() {
    const selector = this.#getKingdomSelectorElement();

    if (selector.children.length > 1) {
      // Avoid populating the selector more than one.
      return;
    }

    REGIONS.map(region => {
      let opt = document.createElement("option");
      opt.value = region.id;
      opt.innerHTML = region.name;
      selector.append(opt);
    });
  }

  addVirtueListener() {
    document.getElementById('virtues').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'toggle') {
        this.heroModel.toggleVirtue(e.target.dataset.virtue);
      }
    });
  }

  updateHeroSelectorValue() {
    this.#getHeroSelectorElement().value = this.heroModel.id;
  }

  updateKingdomSelectorValue() {
    const kingdom = this.heroModel.kingdom;

    const value = (kingdom === null) ? '' : this.heroModel.kingdom.id;
    this.#getKingdomSelectorElement().value = value;
  }

  #getHeroSelectorElement() {
    return document.getElementById(HeroSetup.HERO_SELECT_ID);
  }

  #getKingdomSelectorElement() {
    return document.getElementById(HeroSetup.KINGDOM_SELECT_ID);
  }
}

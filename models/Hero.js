import { REGIONS } from "../data/regions.js";
import { HEROES } from "../data/heroes.js";
import { Kingdom } from "./Kingdom.js";
import { Storable } from "./Storable.js";
import { Virtue } from "./Virtue.js";

export class Hero extends Storable {
  static MANAGED_ELEMENT_IDS = [
    'hero-name',
    'actions',
    'virtues'
  ];

  id = '';
  name = '';
  color = '';
  expansion = '';
  banner = '';
  move = null;
  virtues = [];
  kingdom = null;

  constructor() {
    super();

    const data = this.loadStorage();

    Object.keys(data).forEach(key => {
      if (key === 'virtues') {
        data[key].forEach(virtue => {
          this.virtues.push(new Virtue(virtue));
        });
        return;
      } else if (key === 'kingdom') {
        if (data[key]) {
          this.kingdom = new Kingdom(data[key]);
        }
        return;
      }

      this[key] = data[key];
    });

    this.addListener();
  }

  addListener() {
    document.getElementById('virtues').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'toggle') {
        this.toggleVirtue(e.target.value);
      }
    });
  }

  setHero(heroId) {
    const hero = HEROES.find(hero => hero.id === heroId);

    Object.keys(hero).forEach(key => {
      if (key === 'virtues') {
        this.virtues = [];
        hero[key].forEach(virtue => {
          this.virtues.push(new Virtue(virtue));
        });
        return;
      }

      this[key] = hero[key];
    });

    this.updateStorage();
  }

  setKingdom(regionId) {
    const region = REGIONS.find(region => region.id === regionId);

    this.kingdom = new Kingdom(region)

    this.updateStorage();
  }

  toggleVirtue(virtueId) {
    this.#findVirtue(virtueId).toggle();

    this.updateStorage();
  }

  start() {
    this.virtues.forEach(virtue => virtue.start());
    this.kingdom.start();

    Hero.MANAGED_ELEMENT_IDS.forEach(elementId =>
      document.getElementById(elementId).classList.remove('hidden')
    );
  }

  render() {
    this.start();

    const heroName = document.getElementById('hero-name');
    heroName.innerHTML = this.name;
    const heroBackground = document.getElementById('hero-background');
    heroBackground.style.background = this.color;

    const banner = document.getElementById('banner-description');
    banner.innerHTML = this.banner;
    const movement = document.getElementById('movement');
    movement.innerHTML = this.move;

    this.virtues.forEach(virtue => virtue.render());
    this.kingdom.render();
  }

  reset() {
    super.reset();

    Hero.MANAGED_ELEMENT_IDS.forEach(elementId =>
      document.getElementById(elementId).classList.add('hidden')
    );
  }

  regionsOrderedFromHeroesView() {
    if (!this.valid()) {
      return [];
    }

    const regions = REGIONS.map(region => region.id);

    const index = regions.indexOf(this.kingdom.id);

    const sortedRegions = regions.splice(index);
    sortedRegions.push(...regions);

    return sortedRegions;
  }

  valid() {
    return this.id !== '' && this.kingdom !== null;
  }

  get storageKey() {
    return 'hero';
  }

  #findVirtue(virtueId) {
    return this.virtues.find(v => v.id === virtueId);
  }
}

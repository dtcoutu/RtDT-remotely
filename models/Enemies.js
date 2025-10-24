import { ENEMIES, TRAITS } from "../enemies.js";
import { Storable } from "./Storable.js";

export class Enemies extends Storable {
  static CONTAINER_ID = 'enemies';

  _2 = '';
  _3 = '';
  _4 = '';
  _5 = '';

  constructor() {
    super();

    const data = this.loadStorage();

    this._2 = data._2;
    this._3 = data._3;
    this._4 = data._4;
    this._5 = data._5;
  }

  getEnemy(level) {
    return this['_' + level];
  }

  setEnemy(level, enemyId) {
    const foundEnemy = ENEMIES.find(enemy => enemy.id === enemyId);

    this['_' + level] = foundEnemy;

    this.updateStorage();
  }

  // Should only be called once on page load or when app started
  // Consider splitting this to a different component.
  render() {
    const enemyContainer = document.getElementById('enemies');
    enemyContainer.replaceChildren();

    for (let l = 2; l <= 5; l++) {
      const enemy = this.getEnemy(l);

      const traitsHTML = enemy.traits.map(trait =>
        `
        <span class="enemy-trait enemy-trait-${trait}">${trait}</span>
        `
      ).join('');

      let battleHTML = '';
      if (enemy.when_battling) {
        battleHTML = enemy.when_battling.map(battleText =>
          `<span class="battle-effect">${battleText}</span>`
        ).join('');
      } else {
        battleHTML = enemy.traits.map(trait =>
          `<span class="battle-effect">${trait.toUpperCase()} ${TRAITS[trait]}</span>`
        ).join('');
      }

      const enemyElement = this.createElementFromHTML(`
        <div id="enemy-level-${enemy.level}">
          <span class="enemy-level">${enemy.level}</span>
          <span class="enemy-name">${enemy.name}</span>
          <div class="enemy-traits">
            ${traitsHTML}
          </div>
          <div class="enemy-battle-effects">
            ${battleHTML}
          </div>
          <span class="enemy-event">${enemy.strike_event}</span>
        </div>
        `);

      enemyContainer.appendChild(enemyElement);
    }
  }

  // This indicates if things are correctly set to start the game
  valid() {
    const fields = Object.entries(this).filter(e => e[0] !== 'data');

    return fields.every(([_field, value]) => value !== '');
  }

  get storageKey() {
    return "enemies";
  }
}

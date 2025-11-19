import { ENEMIES, TRAITS } from "../data/enemies.js";
import { GEAR } from "../data/gear.js";
import { HEROES } from "../data/heroes.js";
import { POTIONS } from "../data/potions.js";
import { SPELLS } from "../data/spells.js";

export class HelperDialogs {
  constructor() {
    this.addListeners();
  }

  addListeners() {
    document.querySelector('body').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'open-dialog') {
        const dialog = document.getElementById(e.target.dataset.id);

        this.populateModal(dialog, e.target.dataset.type);

        dialog.showModal();
      }
    });

    document.getElementById('helper-dialogs').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'close-dialog') {
        const dialog = e.target.closest('dialog');
        dialog.close();

        this.clearModal(dialog);
      }
    });
  }

  clearModal(dialogElement) {
    const contentElement = dialogElement.querySelector('div');

    contentElement.replaceChildren();
  }

  populateModal(dialogElement, type) {
    const contentElement = dialogElement.querySelector('div');

    if (type === 'enemy') {
      this.populateModelForEnemy(contentElement);
    } else if (type === 'gear') {
      this.populateModelForGear(contentElement);
    } else if (type === 'hero') {
      this.populateModelForHero(contentElement);
    } else if (type === 'potion') {
      this.populateModelForPotion(contentElement);
    } else if (type === 'spell') {
      this.populateModelForSpell(contentElement);
    }
  }

  populateModelForEnemy(contentElement) {
    const traits = Object.keys(TRAITS).map(type => `
      <li>${type} ${TRAITS[type]}</li>
      `).join('');

    const enemiesLevel2 = ENEMIES.filter(enemy => enemy.level === '2')
      .map(enemy => this.generateEnemyHTML(enemy)).join('');

    const enemiesLevel3 = ENEMIES.filter(enemy => enemy.level === '3')
      .map(enemy => this.generateEnemyHTML(enemy)).join('');

    const enemiesLevel4 = ENEMIES.filter(enemy => enemy.level === '4')
      .map(enemy => this.generateEnemyHTML(enemy)).join('');

    const enemiesLevel5 = ENEMIES.filter(enemy => enemy.level === '5')
      .map(enemy => this.generateEnemyHTML(enemy)).join('');

    contentElement.innerHTML = `
    <div>
      <h3>Trait Summary</h3>
      <p>The six traits that foes possess indicate what consequences heroes might experience battling them.</p>
      <ul class="help-list">
        ${traits}
      </ul>
    </div>

    <div>
      <h3>Enemies Summary</h3>
      <p>This provides some details on enemies to help with the intial seleciton.</p>

      <h4>Level 2</h4>
      <ul class="help-list">
        ${enemiesLevel2}
      </ul>

      <h4>Level 3</h4>
      <ul class="help-list">
        ${enemiesLevel3}
      </ul>

      <h4>Level 4</h4>
      <ul class="help-list">
        ${enemiesLevel4}
      </ul>

      <h4>Level 5 (Adversaries)</h4>
      <ul class="help-list">
        ${enemiesLevel5}
      </ul>
    </div>
    `;
  }

  generateEnemyHTML(enemy) {
    const additionalEffects = enemy.when_battling?.map(effect => `
        <li>${effect}</li>
        `).join('');

    const additionalEffectsHTML = enemy.when_battling ? `
      <li>
        <strong>Additional effects:</strong>
        <ul class="help-list">
          ${additionalEffects}
        </ul>
      </li>
      ` : ``;

    return `
      <li>${enemy.name} (${enemy.traits.join(', ')})</li>
      <ul class="help-list">
        <li><strong>Event:</strong> ${enemy.strike_event}</li>
        ${additionalEffectsHTML}
      </ul>
      `
  }

  populateModelForGear(contentElement) {
    const cards = GEAR.map(gear => `
      <li class="card">
        <div class="card-header">${gear.name}</div>
        <div class="card-body">${gear.description}</div>
      </li>
      `).join('');

    contentElement.innerHTML = `
      <ul>
        ${cards}
      </ul>
      `;
  }

  populateModelForHero(contentElement) {
    const heroes = HEROES.map(hero => {
      const virtues = hero.virtues.map(virtue => `
        <li>${virtue.name.toUpperCase()} - ${virtue.description}</li>
        `).join('');

      return `
      <li><strong>${hero.name}</strong></li>
      <ul class="help-list">
        <li>${hero.summary}</li>
        <li>Virtues:</li>
        <ul class="help-list">
          ${virtues}
        </ul>
      </ul>
      `}).join('');

    contentElement.innerHTML = `
      <ul class="help-list">
        ${heroes}
      </ul>
      `;
  }

  populateModelForPotion(contentElement) {
    const cards = POTIONS.map(potion => `
      <li class="card">
        <div class="card-header">${potion.name}</div>
        <div class="card-body">${potion.description}</div>
      </li>
      `).join('');

    contentElement.innerHTML = `
      <ul>
        ${cards}
      </ul>
      `;
  }

  populateModelForSpell(contentElement) {
    const cards = SPELLS.map(spell => `
      <li class="card">
        <div class="card-header">${spell.name} (${spell.type})</div>
        <div class="card-body">${spell.description}</div>
      </li>
      `).join('');

    contentElement.innerHTML = `
      <ul>
        ${cards}
      </ul>
      `;
  }
}

import { Storable } from "./Storable.js";

export class Metadata extends Storable {
  static ALLOWED_TYPES = [
    'BEAST',
    'HUMANOID',
    'MAGIC',
    'MELEE',
    'STEALTH',
    'UNDEAD',
    'Wild'
  ]

  static #instance = null;

  advantageCounters;
  advantageHighlights;
  endOfTurn = [];
  endOfMonth = [];
  allowedSpells = [];

  constructor() {
    super();

    if (Metadata.#instance) {
      return Metadata.#instance;
    }

    Metadata.#instance = this;

    const data = this.loadStorage();

    this.advantageCounters = data.advantageCounters;
    this.advantageHighlights = data.advantageHighlights;
    this.endOfTurn = data.endOfTurn;
    this.endOfMonth = data.endOfMonth;
    this.allowedSpells = data.allowedSpells;

    this.addListener();
  }

  addListener() {
    document.getElementById('advantages').addEventListener('click', (e) => {
      if (e.target.dataset.action === 'highlight') {
        const type = e.target.dataset.type;

        if (e.target.classList.contains('highlight')) {
          e.target.classList.remove('highlight');
          this.removeHighlights(type);
        } else {
          e.target.classList.add('highlight');
          this.applyHighlights(type);
        }
      }
    });
  }

  applyHighlights(type) {
    const data = this.#getDataFromType(type);

    data.forEach(item => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.add('highlight');
    });

    document.querySelectorAll('.enemy-trait-' + type).forEach(element => {
      element.classList.add('highlight-enemy');
    });
  }

  removeHighlights(type) {
    const data = this.#getDataFromType(type);

    data.forEach(item => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.remove('highlight');
    });

    document.querySelectorAll('.enemy-trait-' + type).forEach(element => {
      element.classList.remove('highlight-enemy');
    });
  }

  add(source) {
    const system = source.system;

    if (system === undefined) {
      return;
    }

    if (system.advantage) {
      const index = this.advantageHighlights[system.advantage].findIndex(i => i.id === source.id);

      // Only process new entries.
      if (index === -1) {
        this.advantageHighlights[system.advantage].push({
          type: source.type,
          id: source.id
        });

        if (system.amount) {
          this.advantageCounters[system.advantage] += system.amount;
        }
      }
    }

    if (system.endOfTurn) {
      const index = this.endOfTurn.findIndex(entry => entry.id === source.id);

      // Only process new entries.
      if (index === -1) {
        this.endOfTurn.push({
          type: source.type,
          id: source.id
        });
      }
    }

    if (system.endOfMonth) {
      const index = this.endOfMonth.findIndex(entry => entry.id === source.id);

      // Only procxess new entries.
      if (index === -1) {
        this.endOfMonth.push({
          type: source.type,
          id: source.id
        });
      }
    }

    if (system.spells) {
      this.allowedSpells.push(system.spells);
    }

    this.updateStorage();
    this.render();
  }

  remove(source) {
    const system = source.system;

    if (system === undefined) {
      return;
    }

    if (system.advantage) {
      const specificAdvantageHighlights = this.advantageHighlights[system.advantage];
      const index = specificAdvantageHighlights.findIndex(i => i.id === source.id);

      specificAdvantageHighlights.splice(index, 1);

      if (system.amount) {
        this.advantageCounters[system.advantage] -= system.amount;
      }
    }

    if (system.endOfTurn) {
      const index = this.endOfTurn.findIndex(entry => entry.id === source.id);
      this.endOfTurn.splice(index, 1);
    }

    if (system.endOfMonth) {
      const index = this.endOfMonth.findIndex(entry => entry.id === source.id);
      this.endOfMonth.splice(index, 1);
    }

    if (system.spells) {
      const index = this.allowedSpells.findIndex(entry => entry === system.spells);
      this.allowedSpells.splice(index, 1);
    }

    this.updateStorage();
    this.render();
  }

  spellsAllowed() {
    return this.allowedSpells.length > 0;
  }

  #getDataFromType(type) {
    if (Metadata.ALLOWED_TYPES.includes(type)) {
      return this.advantageHighlights[type];
    } else if (type === 'endOfTurn') {
      return this.endOfTurn;
    } else if (type === 'endOfMonth') {
      return this.endOfMonth;
    }
  }

  get storageKey() {
    return 'metadata';
  }

  toJSON() {
    return {
      advantageCounters: this.advantageCounters,
      advantageHighlights: this.advantageHighlights,
      endOfTurn: this.endOfTurn,
      endOfMonth: this.endOfMonth,
      allowedSpells: this.allowedSpells
    }
  }

  start() {
    document.getElementById('advantages').classList.remove('hidden');

    if (this.allowedSpells.length > 0) {
      document.getElementById('spell-cards').classList.remove('hidden');
    }
  }

  render() {
    this.start();

    Metadata.ALLOWED_TYPES.forEach(type => {
      const elementId = type.toLowerCase() + '-counter';
      document.getElementById(elementId).innerHTML = this.advantageCounters[type];
    });
  }

  reset() {
    this.advantageCounters = {};
    this.advantageHighlights = {};
    Metadata.ALLOWED_TYPES.forEach(type => {
      this.advantageCounters[type] = 0;
      this.advantageHighlights[type] = [];
    });

    this.endOfTurn = [];
    this.endOfMonth = [];
    this.allowedSpells = [];

    this.updateStorage();

    document.getElementById('advantages').classList.add('hidden');
    document.getElementById('spell-cards').classList.add('hidden');
  }
}

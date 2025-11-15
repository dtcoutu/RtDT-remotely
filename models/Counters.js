import { Storable } from "./Storable.js";

export class Counters extends Storable {
  warrior;
  spirit;
  blessing;

  constructor() {
    super();

    const data = this.loadStorage();

    Object.keys(data).forEach(key => {
      this[key] = data[key];
    });

    this.addListener();
  }

  addListener() {
    this.#findCountersElement().addEventListener('click', (e) => {
      if (e.target.dataset.action === 'update-counter') {
        const counter = e.target.closest('.counter').dataset.counter;
        const amount = Number(e.target.dataset.amount);
        this.updateCounter(counter, amount);
      }
    });
  }

  updateCounter(counter, amount) {
    this[counter] += amount;

    this.updateStorage();

    this.renderCounter(counter);
  }

  get storageKey() {
    return 'counters';
  }

  start() {
    this.#findCountersElement().classList.remove('hidden');
  }

  render() {
    this.start();

    Object.keys(this).forEach(key => {
      this.renderCounter(key);
    });
  }

  renderCounter(counter) {
    const counterId = counter + '-counter';
    document.getElementById(counterId).textContent = this[counter];
  }

  reset() {
    // Clean up old properties that are no longer used.
    // Only needed for those that played the game before this point.
    delete this._warrior;
    delete this._spirit;
    delete this._blessing;

    this.warrior = 7;
    this.spirit = 1;
    this.blessing = 0;

    this.updateStorage();

    this.#findCountersElement().classList.add('hidden');
  }

  #findCountersElement() {
    return document.getElementById('counters');
  }
}

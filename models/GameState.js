import { Storable } from "./Storable.js";

export class GameState extends Storable {
  _started = false;

  constructor() {
    super();

    const data = this.loadStorage();

    this._started = data._started;
  }

  get started() {
    return this._started === 'true';
  }
  set started(started) {
    this._started = started;
    this.updateStorage();
  }

  get storageKey() {
    return 'game_state';
  }

  render() {
    if (this.started) {
      this.#findSetupElement().removeAttribute('open');
    } else {
      this.#findSetupElement().setAttribute('open', 'true');
    }
  }

  #findSetupElement() {
    return document.getElementById('setup');
  }
}

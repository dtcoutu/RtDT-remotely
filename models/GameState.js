import { Storable } from "./Storable.js";
import { Storage } from "./Storage.js";

export class GameState extends Storable {
  static NO_EXPANSION = 'none';
  static ALLIANCES_EXPANSION = 'alliances';
  static COVENANT_EXPANSION = 'covenant';

  _started = false;
  _expansion = GameState.NO_EXPANSION;

  constructor() {
    super();

    const data = this.loadStorage();

    this._started = data._started;
    this._expansion = data._expansion;
  }

  get expansion() {
    return this._expansion;
  }

  get started() {
    return this._started === 'true';
  }

  get storageKey() {
    return "game_state";
  }

  reset() {
  }

  set expansion(expansion) {
    // Might want to ensure expansion is one of the allowed values
    this._expansion = expansion;
    this.updateStorage();
  }

  set started(started) {
    this._started = started;
    this.updateStorage();
  }
}

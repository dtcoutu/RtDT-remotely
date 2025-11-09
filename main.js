import { GameState } from "./models/GameState.js";
import { Enemies } from "./models/Enemies.js";
import { EnemySetup } from "./components/EnemySetup.js";
import { Hero } from "./models/Hero.js";
import { HeroSetup } from "./components/HeroSetup.js";
import { Metadata } from "./models/Metadata.js";
import { Counters } from "./models/Counters.js";
import { ExpansionSetup } from "./components/ExpansionSetup.js";
import { Expansion } from "./models/Expansion.js";
import { Cards } from "./models/Cards.js";

// Model variables
let metadataModel;
let gameStateModel;
let countersModel;
let heroModel;
let expansionModel;
let enemiesModel;
let cardsModel;

// Setup Component variables
let heroSetup;
let expansionSetup;
let enemySetup;

function resetGame() {
  metadataModel.reset();
  gameStateModel.reset();
  countersModel.reset();
  enemiesModel.reset();
  expansionModel.reset();
  heroModel.reset();
  cardsModel.reset();

  pageUpdate();
}

function startGame() {
  if ((!heroModel.valid()) || (gameStateModel.expansion === '')) {
    alert('You must select a hero, a home kingdom, and indicate any expansion usage.');
    return;
  }

  if (!enemiesModel.valid()) {
    alert('You must select an enemy for each level.');
    return;
  }

  if (!expansionModel.valid()) {
    if (expansionModel.isAlliances()) {
      alert('All guilds must have a region set and they must be unique.');
      return;
    } else if (expansionModel.isCovenant()) {
      alert('All monument regions must have a unique monument assigned.');
      return;
    }
  }

  gameStateModel.started = 'true';

  pageUpdate();
}

function initializeComponents() {
  metadataModel = new Metadata();
  gameStateModel = new GameState();
  countersModel = new Counters();
  heroModel = new Hero();
  expansionModel = new Expansion();
  enemiesModel = new Enemies();
  cardsModel = new Cards();

  heroSetup = new HeroSetup(heroModel);
  expansionSetup = new ExpansionSetup(expansionModel);
  enemySetup = new EnemySetup(enemiesModel);
}

export function setup() {
  initializeComponents();

  document.getElementById('game-initializers').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'start') {
      startGame();
    }

    if (e.target.dataset.action === 'reset') {
      resetGame();
    }
  });
}

export function pageUpdate() {
  heroSetup.updateHeroSelectorValue();
  heroSetup.updateKingdomSelectorValue();
  expansionSetup.updateExpansionSelectorValues();

  enemySetup.updateSelectorValues();

  gameStateModel.render();

  if (gameStateModel.started) {
    countersModel.render();
    metadataModel.render();
    heroModel.render();
    enemiesModel.render();
    cardsModel.render();
    expansionModel.render(heroModel.regionsOrderedFromHeroesView());
  }
}

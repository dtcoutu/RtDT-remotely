import { HEROES } from "./heroes.js";
import { COMPANIONS, ALLIANCE_COMPANIONS } from "./companions.js";
import { ENEMIES, TRAITS } from "./enemies.js";
import { GEAR } from "./gear.js";
import { GUILDS } from "./guilds.js"
import { POTIONS } from "./potions.js";
import { MONUMENTS } from "./monuments.js";
import { SPELLS } from "./spells.js";
import { TREASURES } from "./treasure.js";

const HERO_STORAGE = "hero";
const ENEMY_STORAGE = "enemy";
const REGION_STORAGE = "region";
const COUNTERS_STORAGE = "counters";

const EXPANSION_STORAGE = "expansions";
const ALLIANCES_STORAGE = "alliances";
const COVENANT_STORAGE = "covenant";

const INCLUDE_SPELLS_STORAGE = "include_spells";
const STARTED_STORAGE = "started";

const COMPANION_STORAGE = "companion";
const GEAR_STORAGE = "gear";
const POTION_STORAGE = "potion";
const SPELL_STORAGE = "spell";
const TREASURE_STORAGE = "treasure";

const ADVANTAGES_STORAGE = "advantages";
const HIGHLIGHT_ADVANTAGES_STORAGE = "highlight_advantages"
const HIGHLIGHT_END_OF_TURNS_STORAGE = "highlight_end_of_turns"
const HIGHLIGHT_END_OF_MONTHS_STORAGE = "highlight_end_of_months"

// Expansion keys
const NO_EXPANSION = "none";
const ALLIANCES_EXPANSION = "alliances";
const COVENANT_EXPANSION = "covenant";

const CARD_STORAGES = [
  COMPANION_STORAGE,
  GEAR_STORAGE,
  POTION_STORAGE,
  SPELL_STORAGE,
  TREASURE_STORAGE
]

const NORTH = {
  id: "North",
  name: "Champion of the North",
  type: "region",
  description: "+2 Wild Advantages in mountains",
  system: {
    advantage: 'Wild'
  }
}

const SOUTH = {
  id: "South",
  name: "Champion of the South",
  type: "region",
  description: "+2 Wild Advantages in desert",
  system: {
    advantage: 'Wild'
  }
}

const EAST = {
  id: "East",
  name: "Champion of the East",
  type: "region",
  description: "+2 Wild Advantages in hills",
  system: {
    advantage: 'Wild'
  }
}

const WEST = {
  id: "West",
  name: "Champion of the West",
  type: "region",
  description: "+2 Wild Advantages in forest",
  system: {
    advantage: 'Wild'
  }
}

const REGIONS = [NORTH, EAST, SOUTH, WEST]

const BLESSING_ITEM = {
  type: 'blessing',
  id: 'blessing',
  system: {
    advantage: 'Wild',
    end_of_turn: true
  }
}

function resetGame() {
  localStorage.clear();

  initializeEnemies();
  initializeExpansions();

  hideSections();

  expandElement('setup');

  document.getElementById("expansion-select").value = "";

  pageUpdate();
}

function startGame() {
  const hero = getStoredData(HERO_STORAGE);
  const region = getStoredData(REGION_STORAGE);
  const expansion = localStorage.getItem(EXPANSION_STORAGE);
  const enemies = getStoredData(ENEMY_STORAGE);

  if ((hero === null) || (region === null) || (expansion === '')) {
    alert('You must select a hero, a home kingdom, and indicate any expansion usage.');
    return;
  }

  let missingEnemy = false;
  for (const key in enemies) {
    if (enemies[key] === '') {
      missingEnemy = true;
      break;
    }
  }

  if (missingEnemy) {
    alert('You must select an enemy for each level.');
    return;
  }

  if (expansion === ALLIANCES_EXPANSION && !guildRegionsValid()) {
    alert('All guilds must have a region set and they must be unique.');
    return;
  }

  if (expansion === COVENANT_EXPANSION && !monumentRegionsValid()) {
    alert('All monument regions must have a unique monument assigned.')
    return;
  }

  localStorage.setItem(STARTED_STORAGE, 'true');

  localStorage.setItem(INCLUDE_SPELLS_STORAGE, JSON.stringify([]));
  initializeCardHolders();
  initializeCounters();
  initializeAdvantages();
  initializeHighlights();

  applyPermanentVirtues();
  addSystemDetails(region);

  collapseElement('setup');

  pageUpdate();
}

function guildRegionsValid() {
  const guildRegions = GUILDS.map(guild => document.getElementById(guild.id + '-location').value);

  const uniqueGuildRegions = [...new Set(guildRegions)];

  return guildRegions.length === uniqueGuildRegions.length;
}

function monumentRegionsValid() {
  const covenantDetails = getStoredData(COVENANT_STORAGE);

  const monumentIds = covenantDetails.monuments.map(monument => monument.id);
  const uniqMonumentIds = [...new Set(monumentIds)];

  return uniqMonumentIds.length === 4;
}

function initializeEnemies() {
  const enemies = {
    '2': '',
    '3': '',
    '4': '',
    '5': ''
  }

  localStorage.setItem(ENEMY_STORAGE, JSON.stringify(enemies));
}

function initializeExpansions() {
  localStorage.setItem(EXPANSION_STORAGE, '');
}

function initializeCounters() {
  const counters = {
    warrior: 7,
    spirit: 1,
    blessing: 0
  }

  localStorage.setItem(COUNTERS_STORAGE, JSON.stringify(counters));
}

function initializeAdvantages() {
  const advantages = {
    BEAST: 0,
    HUMANOID: 0,
    MAGIC: 0,
    MELEE: 0,
    STEALTH: 0,
    UNDEAD: 0,
    Wild: 0,
  }

  localStorage.setItem(ADVANTAGES_STORAGE, JSON.stringify(advantages));
}

function initializeHighlights() {
  const initial_highlight_advantages = {
    BEAST: [],
    HUMANOID: [],
    MAGIC: [],
    MELEE: [],
    STEALTH: [],
    UNDEAD: [],
    Wild: []
  }

  localStorage.setItem(HIGHLIGHT_ADVANTAGES_STORAGE, JSON.stringify(initial_highlight_advantages));
  localStorage.setItem(HIGHLIGHT_END_OF_TURNS_STORAGE, JSON.stringify([]));
  localStorage.setItem(HIGHLIGHT_END_OF_MONTHS_STORAGE, JSON.stringify([]));
}

function initializeCardHolders() {
  CARD_STORAGES.forEach(type => localStorage.setItem(type, JSON.stringify([])));
}

function applyPermanentVirtues() {
  const virtues = getStoredData(HERO_STORAGE).virtues;

  virtues.filter((virtue) => virtue.permanent === true).forEach((virtue) => {
    addSystemDetails(virtue);
  });
}

window.expansionSelection = (expansion) => {
  localStorage.setItem(EXPANSION_STORAGE, expansion);

  if (expansion === ALLIANCES_EXPANSION) {
    alliancesInclusion();
  } else if (expansion === COVENANT_EXPANSION) {
    covenantInclusion();
  }

  pageUpdate();
}

function alliancesInclusion() {
  const alliances = {
    guilds: GUILDS
  }

  updateStoredData(ALLIANCES_STORAGE, alliances);
}

function covenantInclusion() {
  const covenant = {
    monuments: []
  };

  updateStoredData(COVENANT_STORAGE, covenant);
}

window.allianceRegionSet = (selectorId, value) => {
  updateStorage(ALLIANCES_STORAGE, (data) => {
    const guild = data.guilds.find((guild) => guild.id === selectorId.split('-')[0])
    guild.region = value;
  });
}

window.allianceGuildSideSet = (selectorId, value) => {
  updateStorage(ALLIANCES_STORAGE, (data) => {
    const guild = data.guilds.find((guild) => guild.id === selectorId.split('-')[0])
    guild.side = value;
  });
}

window.monumentRegionSet = (selectorId, value) => {
  const region = selectorId.split('-')[2];
  const selectedMonument = MONUMENTS.find(monument => monument.id === value);

  updateStorage(COVENANT_STORAGE, (data) => {
    const index = data.monuments.findIndex(monument => monument.region === region);
    if (index >= 0) {
      data.monuments.splice(index, 1);
    }

    selectedMonument.region = region;
    data.monuments.push(selectedMonument);
  });
}

window.selectGear = () => {
  selectCard("gear", GEAR, GEAR_STORAGE);
}

window.selectCompanion = () => {
  selectCard("companion", COMPANIONS, COMPANION_STORAGE);
}

window.selectPotion = () => {
  selectCard("potion", POTIONS, POTION_STORAGE, true);
}

window.selectSpell = () => {
  const include_spell_types = getStoredData(INCLUDE_SPELLS_STORAGE);

  const filteredSpells = SPELLS.filter(spell => include_spell_types.includes(spell.type));
  selectCard("spell", filteredSpells, SPELL_STORAGE);
}

window.selectTreasure = () => {
  selectCard("treasure", TREASURES, TREASURE_STORAGE);
}

function selectCard(elementIdPartial, dataSet, dataStorage, allowMultiple = false) {
  hideElement("select-" + elementIdPartial);

  const selector = document.getElementById(elementIdPartial + "-selector");
  selector.innerHTML = "";

  const currentData = getStoredData(dataStorage);

  const filterFunction = allowMultiple ? (item) => item : (item) => currentData.find((i) => i.id === item.id) === undefined

  dataSet.filter(filterFunction).map((item) => {
    let opt = document.createElement("option");
    opt.value = item.id;
    opt.innerHTML = item.name;
    selector.append(opt);
  });

  selector.classList.remove("hidden");

  expandElement("add-" + elementIdPartial);
}

window.addGear = () => {
  addCard("gear", GEAR, GEAR_STORAGE);
}

window.addCompanion = () => {
  addCard("companion", COMPANIONS, COMPANION_STORAGE);
}

window.addPotion = () => {
  addCard("potion", POTIONS, POTION_STORAGE, true);
}

window.addSpell = () => {
  addCard("spell", SPELLS, SPELL_STORAGE);
}

window.addTreasure = () => {
  addCard("treasure", TREASURES, TREASURE_STORAGE);
}

function addCard(elementIdPartial, dataSet, dataStorage, allowMultiple = false) {
  hideElement("add-" + elementIdPartial);

  const selector = document.getElementById(elementIdPartial + "-selector");
  let itemList = getStoredData(dataStorage);
  const item = structuredClone(dataSet.find(element => element.id === selector.value));

  if (allowMultiple) {
    let matchedItem = itemList.find(i => i.id === item.id)

    if (matchedItem === undefined) {
      item.count = 1;
      itemList.push(item);
    } else {
      matchedItem.count++
    }
  } else {
    if (item.system?.charge) {
      item.currentCharges = item.system.charge;
    }

    itemList.push(item);
  }

  addSystemDetails(item);

  updateStoredData(dataStorage, itemList);
  selector.classList.add("hidden");

  if (itemList.length === dataSet.length && !allowMultiple) {
    disableElement("select-" + elementIdPartial);
  }

  showElement("select-" + elementIdPartial);
}

function removeCard(cardType, id) {
  const dataStorage = CARD_STORAGES.find(type => type === cardType);

  let cardList = getStoredData(dataStorage);

  const index = cardList.findIndex((card) => card.id === id);

  if (index === -1) return;

  const card = cardList[index];

  if (cardList[index].count > 1) {
    cardList[index].count--;
  } else {
    cardList.splice(index, 1);
  }

  removeSystemDetails(card);
  updateStoredData(dataStorage, cardList);

  enableElement("select-" + cardType);
}

function removeSystemDetails(item) {
  if (item.system === undefined) {
    return;
  }

  if (item.system.advantage) {
    updateStorage(HIGHLIGHT_ADVANTAGES_STORAGE, (data) => {
      let advantageItems = data[item.system.advantage];
      const index = advantageItems.findIndex((i) => i.id === item.id);

      advantageItems.splice(index, 1);
    });

    if (item.system.amount) {
      updateStorage(ADVANTAGES_STORAGE, (data) => {
        data[item.system.advantage] -= item.system.amount;
      })
    }
  }

  if (item.system.end_of_turn) {
    updateStorage(HIGHLIGHT_END_OF_TURNS_STORAGE, (data) => {
      const index = data.findIndex((u) => u.id === item.id);
      data.splice(index, 1);
    });
  }

  if (item.system.end_of_month) {
    updateStorage(HIGHLIGHT_END_OF_MONTHS_STORAGE, (data) => {
      const index = data.findIndex((u) => u.id === item.id);
      data.splice(index, 1);
    });
  }

  if (item.system.spells) {
    updateStorage(INCLUDE_SPELLS_STORAGE, (data) => {
      const index = data.findIndex((u) => u === item.system.spells)
      data.splice(index, 1);

      if (data.size === 0) {
        hideElement("spell-cards");
      }
    });
  }
}

const updateStorage = (storageKey, func) => {
  let storageData = getStoredData(storageKey);

  func(storageData);

  updateStoredData(storageKey, storageData);
}

export function heroSelector() {
  const selector = document.getElementById('hero-selector');

  HEROES.map(hero => {
    let opt = document.createElement("option");
    opt.value = hero.id;
    opt.innerHTML = hero.name;
    selector.append(opt);
  });
}

export function guardianSelector() {
  const selector = document.getElementById('guardian-selector');

  REGIONS.map(region => {
    let opt = document.createElement("option");
    opt.value = region.id;
    opt.innerHTML = region.name;
    selector.append(opt);
  });
}

window.selectedRegion = (value) => {
  const region = REGIONS.find(element => element.id === value);

  updateStoredData(REGION_STORAGE, region);
}

window.selectedHero = (value) => {
  const hero = HEROES.find(element => element.id === value);
  updateStoredData(HERO_STORAGE, hero);
}

window.selectedEnemy = (id, value) => {
  const level = id.slice(-1);

  updateStorage(ENEMY_STORAGE, (data) => {
    if (data === null) {
      data = {};
    }

    const foundEnemy = ENEMIES.find(element => element.id === value);

    data[level] = foundEnemy;
  });
}

window.setup = () => {
  document.getElementById('cards').addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (e.target.dataset.action === 'remove') {
      removeCard(card.dataset.cardType, card.dataset.cardId);
    }

    if (e.target.dataset.action === 'recover-charge') {
      updateCharge(card.dataset.cardType + "-" + card.dataset.cardId, 1)
    }

    if (e.target.dataset.action === 'use-charge') {
      updateCharge(card.dataset.cardType + "-" + card.dataset.cardId, -1)
    }
  });

  document.getElementById('game-initializers').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'start') {
      startGame();
    }

    if (e.target.dataset.action === 'reset') {
      resetGame();
    }
  });

  document.getElementById('counters').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'update-counter') {
      const counter = e.target.closest('.counter').dataset.counter;
      const amount = Number(e.target.dataset.amount);
      updateCount(counter, amount);
    }
  });

  document.getElementById('advantages').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'highlight') {
      const type = e.target.dataset.type;
      highlightAdvantage(e.target.classList, type);
    }
  });

  document.getElementById('virtues').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'toggle') {
      toggleVirtue(e.target.value);
    }
  });

  document.getElementById('guilds').addEventListener('click', (e) => {
    if (e.target.dataset.action === 'select-level') {
      const guild = e.target.closest('.guild').id;
      const level = e.target.dataset.level;
      selectGuildLevel(guild, level);
    }
  });
}

window.pageUpdate = () => {
  const hero = getStoredData(HERO_STORAGE);
  const enemies = getStoredData(ENEMY_STORAGE);
  const region = getStoredData(REGION_STORAGE);
  const counters = getStoredData(COUNTERS_STORAGE);
  const advantages = getStoredData(ADVANTAGES_STORAGE);
  const expansion = localStorage.getItem(EXPANSION_STORAGE);
  const alliances = getStoredData(ALLIANCES_STORAGE);
  const covenant = getStoredData(COVENANT_STORAGE);
  const started = localStorage.getItem(STARTED_STORAGE) === 'true';
  const includeSpells = getStoredData(INCLUDE_SPELLS_STORAGE);

  const heroSelector = document.getElementById("hero-selector");
  heroSelector.value = hero ? hero.id : '';

  for (let level = 2; level <= 5; level++) {
    document.getElementById("enemy-selector-level-" + level).value = enemies[level]?.id || '';
  }

  const regionSelector = document.getElementById("guardian-selector");
  regionSelector.value = region ? region.id : '';

  document.getElementById("expansion-select").value = expansion === null ? '' : expansion;

  if (expansion === ALLIANCES_EXPANSION) {
    showElement('alliances-guild-setup');
    toggleAlliancesActions(true);

    alliances.guilds.forEach((guild) => {
      document.getElementById(guild.id + '-location').value = guild.region;
      document.getElementById(guild.id + '-side').value = guild.side
    });
  } else {
    toggleAlliancesActions(false);
    localStorage.removeItem(ALLIANCES_STORAGE);
    hideElement('alliances-guild-setup');
  }

  if (expansion === COVENANT_EXPANSION) {
    showElement('covenant-setup');
    toggleCovenantActions(true);

    covenant.monuments.forEach((monument) => {
      document.getElementById('monument-setup-' + monument.region).value = monument.id;
    });
  } else {
    toggleCovenantActions(false);
    localStorage.removeItem(COVENANT_STORAGE);
    hideElement('covenant-setup');
  }

  if (started) {
    revealSections(expansion, includeSpells);
    setCounters(counters);
    setAdvantages(advantages);
    showHeroDetails(hero);
    showEnemyDetails(enemies);
    showRegionDetails(region);
    showCards(includeSpells);
    if (expansion === ALLIANCES_EXPANSION) {
      showAlliancesGuilds(alliances, region);
    }
    if (expansion === COVENANT_EXPANSION) {
      showCovenantMonuments(covenant, region);
    }
  }
}

function addSystemDetails(item) {
  if (item.system === undefined) {
    return;
  }

  if (item.system.advantage) {
    updateStorage(HIGHLIGHT_ADVANTAGES_STORAGE, (data) => {
      data[item.system.advantage].push({
        type: item.type,
        id: item.id
      });
    });

    if (item.system.amount) {
      updateStorage(ADVANTAGES_STORAGE, (data) => {
        data[item.system.advantage] += item.system.amount
      });
    }
  }

  if (item.system.end_of_turn) {
    updateStorage(HIGHLIGHT_END_OF_TURNS_STORAGE, (data) => {
      data.push({
        type: item.type,
        id: item.id
      });
    });
  }

  if (item.system.end_of_month) {
    updateStorage(HIGHLIGHT_END_OF_MONTHS_STORAGE, (data) => {
      data.push({
        type: item.type,
        id: item.id
      });
    });
  }

  if (item.system.spells) {
    updateStorage(INCLUDE_SPELLS_STORAGE, (data) => {
      data.push(item.system.spells);

      showElement("spell-cards");
    });
  }
}

function revealSections(expansion, includeSpells) {
  [
    "counters",
    "advantages",
    "enemies",
    "actions",
    "virtues",
    "cards"
  ].forEach((id) => {
    showElement(id);
  });

  if (expansion === ALLIANCES_EXPANSION) {
    showElement("guilds");
  }

  if (expansion === COVENANT_EXPANSION) {
    showElement("monuments");
  }

  if (includeSpells.length > 0) {
    showElement("spell-cards");
  }
}

function hideSections() {
  [
    "alliances-guild-setup",
    "counters",
    "advantages",
    "actions",
    "enemies",
    "virtues",
    "cards",
    "spell-cards",
    "guilds",
    "monuments"
  ].forEach((id) => {
    hideElement(id);
  });
}

function setCounters(counters) {
  for (let key in counters) {
    document.getElementById(key + '-counter').innerHTML = counters[key];
  }
}

function setAdvantages(advantages) {
  document.getElementById("beast-counter").innerHTML = advantages.BEAST;
  document.getElementById("humanoid-counter").innerHTML = advantages.HUMANOID;
  document.getElementById("magic-counter").innerHTML = advantages.MAGIC;
  document.getElementById("melee-counter").innerHTML = advantages.MELEE;
  document.getElementById("stealth-counter").innerHTML = advantages.STEALTH;
  document.getElementById("undead-counter").innerHTML = advantages.UNDEAD;
  document.getElementById("wild-counter").innerHTML = advantages.Wild;
}

function showHeroDetails(hero) {
  document.getElementById("banner-description").innerHTML = hero.banner;
  document.getElementById("movement").innerHTML = hero.move;

  // populate virtues
  hero.virtues.map((virtue) => {
    const virtueElement = document.getElementById(virtue.type + '-' + virtue.id);

    document.getElementById(virtue.id + "-name").innerHTML = virtue.name
    document.getElementById(virtue.id + "-description").innerHTML = virtue.description

    if (virtue.permanent) {
      return;
    }

    const buyButton = document.getElementById("buy-" + virtue.id);

    if (virtue.active) {
      virtueElement.querySelectorAll('div').forEach(div => div.classList.remove("inactive"));
      buyButton.innerHTML = "Un Buy";
    } else {
      virtueElement.querySelectorAll('div').forEach(div => div.classList.add("inactive"));
      buyButton.innerHTML = "Buy"
    }
  });
}

function showEnemyDetails(enemies) {
  for (let l = 2; l <= 5; l++) {
    const divContainer = document.getElementById("enemy-level-" + l);
    const enemy = enemies[l.toString()];

    // Add name, traits, and strike event
    const levelSpan = document.createElement("span");
    levelSpan.classList.add("enemy-level")
    levelSpan.innerHTML = enemy.level;
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("enemy-name");
    nameSpan.innerHTML = enemy.name;

    const traitDiv = document.createElement("div");
    traitDiv.id = "enemy-traits";
    enemy.traits.forEach((trait) => {
      const traitSpan = document.createElement("span");
      traitSpan.classList.add("enemy-trait", "enemy-trait-" + trait);
      traitSpan.innerHTML = trait;
      traitDiv.appendChild(traitSpan);
    });

    const battleDiv = document.createElement("div");
    battleDiv.id = "enemy-battle-effects";
    if (enemy.when_battling) {
      enemy.when_battling.forEach((battleText) => {
        const battleSpan = document.createElement("span");
        battleSpan.classList.add("battle-effect");
        battleSpan.innerHTML = battleText;
        battleDiv.appendChild(battleSpan);
      });
    } else {
      enemy.traits.forEach((trait) => {
        const battleSpan = document.createElement("span");
        battleSpan.classList.add("battle-effect");
        battleSpan.innerHTML = trait.toUpperCase() + " " + TRAITS[trait];
        battleDiv.appendChild(battleSpan);
      });
    }

    const eventSpan = document.createElement("span");
    eventSpan.classList.add("enemy-event");
    eventSpan.innerHTML = enemy.strike_event;

    divContainer.replaceChildren(levelSpan, nameSpan, traitDiv, battleDiv, eventSpan);
  }
}

function showRegionDetails(region) {
  // TODO: This is no good because it executes multiple times.
  // Might need to build up the element or introduce a nested div...
  const regionVirtueElement = document.getElementById("virtue-champion-virtue")

  const divContainer = document.createElement("div");
  divContainer.id = region.type + '-' + region.id;
  divContainer.style = "height: 100%;";

  const nameContainer = document.createElement("div");
  nameContainer.id = "champion-virtue-name";
  nameContainer.classList.add("name");
  nameContainer.innerHTML = region.name;
  divContainer.appendChild(nameContainer);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.id = "champion-virtue-description"
  descriptionContainer.classList.add("description");
  descriptionContainer.innerHTML = region.description;
  divContainer.appendChild(descriptionContainer);

  regionVirtueElement.replaceChildren(divContainer);
}

function showCards(includeSpells) {
  showCardsHelper("gear", GEAR_STORAGE);
  showCardsHelper("companion", COMPANION_STORAGE);
  showCardsHelper("potion", POTION_STORAGE);
  showCardsHelper("treasure", TREASURE_STORAGE);

  if (includeSpells.length > 0) {
    showCardsHelper("spell", SPELL_STORAGE);
  }
}

function showCardsHelper(elementIdPartial, dataStorage) {
  const storedData = getStoredData(dataStorage);

  const displayList = document.getElementById(elementIdPartial + "-list");
  displayList.classList.add("card-list");
  displayList.innerHTML = "";

  storedData.map((card) => {
    const cardHeader = createElementFromHTML(`
      <dt class="card" id="${card.type}-${card.id}" data-card-id="${card.id}" data-card-type="${card.type}">
        <button data-action="remove">X</button>
        <span>${card.name}</span>
        ${card.type === "companion" ? `<span class="companion-title">${card.title}</span>` : ''}
        ${card.count ? `<span class="count">x${card.count}</span>` : ''}
      </dt>
      `);

    displayList.appendChild(cardHeader);

    let cardBody;

    if (elementIdPartial === "companion") {
      // benefit - optional with text and usage (optional)
      const benefitHTML = card.benefit ? `
        <div>
          <span>${card.benefit.text}</span>
          ${card.benefit.usage ? `<span class="companion-usage">${card.benefit.usage}</span>` : ''}
        </div>
      ` : '';

      // advantage(s) - each with text and usage (optional)
      const advantagesHTML = card.advantage.map(adv => `
        <div>
          ${adv.text}
          ${adv.usage ? `<span class="companion-usage">${adv.usage}</span>` : ''}
        </div>
        `).join('');

      cardBody = createElementFromHTML(`
        <dd>
          ${benefitHTML}
          ${advantagesHTML}
          <div>${card.name} ${card.event}</div>
        </dd>
        `);
    } else if (elementIdPartial === "treasure") {
      const benefitHTML = card.benefit ? `<div>
          <span>${card.benefit}</span>
        </div>` : '';

      const advantageHTML = card.advantage ? `<div>
          ${card.advantage}
        </div>` : '';

      const chargesHTML = card.currentCharges ? `<div>
        <span>${card.currentCharges}</span>
        <img src="icons/charge.png" height="15" width="15" style="padding-left: 4px; padding-right: 4px;" />
        <button data-action="use-charge">-1</button>
        <button data-action="recover-charge">+1</button>
      </div>` : '';

      cardBody = createElementFromHTML(`
        <dd class="card" data-card-id="${card.id}" data-card-type="${card.type}">
          ${benefitHTML.trim()}
          ${advantageHTML.trim()}
          ${chargesHTML.trim()}
        </dd>
        `);
    } else {
      cardBody = createElementFromHTML(`
        <dd>
          ${card.description}
        </dd>
        `);
    }

    displayList.appendChild(cardBody);
  });
}

function showAlliancesGuilds(alliances, region) {
  alliances.guilds.forEach((guild) => {
    document.getElementById(guild.id + '-region').innerHTML = guild.region;

    for (let i = 1; i <= 4; i++) {
      const guildRankElement = document.getElementById(guild.id + '-rank-' + i);
      if (i === guild.level) {
        guildRankElement.classList.add("selected");
      } else {
        guildRankElement.classList.remove("selected");
      }

      guildRankElement.innerHTML = guild[guild.side]['rank_' + i].text
    }
  });

  // update the guild container with a new class based on the sort order
  sortedRegions(region).forEach((area, index) => {
    const guild = alliances.guilds.find(guild => guild.region === area);
    const guildElement = document.getElementById(guild.id);
    guildElement.removeAttribute('class');
    guildElement.classList.add('region-' + (index + 1));
    guildElement.classList.add('guild');
  });
}

function toggleAlliancesActions(show) {
  [
    'alliances-heroic-action-name',
    'alliances-heroic-action-description',
    'alliances-reinforcement-action-name',
    'alliances-reinforcement-action-description'
  ].forEach(id => {
    if (show) {
      showElement(id);
    } else {
      hideElement(id);
    }
  });
}

function showCovenantMonuments(covenant, region) {
  covenant.monuments.forEach((monument) => {
    document.getElementById(monument.region + '-monument-name').innerHTML = monument.name;
    document.getElementById(monument.region + '-monument-location').innerHTML = monument.location;
    document.getElementById(monument.region + '-monument-offering').innerHTML = monument.offering;
    document.getElementById(monument.region + '-monument-free-action').innerHTML = monument.reinforce.free;
    document.getElementById(monument.region + '-monument-enhanced-cost').innerHTML = monument.reinforce.enhanced.cost + ':';
    document.getElementById(monument.region + '-monument-enhanced-action').innerHTML = monument.reinforce.enhanced.effect;

    if (monument.built) {
      document.getElementById(monument.region + '-monument-build').innerHTML = "Un Build";
      document.getElementById(monument.region + '-monument-reinforcement').classList.remove('inactive');
      document.getElementById(monument.region + '-monument-offering').classList.add('inactive');
    } else {
      document.getElementById(monument.region + '-monument-build').innerHTML = "Build";
      document.getElementById(monument.region + '-monument-reinforcement').classList.add('inactive');
      document.getElementById(monument.region + '-monument-offering').classList.remove('inactive');
    }
  });

  sortedRegions(region).forEach((area, index) => {
    const monumentElement = document.getElementById(area + '-monument');
    monumentElement.removeAttribute('class');
    monumentElement.classList.add('region-' + (index + 1));
  });
}

function toggleCovenantActions(show) {
  [
    'covenant-heroic-action-name',
    'covenant-heroic-action-description'
  ].forEach(id => {
    if (show) {
      showElement(id);
    } else {
      hideElement(id);
    }
  })
}

// Order guilds by region in relation to players region
function sortedRegions(region) {
  const regions = REGIONS.map(region => region.id);

  const index = regions.indexOf(region.id);

  const sortedRegions = regions.splice(index);
  sortedRegions.push(...regions);

  return sortedRegions;
}

function selectGuildLevel(guildId, level) {
  updateStorage(ALLIANCES_STORAGE, (data) => {
    const guild = data.guilds.find((guild) => guild.id === guildId);
    const guildlevelIncreased = guild.level < level;

    guild.level = Number(level);

    if (guildlevelIncreased) {
      var modal = document.getElementById("alliance-companion-modal");

      document.getElementById("alliance-companion-guild").innerHTML = guild.name;

      const selector = document.getElementById("alliance-companion-selector");
      selector.innerHTML = "";

      ALLIANCE_COMPANIONS.filter((companion) => companion.guild == guild.id).map((item) => {
        let opt = document.createElement("option");
        opt.value = item.id;
        opt.innerHTML = item.name;
        selector.append(opt);
      });

      modal.style.display = "block";
    }
  });
}

window.addAllianceCompanion = () => {
  const selector = document.getElementById("alliance-companion-selector");
  updateStorage(COMPANION_STORAGE, (data) => {
    const item = structuredClone(ALLIANCE_COMPANIONS.find(element => element.id === selector.value));

    data.push(item);

    addSystemDetails(item);
  });

  closeModal("alliance-companion-modal")
}

window.closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.updateCharge = (item, amount) => {
  updateStorage(TREASURE_STORAGE, (data) => {
    let found = data.find((d) => d.type + "-" + d.id === item);
    found.currentCharges += amount;
  });
}

function updateCount(counter, amount) {
  updateStorage(COUNTERS_STORAGE, (data) => {
    data[counter] += amount;

    if (counter === 'blessing') {
      if (data[counter] > 0) {
        addSystemDetails(BLESSING_ITEM);
      } else {
        removeSystemDetails(BLESSING_ITEM);
      }
    }
  });
}

function toggleVirtue(value) {
  updateStorage(HERO_STORAGE, (data) => {
    let virtue = data.virtues.find((v) => v.id === value)

    virtue.active = !virtue.active;

    if (virtue.active) {
      addSystemDetails(virtue);
    } else {
      removeSystemDetails(virtue);
    }
  });
}

window.toggleMonumentBuild = (value) => {
  const region = value.split('-')[0];
  updateStorage(COVENANT_EXPANSION, (data) => {
    let monument = data.monuments.find(monument => monument.region === region);

    monument.built = !monument.built;
  });
}

function highlightAdvantage(classList, type) {
  const highlightAdvantages = getStoredData(HIGHLIGHT_ADVANTAGES_STORAGE);

  if (classList.contains('highlight')) {
    classList.remove('highlight');

    highlightAdvantages[type].forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.remove("highlight");
    });

    document.querySelectorAll(".enemy-trait-" + type).forEach((element) => {
      element.classList.remove("highlight-enemy");
    })
  } else {
    classList.add('highlight');

    highlightAdvantages[type].forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.add("highlight");
    });

    document.querySelectorAll(".enemy-trait-" + type).forEach((element) => {
      element.classList.add("highlight-enemy");
    })
  }
}

window.highlightEndOfTurn = (classList) => {
  const hightlightEndOfTurns = getStoredData(HIGHLIGHT_END_OF_TURNS_STORAGE);

  if (classList.contains('highlight')) {
    classList.remove('highlight');

    hightlightEndOfTurns.forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.remove('highlight');
    });
  } else {
    classList.add('highlight');

    hightlightEndOfTurns.forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.add("highlight");
    });
  }
}

window.highlightEndOfMonth = (classList) => {
  const hightlightEndOfMonths = getStoredData(HIGHLIGHT_END_OF_MONTHS_STORAGE);

  if (classList.contains('highlight')) {
    classList.remove('highlight');

    hightlightEndOfMonths.forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.remove('highlight');
    });
  } else {
    classList.add('highlight');

    hightlightEndOfMonths.forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.add('highlight');
    });
  }
}

function getStoredData(key) {
  return JSON.parse(localStorage.getItem(key));
}

function updateStoredData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

  pageUpdate();
}

function enableElement(elementId) {
  const element = document.getElementById(elementId);
  element.removeAttribute("disabled");
}

function disableElement(elementId) {
  const element = document.getElementById(elementId);
  element.setAttribute("disabled", "disabled");
}

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function collapseElement(elementId) {
  const element = document.getElementById(elementId);
  element.removeAttribute('open');
}

function expandElement(elementId) {
  const element = document.getElementById(elementId);
  element.setAttribute('open', 'true');
}

function createElementFromHTML(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

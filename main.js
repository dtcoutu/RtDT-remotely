import { CHARACTERS } from "./characters.js";
import { COMPANIONS, ALLIANCE_COMPANIONS } from "./companions.js";
import { ENEMIES, TRAITS } from "./enemies.js";
import { GEAR } from "./gear.js";
import { POTIONS } from "./potions.js";
import { TREASURES } from "./treasure.js";

const CHARACTER_STORAGE = "character";
const COMPANIONS_STORAGE = "companions";
const ENEMIES_STORAGE = "enemies";
const GEAR_STORAGE = "gear";
const POTIONS_STORAGE = "potions";
const REGION_STORAGE = "region";
const TREASURE_STORAGE = "treasures";
const ADVANTAGES_STORAGE = "advantages";
const COUNTERS_STORAGE = "counters";
const ALLIANCES_STORAGE = "alliances";
const STARTED_STORAGE = "started";
const HIGHLIGHT_ADVANTAGES_STORAGE = "highlight_advantages"
const HIGHLIGHT_END_OF_TURNS_STORAGE = "highlight_end_of_turns"
const HIGHLIGHT_END_OF_MONTHS_STORAGE = "highlight_end_of_months"

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

const REGIONS = [ NORTH, SOUTH, EAST, WEST]

const GUILDS = [
    'arcane_scouts',
    'druids_circle',
    'paladins_order',
    'thieves_guild'
]

window.resetGame=() => {
    localStorage.clear();

    initializeEnemies();

    hideSections();

    document.getElementById("alliances-expansion").value = "";

    pageUpdate();
}

window.startGame=() => {
    const character = getStoredData(CHARACTER_STORAGE);
    const region = getStoredData(REGION_STORAGE);
    const alliances = getStoredData(ALLIANCES_STORAGE);

    if ((character === null) || (region === null) || (alliances === null)) {
        alert('You must select a character, a region, indicate if alliances expansion is in play.');
        return;
    }

    if (alliances.included && !guildRegionsValid()) {
        alert('All guilds must have a region set and they must be unique');
        return;
    }

    localStorage.setItem(STARTED_STORAGE, 'true');

    initializeCardHolders();

    initializeCounters();
    initializeAdvantages();
    initializeHighlights();

    applyPermanentVirtues();
    addAdvantages(region);

    pageUpdate();
}

function guildRegionsValid() {
    const guildRegions = GUILDS.map(guild => document.getElementById(guild + '-location').value);

    const uniqueGuildRegions = guildRegions.filter((region, index, array) => array.indexOf(region) === index)

    return guildRegions.length === uniqueGuildRegions.length;
}

function initializeEnemies() {
  const enemies = {
    '2': '',
    '3': '',
    '4': '',
    '5': ''
  }

  updateStoredData(ENEMIES_STORAGE, enemies);
}

function initializeCounters() {
    const counters = {
        warriors: 7,
        spirit: 1,
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
  localStorage.setItem(COMPANIONS_STORAGE, JSON.stringify([]));
  localStorage.setItem(GEAR_STORAGE, JSON.stringify([]));
  localStorage.setItem(POTIONS_STORAGE, JSON.stringify([]));
  localStorage.setItem(TREASURE_STORAGE, JSON.stringify([]));
}

function applyPermanentVirtues() {
  const virtues = getStoredData(CHARACTER_STORAGE).virtues;

  virtues.filter((virtue) => virtue.permanent === true).forEach((virtue) => {
    addAdvantages(virtue);
  });
}

window.alliancesInclusion=(included) => {
  if (included === '---') {
      return;
  }

  const alliancesIncluded = included === 'true';

  const alliances = {
    included: alliancesIncluded,
    guilds: {
      arcane_scouts: {
        region: '',
        side: 'a',
        level: 1
      },
      druids_circle: {
        region: '',
        side: 'a',
        level: 1
      },
      paladins_order: {
        region: '',
        side: 'a',
        level: 1
      },
      thieves_guild: {
        region: '',
        side: 'a',
        level: 1
      }
    }
  }

  updateStoredData(ALLIANCES_STORAGE, alliances);
}

window.allianceRegionSet=(selectorId, value) => {
    const alliances = getStoredData(ALLIANCES_STORAGE);

    const guildName = selectorId.split('-')[0];
    alliances.guilds[guildName].region = value;

    updateStoredData(ALLIANCES_STORAGE, alliances);
}

window.selectGear=() => {
    selectCard("gear", GEAR, GEAR_STORAGE);
}

window.selectCompanion=() => {
    selectCard("companion", COMPANIONS, COMPANIONS_STORAGE);
}

window.selectPotion=() => {
    selectCard("potion", POTIONS, POTIONS_STORAGE, true);
}

window.selectTreasure=() => {
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

    showElement("add-" + elementIdPartial);
}

window.addGear=() => {
    addCard("gear", GEAR, GEAR_STORAGE);
}

window.addCompanion=() => {
    addCard("companion", COMPANIONS, COMPANIONS_STORAGE);
}

window.addPotion=() => {
    addCard("potion", POTIONS, POTIONS_STORAGE, true);
}

window.addTreasure=() => {
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
        itemList.push(item);
    }

    addAdvantages(item);

    updateStoredData(dataStorage, itemList);
    selector.classList.add("hidden");

    if (itemList.length === dataSet.length && !allowMultiple) {
        disableElement("select-" + elementIdPartial);
    }

    showElement("select-" + elementIdPartial);
}

function removeCard(buttonEvent) {
    const cardId = buttonEvent.target.value;
    const cardType = buttonEvent.target.name;

    let dataStorage = "";
    switch (cardType) {
        case "companion":
            dataStorage = COMPANIONS_STORAGE;
            break;
        case "gear":
            dataStorage = GEAR_STORAGE;
            break;
        case "potion":
            dataStorage = POTIONS_STORAGE;
            break;
        case "treasure":
            dataStorage = TREASURE_STORAGE;
            break;
    }

    let cardList = getStoredData(dataStorage);

    const index = cardList.findIndex((card) => card.id === cardId);

    if (index === -1) return;

    const card = cardList[index];

    if (cardList[index].count > 1) {
        cardList[index].count--;
    } else {
        cardList.splice(index, 1);
    }

    removeAdvantages(card);
    updateStoredData(dataStorage, cardList);

    enableElement("select-" + cardType);
}

function removeAdvantages(card) {
  if (card.system) {
    if (card.system.advantage) {
      updateStorage(HIGHLIGHT_ADVANTAGES_STORAGE, (data) => {
        let advantageItems = data[card.system.advantage];
        const index = advantageItems.findIndex((item) => item.id === card.id);

        advantageItems.splice(index, 1);
      });

      if (card.system.amount) {
        updateStorage(ADVANTAGES_STORAGE, (data) => {
          data[card.system.advantage] -= card.system.amount;
        })
      }
    }

    if (card.system.end_of_turn) {
      updateStorage(HIGHLIGHT_END_OF_TURNS_STORAGE, (data) => {
        const index = data.findIndex((item) => item.id === card.id);
        data.splice(index, 1);
      });
    }

    if (card.system.end_of_month) {
      updateStorage(HIGHLIGHT_END_OF_MONTHS_STORAGE, (data) => {
        const index = data.findIndex((item) => item.id === card.id);
        data.splice(index, 1);
      });
    }
  }
}

const updateStorage = (storageKey, func) => {
  let storageData = getStoredData(storageKey);

  func(storageData);

  updateStoredData(storageKey, storageData);
}

export function characterSelector() {
    const selector = document.getElementById('character-selector');

    CHARACTERS.map( (character) => {
        let opt = document.createElement("option");
        opt.value = character.id;
        opt.innerHTML = character.name;
        selector.append(opt);
    });
}

export function guardianSelector() {
    const selector = document.getElementById('guardian-selector');

    REGIONS.map( region => {
        let opt = document.createElement("option");
        opt.value = region.id;
        opt.innerHTML = region.name;
        selector.append(opt);
    });
}

window.selectedRegion=(value) => {
    const region = REGIONS.find(element => element.id === value);

    updateStoredData(REGION_STORAGE, region);
}

window.selectedCharacter=(value) => {
    const character = CHARACTERS.find(element => element.id === value);
    updateStoredData(CHARACTER_STORAGE, character);
}

window.selectedEnemy=(id, value) => {
    const level = id.slice(-1);

    updateStorage(ENEMIES_STORAGE, (data) => {
      if (data === null) {
        data = {};
      }

      const foundEnemy = ENEMIES.find(element => element.id === value );

      data[level] = foundEnemy;
    });
}

window.pageUpdate=() => {
    const character = getStoredData(CHARACTER_STORAGE);
    const enemies = getStoredData(ENEMIES_STORAGE);
    const region = getStoredData(REGION_STORAGE);
    const counters = getStoredData(COUNTERS_STORAGE);
    const advantages = getStoredData(ADVANTAGES_STORAGE);
    const alliances = getStoredData(ALLIANCES_STORAGE);
    const started = localStorage.getItem(STARTED_STORAGE) === 'true';

    const characterSelector = document.getElementById("character-selector");
    characterSelector.value = character ? character.id : '';

    document.getElementById("enemy-selector-level-2").value = enemies["2"]?.id || '';
    document.getElementById("enemy-selector-level-3").value = enemies["3"]?.id || '';
    document.getElementById("enemy-selector-level-4").value = enemies["4"]?.id || '';
    document.getElementById("enemy-selector-level-5").value = enemies["5"]?.id || '';

    const regionSelector = document.getElementById("guardian-selector");
    regionSelector.value = region ? region.id : '';

    const alliancesExpansionSelector = document.getElementById("alliances-expansion");
    alliancesExpansionSelector.value = alliances ? alliances.included : '';

    if (alliances !== null) {
        const alliances_guild_setup = document.getElementById('alliances-guild-setup');
        if (alliances.included) {
            alliances_guild_setup.classList.remove('hidden');
        } else {
            alliances_guild_setup.classList.add('hidden');
        }

        GUILDS.map(guild =>
            document.getElementById(guild + '-location').value = alliances.guilds[guild].region
        );
    }

    if (started) {
        revealSections(alliances);
        setCounters(counters);
        setAdvantages(advantages);
        showCharacterDetails(character);
        showEnemyDetails(enemies);
        showRegionDetails(region);
        showCards();
        if (alliances.included) {
            showAlliancesGuilds(alliances, region);
        }
    }
}

function addAdvantages(item) {
  if (item.system) {
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
  }
}

function revealSections(alliances) {
  [
    "counters",
    "advantages",
    "enemies",
    "actions",
    "virtues",
    "cards"
  ].forEach((id) => {
    document.getElementById(id).classList.remove("hidden");
  });

  if (alliances.included) {
    document.getElementById("guilds").classList.remove("hidden");
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
        "guilds"
    ].forEach((id) => {
        document.getElementById(id).classList.add("hidden");
    });
}

function setCounters(counters) {
    document.getElementById("warrior-counter").innerHTML = counters.warriors;
    document.getElementById("spirit-counter").innerHTML = counters.spirit;
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

function showCharacterDetails(character) {
    document.getElementById("banner-description").innerHTML = character.banner;
    document.getElementById("movement").innerHTML = character.move;

    // populate virtues
    character.virtues.map((virtue) => {
        const virtueElement = document.getElementById(virtue.type + '-' + virtue.id);

        document.getElementById(virtue.id + "-name").innerHTML = virtue.name
        document.getElementById(virtue.id + "-description").innerHTML = virtue.description

        if (virtue.permanent) {
            return;
        }

        const buyButton = document.getElementById("buy-" + virtue.id);

        if (virtue.active) {
            virtueElement.classList.remove("inactive");
            buyButton.innerHTML = "Un Buy";
        } else {
            virtueElement.classList.add("inactive");
            buyButton.innerHTML = "Buy"
        }
    });
}

function showEnemyDetails(enemies) {
    for (let l=2; l<=5; l++) {
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
            traitSpan.classList.add("enemy-trait");
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

window.showCards=() => {
    showCardsHelper("gear", GEAR_STORAGE);
    showCardsHelper("companion", COMPANIONS_STORAGE);
    showCardsHelper("potion", POTIONS_STORAGE);
    showCardsHelper("treasure", TREASURE_STORAGE);
}

function showCardsHelper(elementIdPartial, dataStorage) {
    const storedData = getStoredData(dataStorage);

    const displayList = document.getElementById(elementIdPartial + "-list");
    displayList.classList.add("card-list");
    displayList.innerHTML = "";

    storedData.map((card) => {
        const cardHeader = document.createElement("dt");
        cardHeader.id = card.type + '-' + card.id;

        const button = document.createElement("button");
        button.addEventListener("click", removeCard, false);
        button.value = card.id;
        button.name = elementIdPartial;
        button.innerHTML = "X";
        cardHeader.appendChild(button);

        const cardName = document.createElement("span");
        cardName.innerHTML = card.name;
        cardHeader.appendChild(cardName);

        if (card.count) {
            const count = document.createElement("span");
            count.classList.add("count");
            count.innerHTML = "x" + card.count;
            cardHeader.appendChild(count);
        }

        displayList.appendChild(cardHeader);
        const cardBody = document.createElement("dd");


        if (elementIdPartial === "companion") {
            const cardTitle = document.createElement("span");
            cardTitle.innerHTML = card.title;
            cardTitle.classList.add("companion-title");
            cardHeader.appendChild(cardTitle);

            // benefit - optional with text and usage (optional)
            if (card.benefit) {
                const benefit = document.createElement("div");
                const benefitText = document.createElement("span");
                benefitText.innerHTML = card.benefit.text;
                benefit.appendChild(benefitText);

                if (card.benefit.usage) {
                    const benefitUsage = document.createElement("span");
                    benefitUsage.classList.add("companion-usage");
                    benefitUsage.innerHTML = card.benefit.usage;
                    benefit.appendChild(benefitUsage);
                }

                cardBody.appendChild(benefit);
            }

            // advantage(s) - each with text and usage (optional)
            card.advantage.forEach((advantage) => {
                const advantageElement = document.createElement("div");
                advantageElement.innerHTML = advantage.text;

                if (advantage.usage) {
                    const advantageUsage = document.createElement("span");
                    advantageUsage.classList.add("companion-usage");
                    advantageUsage.innerHTML = advantage.usage;
                    advantageElement.appendChild(advantageUsage);
                }

                cardBody.appendChild(advantageElement);
            });

            // event
            const eventElement = document.createElement("div");
            eventElement.innerHTML = card.name + " " + card.event;
            cardBody.appendChild(eventElement);
        } else if (elementIdPartial === "treasure") {
            // benefit - optional with text and usage (optional)
            if (card.benefit) {
                const benefit = document.createElement("div");
                const benefitText = document.createElement("span");
                benefitText.innerHTML = card.benefit;
                benefit.appendChild(benefitText);

                cardBody.appendChild(benefit);
            }

            // advantage(s) - each with text and usage (optional)
            if (card.advantage) {
                const advantageElement = document.createElement("div");
                advantageElement.innerHTML = card.advantage;
                cardBody.appendChild(advantageElement);
            }
        } else {
            cardBody.innerHTML = card.description;
        }

        displayList.appendChild(cardBody);
    });
}

function showAlliancesGuilds(alliances, region) {
    GUILDS.map(guild => {
        document.getElementById(guild + '-region').innerHTML = alliances.guilds[guild].region;

        for (let i = 1; i <= 4; i++) {
            document.getElementById(guild + '-rank-' + i).classList.remove("selected");
        }

        document.getElementById(guild + '-rank-' + alliances.guilds[guild].level).classList.add("selected");
    });

    // Order guilds by region in relation to players region
    const regions = ['North', 'East', 'South', 'West'];

    const index = regions.indexOf(region.id);

    const sorted_regions = regions.splice(index);
    sorted_regions.push(...regions);

    // update the guild container with a new class based on the sort order
    sorted_regions.forEach((area, index) => {
        const guild = Object.keys(alliances.guilds).find(guild => alliances.guilds[guild].region === area);
        const guildElement = document.getElementById(guild + '-' + alliances.guilds[guild].side);
        guildElement.removeAttribute('class');
        guildElement.classList.add('region-' + (index+1));
    });
}

window.selectGuildLevel=(guildLevelId) => {
    const [guild, level] = guildLevelId.split("-rank-");

    const alliances = getStoredData(ALLIANCES_STORAGE);

    const guildLevelIncreased = alliances.guilds[guild].level < level;

    alliances.guilds[guild].level = level;

    updateStoredData(ALLIANCES_STORAGE, alliances);

    if (guildLevelIncreased) {
        var modal = document.getElementById("alliance-companion-modal");

        document.getElementById("alliance-companion-guild").innerHTML = guild.replace("_", " ");

        const selector = document.getElementById("alliance-companion-selector");
        selector.innerHTML = "";
    
        ALLIANCE_COMPANIONS.filter((companion) => companion.guild == guild).map((item) => {
            let opt = document.createElement("option");
            opt.value = item.id;
            opt.innerHTML = item.name;
            selector.append(opt);
        });

        modal.style.display = "block";
    }
}

window.addAllianceCompanion=() => {
    const selector = document.getElementById("alliance-companion-selector");
    updateStorage(COMPANIONS_STORAGE, (data) => {
      const item = structuredClone(ALLIANCE_COMPANIONS.find(element => element.id === selector.value));

      data.push(item);

      addAdvantages(item);
    });

    closeModal("alliance-companion-modal")
}

window.closeModal=(modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

window.updateCount=(counter, amount) => {
    updateStorage(COUNTERS_STORAGE, (data) => {
      data[counter] += amount;
    });
}

window.toggleVirtue=(value) => {
  updateStorage(CHARACTER_STORAGE, (data) => {
    let virtue = data.virtues.find((v) => v.id === value)

    virtue.active = !virtue.active;

    if (virtue.active) {
      addAdvantages(virtue);
    } else {
      removeAdvantages(virtue);
    }
  });
}

window.highlightAdvantage=(classList, type) => {
  const highlightAdvantages = getStoredData(HIGHLIGHT_ADVANTAGES_STORAGE);

  if (classList.contains('highlight')) {
    classList.remove('highlight');

    highlightAdvantages[type].forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.remove("highlight");
    });
  } else {
    classList.add('highlight');

    highlightAdvantages[type].forEach((item) => {
      const element = document.getElementById(item.type + '-' + item.id);
      element.classList.add("highlight");
    });
  }
}

window.highlightEndOfTurn=(classList) => {
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

window.highlightEndOfMonth=(classList) => {
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

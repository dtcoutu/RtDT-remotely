import { CHARACTERS } from "./characters.js";
import { COMPANIONS, ALLIANCE_COMPANIONS } from "./companions.js";
import { GEAR } from "./gear.js";
import { POTIONS } from "./potions.js";

const CHARACTER_STORAGE = "character";
const COMPANIONS_STORAGE = "companions";
const GEAR_STORAGE = "gear";
const POTIONS_STORAGE = "potions";
const REGION_STORAGE = "region";
const COUNTERS_STORAGE = "counters";
const ALLIANCES_STORAGE = "alliances";
const STARTED_STORAGE = "started";

const NORTH = {
    id: "North",
    name: "Champion of the North",
    description: "+2 WILD Advantages in mountains",
}

const SOUTH = {
    id: "South",
    name: "Champion of the South",
    description: "+2 WILD Advantages in desert",
}

const EAST = {
    id: "East",
    name: "Champion of the East",
    description: "+2 WILD Advantages in hills",
}

const WEST = {
    id: "West",
    name: "Champion of the West",
    description: "+2 WILD Advantages in forest",
}

const REGIONS = [ NORTH, SOUTH, EAST, WEST]

const GUILDS = [
    'arcane_scouts',
    'druids_circle',
    'paladins_order',
    'thieves_guild'
]

window.resetGame=() => {
    localStorage.setItem(CHARACTER_STORAGE, null);
    localStorage.setItem(COMPANIONS_STORAGE, JSON.stringify([]));
    localStorage.setItem(GEAR_STORAGE, JSON.stringify([]));
    localStorage.setItem(POTIONS_STORAGE, JSON.stringify([]));
    localStorage.setItem(REGION_STORAGE, null);
    localStorage.setItem(COUNTERS_STORAGE, null);
    localStorage.setItem(ALLIANCES_STORAGE, null);
    localStorage.setItem(STARTED_STORAGE, null);

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

    initializeCounters();

    pageUpdate();
}

function guildRegionsValid() {
    const guildRegions = GUILDS.map(guild => document.getElementById(guild + '-location').value);

    const uniqueGuildRegions = guildRegions.filter((region, index, array) => array.indexOf(region) === index)

    return guildRegions.length === uniqueGuildRegions.length;
}

function initializeCounters() {
    const counters = {
        warriors: 7,
        spirit: 1,
    }

    updateStoredData(COUNTERS_STORAGE, counters);
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

export function addCard(elementIdPartial, dataSet, dataStorage, allowMultiple = false) {
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
    }

    let cardList = getStoredData(dataStorage);

    const index = cardList.findIndex((card) => card.id === cardId);

    if (index === -1) return;

    if (cardList[index].count > 1) {
        cardList[index].count--;
    } else {
        cardList.splice(index, 1);
    }

    updateStoredData(dataStorage, cardList);

    enableElement("select-" + cardType);
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

window.pageUpdate=() => {
    const character = getStoredData(CHARACTER_STORAGE);
    const region = getStoredData(REGION_STORAGE);
    const counters = getStoredData(COUNTERS_STORAGE);
    const alliances = getStoredData(ALLIANCES_STORAGE);
    const started = localStorage.getItem(STARTED_STORAGE) === 'true';

    const characterSelector = document.getElementById("character-selector");
    characterSelector.value = character ? character.id : '';

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
        showCharacterDetails(character);
        showRegionDetails(region);
        showCards();
        if (alliances.included) {
            showAlliancesGuilds(alliances, region);
        }
    }
}

function revealSections(alliances) {
    [
        "counters",
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
        "actions",
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

function showCharacterDetails(character) {
    document.getElementById("banner-description").innerHTML = character.banner;
    document.getElementById("movement").innerHTML = character.move;

    // populate virtues
    character.virtues.map((virtue) => {
        const virtueElement = document.getElementById(virtue.id);

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

function showRegionDetails(region) {
    document.getElementById("champion-virtue-name").innerHTML = region.name;
    document.getElementById("champion-virtue-description").innerHTML = region.description;
}

window.showCards=() => {
    showCardsHelper("gear", GEAR_STORAGE);
    showCardsHelper("companion", COMPANIONS_STORAGE);
    showCardsHelper("potion", POTIONS_STORAGE);
}

window.showCardsHelper=(elementIdPartial, dataStorage) => {
    const storedData = getStoredData(dataStorage);

    const displayList = document.getElementById(elementIdPartial + "-list");
    displayList.innerHTML = "";

    storedData.map((item) => {
        const itemTitle = document.createElement("dt");

        const button = document.createElement("button");
        button.addEventListener("click", removeCard, false);
        button.value = item.id;
        button.name = elementIdPartial;
        button.innerHTML = "X";
        itemTitle.appendChild(button);

        const itemName = document.createElement("span");
        itemName.innerHTML = item.name;
        itemTitle.appendChild(itemName);

        if (item.count) {
            const count = document.createElement("span");
            count.classList.add("count");
            count.innerHTML = "x" + item.count;
            itemTitle.appendChild(count);
        }

        displayList.appendChild(itemTitle);
        const itemDescription = document.createElement("dd");
        itemDescription.innerHTML = item.description;
        displayList.appendChild(itemDescription);
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

    sorted_regions.forEach((area, index) => {
        const guild = Object.keys(alliances.guilds).find(guild => alliances.guilds[guild].region === area);
        document.getElementById(guild + '-' + alliances.guilds[guild].side).classList.add('region-' + (index+1));
    });
    // update the guild container with a new class based on the sort order
}

window.selectGuildLevel=(guildLevelId) => {
    const [guild, level] = guildLevelId.split("-rank-");

    const alliances = getStoredData(ALLIANCES_STORAGE);

    alliances.guilds[guild].level = level;

    updateStoredData(ALLIANCES_STORAGE, alliances);
}

window.updateCount=(counter, amount) => {
    let counters = getStoredData(COUNTERS_STORAGE);

    counters[counter] += amount;

    updateStoredData(COUNTERS_STORAGE, counters);
}

window.toggleVirtue=(value) => {
    const character = getStoredData(CHARACTER_STORAGE);

    character.virtues.find(virtue => virtue.id === value).active = !character.virtues.find(virtue => virtue.id === value).active;

    updateStoredData(CHARACTER_STORAGE, character);
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

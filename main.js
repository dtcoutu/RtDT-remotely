import { CHARACTERS } from "./characters.js";

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

const GEAR = [
    {
        id: 'blessed_sceptres',
        name: 'Blessed Sceptres',
        description: 'After your Reinforce remove 1 skull from the building on your space.'
    },
    {
        id: 'brass_talismans',
        name: 'Brass Taslimans',
        description: '+1 MAGIC Advantage'
    },
    {
        id: 'dusky_cloaks',
        name: 'Dusky Cloaks',
        description: '+1 STEALTH Advantage'
    },
    {
        id: 'leather_armor',
        name: 'Leather Armor',
        description: 'Prevent up to 2 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> losses per battle card'
    },
    {
        id: 'longswords',
        name: 'Longswords',
        description: '+1 MELEE Advantage'
    },
    {
        id: 'trusted_maps',
        name: 'Trusted Maps',
        description: 'Your base move is +1.'
    },
]

const POTIONS = [
    {
        id: 'dragons-teeth',
        name: 'Potion of Dragon\'s Teeth',
        description: 'Spend to gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.'
    },
    {
        id: 'fortunes-favor',
        name: 'Potion of Fortune\'s Favor',
        description: 'Spend to gain +1 Wild Advantage'
    },
    {
        id: 'golden-sun',
        name: 'Potion of the Golden Sun',
        description: 'Spend to gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />.'
    },
    {
        id: 'one-thousand-strides',
        name: 'Potion of One Thousand Strides',
        description: 'Spend to move any hero up to 3 spaces.'
    },
    {
        id: 'purifying-breath',
        name: 'Potion of Purifying Breath',
        description: 'Spend to remove up to 2 skulls from any building.'
    },
    {
        id: 'sirens-song',
        name: 'Potion of the Siren\'s Song',
        description: 'Spend to move any for up to 2 spaces.'
    }
]

const COMPANIONS = [
    {
        id: "gleb",
        name: "Gleb",
        title: "The Outlaw King",
        benefit: {
            text: "If you end your turn in the mountains, gain 6 |warrior|"
        },
        advantage: [
            {
                text: "+2 HUMANOID Advantages"
            }
        ],
        event: "provides warriors."
    },
    {
        id: "grigor",
        name: "Grigor",
        title: "The Unbreakable",
        advantage: [
            {
                text: "Spend 1 |spirit| to gain +1 Wild Advantage.",
                usage: "You can do this 3 times per turn."
            },
            {
                text: "+2 MELEE Advantages",
            }
        ],
        event: "removes foes from the board."
    },
    {
        id: "hakan",
        name: "Hakan",
        title: "The Artificer",
        benefit: {
            text: "Spend 2 potions to gain the top card of the treasure deck.",
            usage: "You can do this once per turn."
        },
        advantage: [
            {
                text: "+2 Wild Advantages on spaces with buildings",
            }
        ],
        event: "changes gear into potions."
    },
    {
        id: "letha",
        name: "Letha",
        title: "The Dryad",
        benefit: {
            text: "If you end your turn in a forest, gain 6 |warrior|.",
        },
        advantage: [
            {
                text: "+2 BEAST Advantages",
            }
        ],
        event: "weakens beasts."
    },
    {
        id: "miras",
        name: "Miras",
        title: "The Horselord",
        benefit: {
            text: "If you end your turn in a grasslands, gain 6 |warrior|.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages in grasslands",
            }
        ],
        event: "moves foes around the board."
    },
    {
        id: "nimet",
        name: "Nimet",
        title: "The Fathomless",
        benefit: {
            text: "Spend 3 |spirit| to place a seal on the Tower.",
            usage: "You can do this once per turn."
        },
        advantage: [
            {
                text: "+2 MAGIC Advantages",
            }
        ],
        event: "changes treasures into spirit."
    },
    {
        id: "tomas",
        name: "Tomas",
        title: "The Scout",
        benefit: {
            text: "You do not need to spend spirit to double your move."
        },
        advantage: [
            {
                text: "+2 STEALTH Advantages",
            }
        ],
        event: "moves heros around the board."
    },
    {
        id: "vasa",
        name: "Vasa",
        title: "The Divine",
        benefit: {
            text: "Do not spend spirit for glyphs facing you. After you take an action matching a glyph facing you gain 1 |spirit|."
        },
        advantage: [
            {
                text: "+2 UNDEAD Advantages",
            }
        ],
        event: "removes corruptions."
    },
    {
        id: "yana",
        name: "Yana",
        title: "The Assassin",
        benefit: {
            text: "Gain no more than 1 corruption when you Battle a level 2, 3, or 4 foe."
        },
        advantage: [
            {
                text: "+2 Wild Advantages vs. the adversary",
            }
        ],
        event: "\"handles\" foes before they spawn."
    },
    {
        id: "zaida",
        name: "Zaida",
        title: "The Efreet",
        advantage: [
            {
                text: "Spend one treasure to gain +3 Wild Advantages.",
                usage: "You can do this once per turn."
            }
        ],
        event: "gives treasures."
    },
]

const ALLIANCE_COMPANIONS = [
    {
        id: "berat",
        name: "Berat",
        title: "The Wizard",
        guild: "The Arcane Scouts",
        benefit: {
            text: "When you would gain a gear, you can spend 1 |spirit| to gain the top card of the treasure deck instead.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages in dungeons",
            }
        ],
        event: "makes dungeons easier."
    },
    {
        id: "heraswa",
        name: "Haraswa",
        title: "The Pegasus",
        guild: "The Arcane Scouts",
        benefit: {
            text: "Your base move is +2.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages in mountains",
            }
        ],
        event: "transports you to buildings for reinforcements."
    },
    {
        id: "oola",
        name: "Oola",
        title: "The Nomad",
        guild: "The Arcane Scouts",
        benefit: {
            text: "If you Influence outside your home kingdom, gain an additional 3 |influence|.",
        },
        advantage: [
            {
                text: "+1 Wild Advantage outside your home kingdom",
            }
        ],
        event: "provides spirit to heroes outside their home kingdom."
    },
    {
        id: "burgoyn",
        name: "Burgoyn",
        title: "The Herbalist",
        guild: "Druids Circle",
        benefit: {
            text: "When you spend (not lose) a potion, gain 1 |influence|",
        },
        advantage: [
            {
                text: "+2 Wild Advantages in forests",
            }
        ],
        event: "provides potions."
    },
    {
        id: "ruska",
        name: "Ruska",
        title: "The Barbarian",
        guild: "Druids Circle",
        benefit: {
            text: "You can Reinforce on a space without a building. If you do, gain 6 |warrior| or 1 potion.",
        },
        advantage: [
            {
                text: "+1 Wild Advantage on spaces without buildings",
            }
        ],
        event: "provides spirit if you are outdoors."
    },
    {
        id: "xyr",
        name: "Xyr",
        title: "The Oracle",
        guild: "Druids Circle",
        benefit: {
            text: "Keep the top card of the treasure deck and potion deck face up. At the start of your turn, you may move the top card of either deck to the bottom.",
        },
        advantage: [
            {
                text: "+2 MAGIC Advantages",
            }
        ],
        event: "gives you more time."
    },
    {
        id: "amani",
        name: "Amani",
        title: "The Vizier",
        guild: "Paladins Order",
        benefit: {
            text: "At the end of the month, gain 4 |influence|.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages on spaces with buildings",
            }
        ],
        event: "increases guild ranks."
    },
    {
        id: "omar",
        name: "Omar",
        title: "The Healer",
        guild: "Paladins Order",
        benefit: {
            text: "In each battle, place the first 5 |warrior| that you lose on this card. At the end of the month, gain all |warrior| on this card.",
        },
        advantage: [
            {
                text: "+2 HUMANOID Advantages",
            }
        ],
        event: "highlights dangerous cards in battle."
    },
    {
        id: "sanzhar",
        name: "Sanzhar",
        title: "The Zealot",
        guild: "Paladins Order",
        benefit: {
            text: "Virtues cost you 2 less |spirit|.",
        },
        advantage: [
            {
                text: "+1 Wild Advantage for each viture you have after your first three",
            }
        ],
        event: "provides warriors."
    },
    {
        id: "ema",
        name: "Ema",
        title: "The Grand Merchant",
        guild: "Thieves Guild",
        benefit: {
            text: "You can Reinforce at any building as if it were a bazaar.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages when completing a monthly quest",
            }
        ],
        event: "bribes the guilds."
    },
    {
        id: "maxim",
        name: "Maxim",
        title: "The Beast",
        guild: "Thieves Guild",
        benefit: {
            text: "You can carry up to 4 extra treasures. When you gain a treasure, also gain 2 |influence|.",
        },
        advantage: [
            {
                text: "+2 BEAST Advantages",
            }
        ],
        event: "magically transports items and companions."
    },
    {
        id: "lukas",
        name: "Lukas",
        title: "The Plunderer",
        guild: "Thieves Guild",
        benefit: {
            text: "When you defeat a level 4 foe, gain the top card of the treasure deck.",
        },
        advantage: [
            {
                text: "+2 Wild Advantages if you have any corruptions",
            }
        ],
        event: "\"finds\" treasures."
    },
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

export function selectGear() {
    selectCard("gear", GEAR, GEAR_STORAGE);
}

export function selectCompanion() {
    selectCard("companion", COMPANIONS, COMPANIONS_STORAGE);
}

export function selectPotion() {
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

export function addGear() {
    addCard("gear", GEAR, GEAR_STORAGE);
}

export function addCompanion() {
    addCard("companion", COMPANIONS, COMPANIONS_STORAGE);
}

export function addPotion() {
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

function selectGuildLevel(guildLevelId) {
    const [guild, level] = guildLevelId.split("-rank-");

    const alliances = getStoredData(ALLIANCES_STORAGE);

    alliances.guilds[guild].level = level;

    updateStoredData(ALLIANCES_STORAGE, alliances);
}

function updateCount(counter, amount) {
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

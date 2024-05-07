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

REGIONS = [ NORTH, SOUTH, EAST, WEST]

const archwright = {
    id: "archwright",
    name: "Archwright",
    banner: "Place a battlement on any space or move a battlement up to 2 spaces.",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "innovative",
            description: "+1 BEAST Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "clever",
            description: "Battlements give you +2 Wild Advantages (instead of +1).",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "wily",
            description: "Battlements give you Advantages when you Quest (in addition to when you Battle).",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "tactical",
            description: "While on a battlement, you can Battle a foe on an adjacent space. (Terrain advantages use the space you are on.)",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "exalted",
            description: "While on a battlement, you may Cleanse to remove skulls from all adjacent buildings.",
            active: false
        },
    ]
}

const brutal_warlord = {
    id: "brutal-warlord",
    name: "Brutal Warlord",
    banner: 'Gain 5 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />',
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "baleful",
            description: "+1 MELEE Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "veteran",
            description: "+1 Wild Advantage when you Battle",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "inspiring",
            description: 'After you Reinforce, also gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />.',
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "callous",
            description: 'After you Battle, if you lost at least 10 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />, gain a treasure from the market.',
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "relentless",
            description: "If you double your move, gain +1 Wild Advantage",
            active: false
        },
    ]
}

const devious_swindler = {
    id: "devious-swindler",
    name: "Devious Swindler",
    banner: "Roll the haggle die and gain the result",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "inventive",
            description: "When you Battle, gain all advantages in the treasure market.",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "joyful",
            description: "When you roll the haggle die, ignore Bazaar Closed.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "calculating",
            description: 'You may ignore <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> and <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> losses on <b>critical hit</b> battle cards.',
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "fortuitous",
            description: "After you roll the haggle die, you may reroll once and take either result.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "opportunistic",
            description: "When any player gains a treasure from the treasure market, you gain a blessing.",
            active: false
        },
    ]
}

const haunted_recluse = {
    id: "haunted-recluse",
    name: "Haunted Recluse",
    banner: "Move 1 skull from any building to any other building with 2 or fewer skulls",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "spiritreaver",
            description: "+1 UNDEAD Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "skullweaver",
            description: "When a skull emerges in your home kingdom, you can place it on any building with 2 or fewer skulls in any kingdom.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "sinbearer",
            description: 'At the end of the month, you can spend 12 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> to remove all skulls from your current kingdom.',
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "shadowspinner",
            description: "+1 Wild Advantage for each building with skulls on or adjacent to your space.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "soulreaper",
            description: 'Prevent up to 2 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses per battle card for each skull on or adjacent to your space.',
            active: false
        },
    ]
};

const orphaned_scion = {
    id: "orphaned-scion",
    name: "Orphaned Scion",
    banner: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />',
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "arcane",
            description: "+1 MAGIC Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "generous",
            description: "After you Cleanse, remove 1 skull from any building.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "infused",
            description: "At the start of your turn, remove 1 skull from a building in your home kingdom.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "blessed",
            description: 'Spend 1 spirit to prevent up to 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses from a battle card or dungeon room.',
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "anointed",
            description: "+1 Wild Advantage for each building with no skulls on or adjacent to your space.",
            active: false
        },
    ]
}

const relentless_warden = {
    id: "relentless-warden",
    name: "Relentless Warden",
    banner: "If your quarry token is not on a foe, place it on a foe. Otherwise, move your quarry up to 2 spaces.",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "perceptive",
            description: "+1 Wild Advantage vs. your quarry",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "guarded",
            description: 'Prevent up to 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses per battle card when you Battle your quarry.',
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "inspiring",
            description: "When you defeat your quarry, remove all skulls on or adjacent to your space.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "instinctive",
            description: "You may remove your quarry token to ignore your quarry during its strike event.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "keen-eyed",
            description: "+2 Wild Advantages vs. your quarry",
            active: false
        },
    ]
}

const reverent_astromancer = {
    id: "reverent-astromancer",
    name: "Reverent Astromancer",
    banner: "Remove a skull on or adjacent to your space",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "well versed",
            description: "If you remove a skull with your Banner action, gain a blessing.",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "pious",
            description: "At the start of each month, prepare spells equal to the month number.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "bounteous",
            description: "Once per turn, when you cast a spell, gain the top card of the treasure deck.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "exalted",
            description: "You can prepare invocations.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "zealous",
            description: "Whenever you cast a spell gain a blessing.",
            active: false
        },
    ]
}

const relic_hunter = {
    id: "relic-hunger",
    name: "Relic Hunter",
    banner: "Gain 1 potion",
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "precise",
            description: "+1 HUMANOID Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "prepared",
            description: 'When you reinforce at a bazaar, spend 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to gain a treasure.',
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "crafty",
            description: "When you spend a potion, double the number on it.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "lucky",
            description: "When you spend (not lose) a treasure, gain the top card of the treasure deck.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "inventive",
            description: "Spend 4 potions to remove a foe from your space.",
            active: false
        },
    ]
}

const spymaster = {
    id: "spymaster",
    name: "Spymaster",
    banner: "Place your hero on any space in your current kingdom",
    move: 4,
    virtues: [
        {
            id: "base-virtue-1",
            name: "alert",
            description: "+1 STEALTH Advantage",
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "swift",
            description: "Your base move is 4.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "fortunate",
            description: "You may Reinforce twice per turn at the same building.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "resourceful",
            description: 'At the end of each month, gain 15 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />.',
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "unseen",
            description: 'When you complete a monthly quest, you may remove a foe instead of gaining <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
            active: false
        },
    ]
}

const undaunted_ageis = {
    id: "undaunted_ageis",
    name: "Undaunted Ageis",
    banner: 'For each corruption you have, gain 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />. You may spend 10 Warrior to remove one of your corruptions.',
    move: 3,
    virtues: [
        {
            id: "base-virtue-1",
            name: "ascetic",
            description: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> for each battle card you spend no Advantages on.',
            permanent: true
        },
        {
            id: "base-virtue-2",
            name: "iron-willed",
            description: "You can have an additional corruption. Start the game witha 1 random corruption.",
            permanent: true
        },
        {
            id: "additional-virtue-1",
            name: "emboldened",
            description: "+1 Wild Advantage for each corruption you have",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "resolute",
            description: 'When you Reinforce, spend 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> for each corruption you have.',
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "steeled",
            description: 'Once per turn, if another hero would gain a corruption, you may gain it instead and gain 2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
            active: false
        },
    ]
}

const CHARACTERS = [
    archwright,
    brutal_warlord,
    devious_swindler,
    haunted_recluse,
    orphaned_scion,
    relic_hunter,
    relentless_warden,
    reverent_astromancer,
    spymaster,
    undaunted_ageis,
];

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
        description: 'Something something...'
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
        description: 'Lose less warriors in battle'
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

function resetGame() {
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

function startGame() {
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

function alliancesInclusion(included) {
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

function allianceRegionSet(selectorId, value) {
    const alliances = getStoredData(ALLIANCES_STORAGE);

    const guildName = selectorId.split('-')[0];
    alliances.guilds[guildName].region = value;

    updateStoredData(ALLIANCES_STORAGE, alliances);
}

function selectGear() {
    // TODO: Handle the case when player has all gear
    const button = document.getElementById('select-gear');
    button.classList.add("hidden");

    const selector = document.getElementById('gear-selector');
    selector.innerHTML = "";

    const currentGear = getStoredData(GEAR_STORAGE);

    GEAR.filter((gear) => currentGear.find((g) => g.id === gear.id) === undefined).map((gear) => {
        let opt = document.createElement("option");
        opt.value = gear.id;
        opt.innerHTML = gear.name;
        selector.append(opt);
    });

    selector.classList.remove("hidden");
    const addButton = document.getElementById('add-gear');
    addButton.classList.remove("hidden");
}

function addGear() {
    const addButton = document.getElementById('add-gear');
    addButton.classList.add("hidden");

    const selector = document.getElementById('gear-selector');
    let gearList = getStoredData(GEAR_STORAGE);
    const gear = GEAR.find(element => element.id === selector.value);

    gearList.push(gear);
    updateStoredData(GEAR_STORAGE, gearList);
    selector.classList.add("hidden");

    const button = document.getElementById('select-gear');
    button.classList.remove("hidden");
}

function removeGear(button) {
    const gearId = button.target.value
    let gearList = getStoredData(GEAR_STORAGE);

    const index = gearList.findIndex((gear) => gear.id === gearId);

    if (index === -1) return;
    
    gearList.splice(index, 1);

    updateStoredData(GEAR_STORAGE, gearList);
}

function characterSelector() {
    const selector = document.getElementById('character-selector');

    CHARACTERS.map( (character) => {
        let opt = document.createElement("option");
        opt.value = character.id;
        opt.innerHTML = character.name;
        selector.append(opt);
    });
}

function guardianSelector() {
    const selector = document.getElementById('guardian-selector');

    REGIONS.map( region => {
        let opt = document.createElement("option");
        opt.value = region.id;
        opt.innerHTML = region.name;
        selector.append(opt);
    });
}

function selectedRegion(value) {
    const region = REGIONS.find(element => element.id === value);

    updateStoredData(REGION_STORAGE, region);
}

function selectedCharacter(value) {
    const character = CHARACTERS.find(element => element.id === value);
    updateStoredData(CHARACTER_STORAGE, character);
}

function pageUpdate() {
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
        console.log(virtue);
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

function showCards() {
    const gearCards = getStoredData(GEAR_STORAGE);

    const gearList = document.getElementById("gear-list");
    gearList.innerHTML = "";

    gearCards.map((gear) => {
        const itemTitle = document.createElement("dt");
        itemTitle.innerHTML = gear.name;

        const button = document.createElement("button");
        button.addEventListener("click", removeGear, false);
        button.value = gear.id;
        button.innerHTML = "X";
        itemTitle.appendChild(button);

        gearList.appendChild(itemTitle);
        const itemDescription = document.createElement("dd");
        itemDescription.innerHTML = gear.description;
        gearList.appendChild(itemDescription);
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

function toggleVirtue(value) {
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

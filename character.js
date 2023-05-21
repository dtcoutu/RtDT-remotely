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
            description: "While on a battlement, you can Battle a foe on an adjacent space. (Terrain advantages you the space you are on.)",
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
    banner: "Gain 5 warriors",
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
            description: "After you Reinforce, also gain 6 warriors.",
            active: false
        },
        {
            id: "additional-virtue-2",
            name: "callous",
            description: "After you Battle, if you lost at least 10 warriors, gain a treasure from the market.",
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
            description: "At the end of the month, you can spend 12 warriors to remove all skulls from your current kingdom.",
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
            description: "Prevent up to 2 warrior losses per battle card for each skull on or adjacent to your space.",
            active: false
        },
    ]
};

const orphaned_scion = {
    id: "orphaned-scion",
    name: "Orphaned Scion",
    banner: "Gain 1 spirit",
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
            description: "Spend 1 spirit to prevent up to 6 warrior losses from a battle card or dungeon room.",
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
            description: "When you reinforce at a bazaar, spend 1 less spirit to gain a treasure.",
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
            description: "At the end of each month, gain 15 warriors.",
            active: false
        },
        {
            id: "additional-virtue-3",
            name: "unseen",
            description: "When you complete a monthly quest, you may remove a foe instead of gaining spirit.",
            active: false
        },
    ]
}

const CHARACTERS = [
    archwright,
    brutal_warlord,
    haunted_recluse,
    orphaned_scion,
    relic_hunter,
    spymaster,
];

function characterSelector() {
    const selector = document.getElementById('character-selector');

    CHARACTERS.map( (character, i) => {
        let opt = document.createElement("option");
        opt.value = character.id;
        opt.innerHTML = character.name;
        selector.append(opt);
    });
}

function toggleVirtue(value) {
    const character = JSON.parse(localStorage.getItem("character"));

    character.virtues.find(virtue => virtue.id === value).active = !character.virtues.find(virtue => virtue.id === value).active;

    localStorage.setItem("character", JSON.stringify(character));

    window.location.reload();
}

function selectedCharacter(value) {
    const character = CHARACTERS.find(element => element.id === value);
    localStorage.setItem("character", JSON.stringify(character));

    window.location.reload();
}

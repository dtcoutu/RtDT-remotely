const archwright = {
  id: "archwright",
  name: "Archwright",
  expansion: 'alliances',
  banner: "Place a battlement on any space or move a battlement up to 2 spaces.",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "innovative",
      type: 'virtue',
      description: "+1 BEAST Advantage",
      permanent: true,
      system: {
        advantage: 'BEAST',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "clever",
      type: 'virtue',
      description: "Battlements give you +2 Wild Advantages (instead of +1).",
      permanent: true,
      system: {
        advantage: 'Wild',
      }
    },
    {
      id: "additional-virtue-1",
      name: "wily",
      type: 'virtue',
      description: "Battlements give you Advantages when you Quest (in addition to when you Battle).",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "tactical",
      type: 'virtue',
      description: "While on a battlement, you can Battle a foe on an adjacent space. (Terrain advantages use the space you are on.)",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "exalted",
      type: 'virtue',
      description: "While on a battlement, you may Cleanse to remove skulls from all adjacent buildings.",
      active: false,
      system: {
      }
    },
  ]
}

const brutal_warlord = {
  id: "brutal-warlord",
  name: "Brutal Warlord",
  expansion: 'base',
  banner: 'Gain 5 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />',
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "baleful",
      type: 'virtue',
      description: "+1 MELEE Advantage",
      permanent: true,
      system: {
        advantage: 'MELEE',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "veteran",
      type: 'virtue',
      description: "+1 Wild Advantage when you Battle",
      permanent: true,
      system: {
        advantage: 'Wild',
      }
    },
    {
      id: "additional-virtue-1",
      name: "inspiring",
      type: 'virtue',
      description: 'After you Reinforce, also gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />.',
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "callous",
      type: 'virtue',
      description: 'After you Battle, if you lost at least 10 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />, gain a treasure from the market.',
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "relentless",
      type: 'virtue',
      description: "If you double your move, gain +1 Wild Advantage",
      active: false,
      system: {
        advantage: 'Wild',
      }
    },
  ]
}

const devious_swindler = {
  id: "devious-swindler",
  name: "Devious Swindler",
  expansion: 'covenant',
  banner: "Roll the haggle die and gain the result",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "inventive",
      type: 'virtue',
      description: "When you Battle, gain all advantages in the treasure market.",
      permanent: true,
      system: {
      }
    },
    {
      id: "base-virtue-2",
      name: "joyful",
      type: 'virtue',
      description: "When you roll the haggle die, ignore Bazaar Closed.",
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "calculating",
      type: 'virtue',
      description: 'You may ignore <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> and <img src="/icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> losses on <b>critical hit</b> battle cards.',
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "fortuitous",
      type: 'virtue',
      description: "After you roll the haggle die, you may reroll once and take either result.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "opportunistic",
      type: 'virtue',
      description: "When any player gains a treasure from the treasure market, you gain a blessing.",
      active: false,
      system: {
      }
    },
  ]
}

const haunted_recluse = {
  id: "haunted-recluse",
  name: "Haunted Recluse",
  expansion: 'alliances',
  banner: "Move 1 skull from any building to any other building with 2 or fewer skulls",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "spiritreaver",
      type: 'virtue',
      description: "+1 UNDEAD Advantage",
      permanent: true,
      system: {
        advantage: 'UNDEAD',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "skullweaver",
      type: 'virtue',
      description: "When a skull emerges in your home kingdom, you can place it on any building with 2 or fewer skulls in any kingdom.",
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "sinbearer",
      type: 'virtue',
      description: 'At the end of the month, you can spend 12 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> to remove all skulls from your current kingdom.',
      active: false,
      system: {
        end_of_month: true
      }
    },
    {
      id: "additional-virtue-2",
      name: "shadowspinner",
      type: 'virtue',
      description: "+1 Wild Advantage for each building with skulls on or adjacent to your space.",
      active: false,
      system: {
        advantage: 'Wild',
      }
    },
    {
      id: "additional-virtue-3",
      name: "soulreaper",
      type: 'virtue',
      description: 'Prevent up to 2 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses per battle card for each skull on or adjacent to your space.',
      active: false,
      system: {
      }
    },
  ]
};

const orphaned_scion = {
  id: "orphaned-scion",
  name: "Orphaned Scion",
  expansion: 'base',
  banner: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />',
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "arcane",
      type: 'virtue',
      description: "+1 MAGIC Advantage",
      permanent: true,
      system: {
        advantage: 'MAGIC',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "generous",
      type: 'virtue',
      description: "After you Cleanse, remove 1 skull from any building.",
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "infused",
      type: 'virtue',
      description: "At the start of your turn, remove 1 skull from a building in your home kingdom.",
      active: false,
      system: {
        end_of_turn: true,
      }
    },
    {
      id: "additional-virtue-2",
      name: "blessed",
      type: 'virtue',
      description: 'Spend 1 spirit to prevent up to 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses from a battle card or dungeon room.',
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "anointed",
      type: 'virtue',
      description: "+1 Wild Advantage for each building with no skulls on or adjacent to your space.",
      active: false,
      system: {
        advantage: 'Wild',
      }
    },
  ]
}

const relentless_warden = {
  id: "relentless-warden",
  name: "Relentless Warden",
  expansion: 'covenant',
  banner: "If your quarry token is not on a foe, place it on a foe. Otherwise, move your quarry up to 2 spaces.",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "perceptive",
      type: 'virtue',
      description: "+1 Wild Advantage vs. your quarry",
      permanent: true,
      system: {
        advantage: 'Wild',
      }
    },
    {
      id: "base-virtue-2",
      name: "guarded",
      type: 'virtue',
      description: 'Prevent up to 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" /> losses per battle card when you Battle your quarry.',
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "inspiring",
      type: 'virtue',
      description: "When you defeat your quarry, remove all skulls on or adjacent to your space.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "instinctive",
      type: 'virtue',
      description: "You may remove your quarry token to ignore your quarry during its strike event.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "keen-eyed",
      type: 'virtue',
      description: "+2 Wild Advantages vs. your quarry",
      active: false,
      system: {
        advantage: 'Wild',
      }
    },
  ]
}

const reverent_astromancer = {
  id: "reverent-astromancer",
  name: "Reverent Astromancer",
  expansion: 'covenant',
  banner: "Remove a skull on or adjacent to your space",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "well versed",
      type: 'virtue',
      description: "If you remove a skull with your Banner action, gain a blessing.",
      permanent: true,
      system: {
      }
    },
    {
      id: "base-virtue-2",
      name: "pious",
      type: 'virtue',
      description: "At the start of each month, prepare spells equal to the month number.",
      permanent: true,
      system: {
        end_of_month: true,
        spells: 'spell'
      }
    },
    {
      id: "additional-virtue-1",
      name: "bounteous",
      type: 'virtue',
      description: "Once per turn, when you cast a spell, gain the top card of the treasure deck.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "exalted",
      type: 'virtue',
      description: "You can prepare invocations.",
      active: false,
      system: {
        spells: 'invocation'
      }
    },
    {
      id: "additional-virtue-3",
      name: "zealous",
      type: 'virtue',
      description: "Whenever you cast a spell gain a blessing.",
      active: false,
      system: {
      }
    },
  ]
}

const relic_hunter = {
  id: "relic-hunter",
  name: "Relic Hunter",
  expansion: 'base',
  banner: "Gain 1 potion",
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "precise",
      type: 'virtue',
      description: "+1 HUMANOID Advantage",
      permanent: true,
      system: {
        advantage: 'HUMANOID',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "prepared",
      type: 'virtue',
      description: 'When you reinforce at a bazaar, spend 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to gain a treasure.',
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "crafty",
      type: 'virtue',
      description: "When you spend a potion, double the number on it.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "lucky",
      type: 'virtue',
      description: "When you spend (not lose) a treasure, gain the top card of the treasure deck.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "inventive",
      type: 'virtue',
      description: "Spend 4 potions to remove a foe from your space.",
      active: false,
      system: {
      }
    },
  ]
}

const spymaster = {
  id: "spymaster",
  name: "Spymaster",
  expansion: 'base',
  banner: "Place your hero on any space in your current kingdom",
  move: 4,
  virtues: [
    {
      id: "base-virtue-1",
      name: "alert",
      type: 'virtue',
      description: "+1 STEALTH Advantage",
      permanent: true,
      system: {
        advantage: 'STEALTH',
        amount: 1,
      }
    },
    {
      id: "base-virtue-2",
      name: "swift",
      type: 'virtue',
      description: "Your base move is 4.",
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "fortunate",
      type: 'virtue',
      description: "You may Reinforce twice per turn at the same building.",
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-2",
      name: "resourceful",
      type: 'virtue',
      description: 'At the end of each month, gain 15 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />.',
      active: false,
      system: {
        end_of_month: true
      }
    },
    {
      id: "additional-virtue-3",
      name: "unseen",
      type: 'virtue',
      description: 'When you complete a monthly quest, you may remove a foe instead of gaining <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      active: false,
      system: {
      }
    },
  ]
}

const undaunted_ageis = {
  id: "undaunted_ageis",
  name: "Undaunted Ageis",
  expansion: 'covenant',
  banner: 'For each corruption you have, gain 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="22" height="22" />. You may spend 10 Warrior to remove one of your corruptions.',
  move: 3,
  virtues: [
    {
      id: "base-virtue-1",
      name: "ascetic",
      type: 'virtue',
      description: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> for each battle card you spend no Advantages on.',
      permanent: true,
      system: {
      }
    },
    {
      id: "base-virtue-2",
      name: "iron-willed",
      type: 'virtue',
      description: "You can have an additional corruption. Start the game with 1 random corruption.",
      permanent: true,
      system: {
      }
    },
    {
      id: "additional-virtue-1",
      name: "emboldened",
      type: 'virtue',
      description: "+1 Wild Advantage for each corruption you have",
      active: false,
      system: {
        advantage: 'Wild',
      }
    },
    {
      id: "additional-virtue-2",
      name: "resolute",
      type: 'virtue',
      description: 'When you Reinforce, spend 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> for each corruption you have.',
      active: false,
      system: {
      }
    },
    {
      id: "additional-virtue-3",
      name: "steeled",
      type: 'virtue',
      description: 'Once per turn, if another hero would gain a corruption, you may gain it instead and gain 2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      active: false,
      system: {
      }
    },
  ]
}

export const HEROES = [
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

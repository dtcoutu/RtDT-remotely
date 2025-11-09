export const TREASURES = [
  {
    id: 'acorns-of-the-white-oak',
    name: "Acorns of the White Oak",
    type: 'treasure',
    benefit: 'Spend to remove up to 5 skulls from anywhere on the board.',
    advantage: '+1 Wild Advantage in grasslands',
    expansion: 'base',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'amulet-of-the-marid',
    name: "Amulet of the Marid",
    type: 'treasure',
    benefit: 'When you cross a river move to any space adjacent to that river.',
    advantage: '+2 Wild Advantage in lakes',
    expansion: 'base',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'archwrights-sledge',
    name: "Archwright's Sledge",
    type: 'treasure',
    benefit: "When you complete a quest, put an offering token on any foundation.",
    advantage: '+1 Wild Advantage in kingdoms with a completed monument',
    expansion: 'covenant',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'axe-of-soul-rending',
    name: "Axe of Soul Rending",
    type: 'treasure',
    benefit: 'When you defeat a MAGIC foe, gain 1 additional <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'base',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'azkols-banner',
    name: "Azkol's Banner",
    type: 'treasure',
    benefit: 'You can take the Banner action of any hero in the game instead of yours',
    advantage: '+1 MELEE Advantage',
    expansion: 'base',
    system: {
      advantage: 'MELEE',
      amount: 1,
    }
  },
  {
    id: 'azkols-chakram',
    name: "Azkol's Chakram",
    type: 'treasure',
    benefit: "When you defeat a level 3 or level 4 foe, you may remove one of your corruptions or give another hero a blessing.",
    advantage: '+1 BEAST Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'azkols-horn',
    name: "Azkol's Horn",
    type: 'treasure',
    benefit: 'Do not spend spirit for glyphs facing you.',
    advantage: '+1 BEAST Advantage',
    expansion: 'base',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'azkols-ichor',
    name: "Azkol's Ichor",
    type: 'treasure',
    benefit: 'When a foe\'s status changes, gain 7 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.',
    advantage: '+1 BEAST Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'azkols-idol',
    name: "Azkol's Idol",
    type: 'treasure',
    benefit: 'Prevent up to 2 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> losses per dungeon room.',
    advantage: '+1 BEAST Advantage',
    expansion: 'base',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'azkols-scroll',
    name: "Azkol's Scroll",
    type: 'treasure',
    advantage: 'Spend when you Battle to gain +6 Wild Advantages. You may not use other Advantages during that battle.',
    expansion: 'covenant',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'azkols-vambraces',
    name: "Azkol's Vambraces",
    type: 'treasure',
    benefit: 'At the start of your turn, you may place your hero in any space adjacent to the Tower. If you do, gain a blessing.',
    expansion: 'covenant',
    system: {
      endOfTurn: true,
    }
  },
  {
    id: 'beacon-stone',
    name: "Beacon Stone",
    type: 'treasure',
    benefit: 'At the end of your turn, if you are on a space with a building, you may place your hero on any space in your home kingdom.',
    advantage: '+1 UNDEAD Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
      endOfTurn: true,
    }
  },
  {
    id: 'brutal-warlords-bell',
    name: "Brutal Warlord's Bell",
    type: 'treasure',
    benefit: 'When you fully upgrade a battle card, gain 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.',
    expansion: 'covenant',
    system: {
    }
  },
  {
    id: 'circlet-of-conviction',
    name: "Circlet of Conviction",
    type: 'treasure',
    benefit: 'Spend instead of dropping a skull into the Tower this turn. Take another turn.',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'base',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'cloak-of-the-stars',
    name: "Cloak of the Stars",
    type: 'treasure',
    benefit: 'Once per turn, when you enter a space with a foe, place that foe on any space.',
    advantage: '+1 STEALTH Advantage',
    expansion: 'base',
    system: {
      advantage: 'STEALTH',
      amount: 1,
    }
  },
  {
    id: 'coffer-of-the-master-thief',
    name: 'Coffer of the Master Thief',
    type: 'treasure',
    benefit: 'At the end of the month, gain 1 <img src="icons/influence.png" title="influence" alt="influence" width="18" height="18" /> for each rank of the Thieves Guild.',
    advantage: '+1 Wild Advantage in the kindgom with the Thieves Guild',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
      endOfMonth: true
    }
  },
  {
    id: 'crown-of-azkol',
    name: "Crown of Azkol",
    type: 'treasure',
    benefit: 'After you Reinforce at a sanctuary, also gain spirit equal to the current month.',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'base',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'crystal-blade',
    name: 'Crystal Blade',
    type: 'treasure',
    advantage: '+1 Wild Advantage for each other treasure you have',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'crystal-platemail',
    name: 'Crystal Platemail',
    type: 'treasure',
    benefit: 'Prevent up to 2 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> losses per battle card for each other treasure you have.',
    advantage: '+1 MELEE Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'MELEE',
      amount: 1,
    }
  },
  {
    id: 'diadem-of-the-emissary',
    name: 'Diadem of the Emissary',
    type: 'treasure',
    benefit: 'You can Reinforce at any building to increase the rank of any guild.',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'druids-incense',
    name: "Druid's Incense",
    type: 'treasure',
    benefit: 'At the end of the month, choose 1 building for each rank of the Druids Circle. Remove 1 skull from each of those buildings.',
    advantage: '+1 Wild Advantage in the kingdom with the Druids Circle',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
      endOfMonth: true
    }
  },
  {
    id: 'everfilled-chest',
    name: "Everfilled Chest",
    type: 'treasure',
    benefit: 'At the end of your turn, roll the haggle die and gain the result. (Ignore <img src="icons/bazaar_closed.png" title="bazaar closed" alt="bazaar closed" />.)',
    advantage: '+1 Wild Advantage if you are on or adjacent to a Bazaar',
    expansion: 'covenant',
    system: {
      advantage: 'Wild',
      endOfTurn: true,
    }
  },
  {
    id: 'everlasting-brazier',
    name: 'Everlasting Brazier',
    type: 'treasure',
    benefit: 'The rank of the guild in your current kingdom cannot be decreased.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'ewer-of-the-silent-child',
    name: 'Ewer of the Silent Child',
    type: 'treasure',
    benefit: 'During your turn, you can spend potions that belong to other heroes (with their permission).',
    advantage: '+1 STEALTH Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'STEALTH',
      amount: 1,
    }
  },
  {
    id: 'forbidden-grimoire',
    name: 'Forbidden Grimoire',
    type: 'treasure',
    benefit: 'If a power skull emerges in your current kingdom, lose this card and gain a corruption.',
    advantage: '+3 Wild Advantages',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'golden-mace-of-azkol',
    name: "Golden Mace of Azkol",
    type: 'treasure',
    benefit: "While on a space with a foe, spend spirit equal to that foe's level to remove it",
    advantage: '+1 UNDEAD Advantage',
    expansion: 'base',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
    }
  },
  {
    id: 'grim-whisper',
    name: "Grim Whisper",
    type: 'treasure',
    advantage: '+2 Wild Advantage when you Battle in a wasteland',
    expansion: 'covenant',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'hallowed-reliquary',
    name: "Hallowed Reliquary",
    type: 'treasure',
    benefit: 'After you Battle, remove 1 skull from a building in your current kingdom.',
    advantage: '+1 UNDEAD Advantage',
    expansion: 'base',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
    }
  },
  {
    id: 'haunted-recluses-effigy',
    name: "Haunted Recluse's Effigy",
    type: 'treasure',
    benefit: 'When you Cleanse, you may spend this to remove all skulls in your current kingdom.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'iron-hound-of-azkol',
    name: 'Iron Hound of Azkol',
    type: 'treasure',
    benefit: 'Before you move, you can place your hero on any space with a foe.',
    advantage: '+1 BEAST Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'jeweled-goblet-of-azkol',
    name: 'Jeweled Goblet of Azkol',
    type: 'treasure',
    benefit: 'When you Influence, gain an additional 2 <img src="icons/influence.png" title="influence" alt="influence" width="18" height="18" /> and also 1 potion.',
    expansion: 'alliances',
    system: {
    }
  },
  {
    id: 'kamarias-carpet',
    name: "Karmaria's Carpet",
    type: 'treasure',
    benefit: 'Once per turn, spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> to place your hero on any space.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'base',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'lamp-of-darkness',
    name: 'Lamp of Darkness',
    type: 'treasure',
    benefit: 'Spend to remove 1 foe from your space.',
    advantage: '+1 BEAST Advantage',
    expansion: 'base',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'lamp-of-hope',
    name: 'Lamp of Hope',
    type: 'treasure',
    benefit: 'When you Cleanse, you can remove skulls from any space.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'base',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'necklace-of-haggling',
    name: 'Necklace of Haggling',
    type: 'treasure',
    benefit: 'Ignore <img src="icons/bazaar_closed.png" title="bazaar closed" alt="bazaar closed" /> on the haggle die. Reinforce as normal.',
    advantage: '+1 STEALTH Advantage',
    expansion: 'base',
    system: {
      advantage: 'STEALTH',
      amount: 1,
    }
  },
  {
    id: 'oakstone-bow',
    name: 'Oakstone Bow',
    type: 'treasure',
    benefit: 'You can Battle a foe on an adjacent space. (Terrain advantages use the sapce you are on.)',
    advantage: '+1 MELEE Advantage',
    expansion: 'base',
    system: {
      advantage: 'MELEE',
      amount: 1,
    }
  },
  {
    id: 'orphaned-scions-charm',
    name: "Orphaned Scion's Charm",
    type: 'treasure',
    benefit: 'Whenever a skull emerges from the Tower in your current kingdom, gain a blessing.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'paladins-greatshield',
    name: "Paladin's Greatshield",
    type: 'treasure',
    benefit: 'At the end of the month, gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> for each rank of the Paladins Order.',
    advantage: '+1 Wild Advantage in the kingdom with the Paladins Order',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
      endOfMonth: true
    }
  },
  {
    id: 'relic-hunters-flagon',
    name: "Relic Hunter's Flagon",
    type: 'treasure',
    benefit: 'When you gain a potion, look at the top 4 cards of the potion deck and choose one. Put the rest on the bottom.',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'base',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'ring-of-the-emissary',
    name: 'Ring of the Emissary',
    type: 'treasure',
    benefit: 'When you Reinforce to increase the rank of a guild, spend 2 less <img src="icons/influence.png" title="influence" alt="influence" width="18" height="18" />.',
    expansion: 'alliances',
    system: {
    }
  },
  {
    id: 'robes-of-the-last-sultan',
    name: "Robes of the Last Sultan",
    type: 'treasure',
    benefit: 'Spend 3 <img src="icons/influence.png" title="influence" alt="influence" width="18" height="18" /> to remove 1 foe from your space.',
    expansion: 'alliances',
    system: {
    }
  },
  {
    id: 'sanctified-flask',
    name: "Sanctified Flash",
    type: 'treasure',
    benefit: 'Spend to remove 1 corruption from any hero. That hero gains a blessing.',
    advantage: '+1 UNDEAD Advantage',
    expansion: 'convenant',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
    }
  },
  {
    id: 'scroll-of-burning-sands',
    name: 'Scroll of Burning Sands',
    type: 'treasure',
    advantage: 'Spend to gain +4 MAGIC Advantages',
    expansion: 'base',
    system: {
      advantage: 'MAGIC',
    }
  },
  {
    id: 'scroll-of-the-forged-friendship',
    name: 'Scroll of the Forged Friendship',
    type: 'treasure',
    benefit: 'Spend to increase the rank of the guild in your current kingdom by 1.',
    advantage: '+1 BEAST Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'scroll-of-the-great-serpent',
    name: 'Scroll of the Great Serpent',
    type: 'treasure',
    advantage: 'Spend to gain +4 MELEE Advantages',
    expansion: 'base',
    system: {
      advantage: 'MELEE',
    }
  },
  {
    id: 'scroll-of-twilight-shadow',
    name: 'Scroll of Twilight Shadow',
    type: 'treasure',
    advantage: 'Spend to gain +4 STEALTH Advantages',
    expansion: 'base',
    system: {
      advantage: 'STEALTH',
    }
  },
  {
    id: 'spear-of-atish',
    name: 'Spear of Atish',
    type: 'treasure',
    benefit: 'When you defeat a MELEE foe, gain 10 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.',
    advantage: '+1 BEAST advantage',
    expansion: 'base',
    system: {
      advantage: 'BEAST',
      amount: 1,
    }
  },
  {
    id: 'spymasters-journal',
    name: "Spymaster's Journal",
    type: 'treasure',
    benefit: 'At the start of your turn, you may spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> to flip one of your inactive vitures. If you do, flip it back over at the end of the turn.',
    advantage: '+1 STEALTH Advantage',
    expansion: 'convenant',
    system: {
      advantage: 'STEALTH',
      amount: 1,
      endOfTurn: true,
    }
  },
  {
    id: 'staff-of-wishes',
    name: "Staff of Wishes",
    type: 'treasure',
    benefit: 'Spend to remove all power skulls from the board.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'convenant',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'standard-of-the-scouts',
    name: 'Standard of the Scouts',
    type: 'treasure',
    benefit: 'At the end of the month, gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> for each rank of the Arcane Scouts.',
    advantage: '+1 Wild Advantage in the kingdom with the Arcane Scouts',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
      endOfMonth: true
    }
  },
  {
    id: 'tears-of-the-shedu',
    name: 'Tears of the Shedu',
    type: 'treasure',
    benefit: 'When you defeat a STEALTH foe, gain 1 potion.',
    advantage: '+1 UNDEAD advantage',
    expansion: 'base',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
    }
  },
  {
    id: 'tent-of-revelry',
    name: "Test of Revelry",
    type: 'treasure',
    benefit: 'You may Reinforce in desert spaces. If you do, choose a non-monument building and use its effect.',
    advantage: '+1 Wild Advantage when you Quest',
    expansion: 'convenant',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'the-iron-wall',
    name: "The Iron Wall",
    type: 'treasure',
    benefit: 'Spend to ignore all losses on a battle card, event, or dungeon room that would cause you to lose 10+ <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />',
    advantage: '+1 HUMANOID Advantage',
    expansion: 'convenant',
    system: {
      advantage: 'HUMANOID',
      amount: 1,
    }
  },
  {
    id: 'trebbloks-hammer',
    name: "Treeblok's Hammer",
    type: 'treasure',
    benefit: 'When you defat a foe, gain 2 <img src="icons/influence.png" title="influence" alt="influence" width="18" height="18" />.',
    advantage: '+1 MELEE Advantage',
    expansion: 'alliances',
    system: {
      advantage: 'MELEE',
      amount: 1,
    }
  },
  {
    id: 'vestments-of-the-emissary',
    name: "Vestments of the Emissary",
    type: 'treasure',
    benefit: 'After you Reinforce to increase the rank of a guild, gain 10 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />,',
    advantage: '+1 Wild Advantage if the guild in your current kingdom is rank 2 or higher',
    expansion: 'alliances',
    system: {
      advantage: 'Wild',
    }
  },
  {
    id: 'wand-of-celerity',
    name: "Wand of Celerity",
    type: 'treasure',
    benefit: 'When acquired: 4 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />. Spend any number of <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" /> to place your hero that many spaces away. When you Battle a MELEE foe, gain 1 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />.',
    advantage: '+1 MELEE Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'MELEE',
      amount: 1,
      charge: 4,
    }
  },
  {
    id: 'wand-of-conflagration',
    name: "Wand of Conflagration",
    type: 'treasure',
    benefit: 'When acquired: 3 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />. Spend any number of <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" /> to remove a foe of that level in your space. At the end of each month gain 1 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />.',
    advantage: '+1 MAGIC Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'MAGIC',
      amount: 1,
      charge: 3,
      endOfMonth: true
    }
  },
  {
    id: 'wand-of-pacification',
    name: "Wand of Pacification",
    type: 'treasure',
    benefit: 'When acquired: 1 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />. Spend 1 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" /> to remove all skulls on or adjacent to your space. When you Battle a UNDEAD foe, gain 1 <img src="icons/charge.png" title="charge" alt="charge" width="18" height="18" />.',
    advantage: '+1 UNDEAD Advantage',
    expansion: 'covenant',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
      charge: 1,
    }
  },
  {
    id: 'white-cauldron',
    name: 'White Cauldron',
    type: 'treasure',
    benefit: 'After you Reinforce at a citadel, also gain 1 potion.',
    advantage: '+1 UNDEAD advantage',
    expansion: 'base',
    system: {
      advantage: 'UNDEAD',
      amount: 1,
    }
  },
  {
    id: 'zemayirs-teeth',
    name: "Zemayir's Teeth",
    type: 'treasure',
    benefit: 'When you Cleanse power skulls, remove them from the game and add a regular skull to the bag for each power skull you removed.',
    expansion: 'alliances',
    system: {
    }
  }
]

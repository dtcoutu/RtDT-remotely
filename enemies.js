export const TRAITS = {
  beast: 'foes make you lose extra warriors',
  humanoid: 'foes add skulls to buildings',
  magic: 'foes manipulate the tower',
  melee: 'foes make you lose gear',
  stealth: 'foes make you lose potions',
  undead: 'foes make you lose spirit',
};

export const ENEMIES = [
  {
    id: 'brigands',
    level: 2,
    name: 'Brigands',
    traits: [
      'stealth',
      'humanoid'
    ],
    strike_event: 'Brigands make you lose items.'
  },
  {
    id: 'oreks',
    level: 2,
    name: 'Oreks',
    traits: [
      'melee',
      'undead'
    ],
    strike_event: 'Oreks add skulls to buildings in their kingdoms.'
  },
  {
    id: 'shadow_wolves',
    level: 2,
    name: 'Shadow Wolves',
    traits: [
      'stealth',
      'beast'
    ],
    strike_event: 'Shadow wolves move to your space and make you lose warriors.'
  },
  {
    id: 'spine_fiend',
    level: 2,
    name: 'Spine Fiend',
    traits: [
      'magic',
      'beast'
    ],
    strike_event: 'Spine fiends make you lose warriors.'
  },
  {
    id: 'clan_of_neuri',
    level: 3,
    name: 'Clan of Neuri',
    traits: [
      'magic',
      'humanoid'
    ],
    strike_event: 'Clan of Neuri make you lose spirit.'
  },
  {
    id: 'frost_troll',
    level: 3,
    name: 'Frost Troll',
    traits: [
      'melee',
      'humanoid'
    ],
    strike_event: 'Frost trolls add skulls to nearby buildings.'
  },
  {
    id: 'lemure',
    level: 3,
    name: 'Lemure',
    traits: [
      'magic',
      'undead'
    ],
    strike_event: 'Lemures add skulls to citadels and sanctuaries.'
  },
  {
    id: 'widowmade_spider',
    level: 3,
    name: 'Widowmade Spider',
    traits: [
      'stealth',
      'beast'
    ],
    strike_event: 'Widowmade spiders chase one hero and drain their spirit.'
  },
  {
    id: 'dragon',
    level: 4,
    name: 'Dragon',
    traits: [
      'melee',
      'beast'
    ],
    strike_event: 'Dragons make you lose treasures.'
  },
  {
    id: 'mormo',
    level: 4,
    name: 'Mormo',
    traits: [
      'stealth',
      'undead'
    ],
    strike_event: 'Mormos give you corruptions.'
  },
  {
    id: 'striga',
    level: 4,
    name: 'Striga',
    traits: [
      'magic',
      'undead'
    ],
    strike_event: 'Strigas make you lose virtues.'
  },
  {
    id: 'titan',
    level: 4,
    name: 'Titan',
    traits: [
      'melee',
      'humanoid'
    ],
    strike_event: 'The titan destroy buildings.'
  },
  {
    id: 'ashstrider',
    level: 5,
    name: 'Ashstrider',
    traits: [
      'magic',
      'beast',
    ],
    when_battling: [
      'Ashstrider adds skulls to buildlings',
      'Ashstrider hurts heroes in its current kingdom based on skulls in the kingdom'
    ],
    strike_event: 'Ashstrider adds skulls to buildings.'
  },
  {
    id: 'bane_of_omens',
    level: 5,
    name: 'Bane of Omens',
    traits: [
      'stealth',
      'humanoid'
    ],
    when_battling: [
      'The Bane of Omens gives you corruptions',
      'The Bane of Omens targets the hero with the Black Mark'
    ],
    strike_event: 'The Bane of Omens attacks the hero with the Black Mark.'
  },
  {
    id: 'empress_of_shades',
    level: 5,
    name: 'Empress of Shades',
    traits: [
      'stealth',
      'undead'
    ],
    when_battling: [
      'The Empress targets heroes in certain terrain types',
      'The Empress targets heroes in her current kingdom'
    ],
    strike_event: 'The Empress unleases plague in one kingdom, killing warriors.'
  },
  {
    id: 'gaze_eternal',
    level: 5,
    name: 'Gaze Eternal',
    traits: [
      'magic',
      'humanoid'
    ],
    when_battling: [
      'The Gaze Eternal makes you lose potions',
      'The Gaze Eternal hurts heroes in its current kingdom based on the Tower glyphs'
    ],
    strike_event: 'The Gaze Eternal manipulates the Tower to cause disaster.'
  },
  {
    id: 'gravemaw',
    level: 5,
    name: 'Gravemaw',
    traits: [
      'melee',
      'beast'
    ],
    when_battling: [
      'Gravemaw makes you lose a huge number of warriors',
      'Gravemaw hurts heroes based on how many foes are on the board'
    ],
    strike_event: 'Gravemaw mutates foes, adding new battle cards to their decks.'
  },
  {
    id: 'isa_the_exile',
    level: 5,
    name: 'Isa the Exile',
    traits: [
      'humanoid'
    ],
    when_battling: [
      'Isa makes you lose spirit',
      'Isa hurts heroes based on how many treasures they have'
    ],
    strike_event: 'Isa issues ultimatums.'
  },
  {
    id: 'lingering_rot',
    level: 5,
    name: 'Lingering Rot',
    traits: [
      'melee',
      'undead'
    ],
    when_battling: [
      'The Lingering Rot gives you spore tokens',
      'The lingering Rot targets heroes with spore tokens'
    ],
    strike_event: 'The Lingering Rot gives you spore tokens.'
  },
  {
    id: 'utuk_ku_the_ice_herald',
    level: 5,
    name: 'Utuk-Ku the Ice Herald',
    traits: [
      'magic',
      'undead'
    ],
    when_battling: [
      'Utuk-Ku makes you lose spirit',
      'Utuk-Ku targets heroes in his current kingdom'
    ],
    strike_event: 'Utuk-Ku reduces the number of advantages you can spend per action.'
  },
];
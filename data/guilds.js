export const ARCANE_SCOUTS = {
  id: 'arcane_scouts',
  name: 'Arcane Scouts',
  type: 'guild',
  building: 'Citadel',
  rank: 1,
  side: 'side_a',
  region: '',
  side_a: [
    {
      rank: 1,
      text: 'If you start your move in this kingdom, your base move is -1.',
      system: {}
    },
    {
      rank: 2,
      text: 'You cannot spend <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to double your base move.',
      system: {}
    },
    {
      rank: 3,
      text: 'If you start your move in this kingdom, your base move is +1.',
      system: {}
    },
    {
      rank: 4,
      text: 'At the start of your turn you may place your hero on any space.',
      system: {
        endOfTurn: true
      }
    }
  ],
  side_b: [
    {
      rank: 1,
      text: 'You cannot spend potions.',
      system: {}
    },
    {
      rank: 2,
      text: 'You cannot spend more than 1 potion per turn.',
      system: {}
    },
    {
      rank: 3,
      text: 'After you reinforce, gain 1 potion.',
      system: {}
    },
    {
      rank: 4,
      text: 'After you reinforce, gain 2 potions.',
      system: {}
    }
  ]
};

export const DRUIDS_CIRCLE = {
  id: 'druids_circle',
  name: 'Druids Circle',
  type: 'guild',
  building: 'Village',
  rank: 1,
  side: 'side_a',
  region: '',
  side_a: [
    {
      rank: 1,
      text: 'You cannot take a Banner action.',
      system: {}
    },
    {
      rank: 2,
      text: 'You must spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to take your Banner action.',
      system: {}
    },
    {
      rank: 3,
      text: 'When you take your Banner action, you may spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to take it twice.',
      system: {}
    },
    {
      rank: 4,
      text: 'When you take your Banner Action, all other heroes in this kingdom may take your Banner action.',
      system: {}
    }
  ],
  side_b: [
    {
      rank: 1,
      text: 'Spaces have no terrain type.',
      system: {}
    },
    {
      rank: 2,
      text: 'Your champion virtue has no effect.',
      system: {}
    },
    {
      rank: 3,
      text: '+2 Wild Advantages in grasslands.',
      system: {
        advantage: 'Wild'
      }
    },
    {
      rank: 4,
      text: 'Spaces have all terrain types.',
      system: {}
    }
  ]
};

export const PALADINS_ORDER = {
  id: 'paladins_order',
  name: 'Paladins Order',
  type: 'guild',
  building: 'Sanctuary',
  rank: 1,
  side: 'side_a',
  region: '',
  side_a: [
    {
      rank: 1,
      text: 'You cannot Cleanse.',
      system: {}
    },
    {
      rank: 2,
      text: 'You must spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to Cleanse.',
      system: {}
    },
    {
      rank: 3,
      text: 'After you Cleanse, gain +1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    {
      rank: 4,
      text: 'After you Cleanse, gain +2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
  ],
  side_b: [
    {
      rank: 1,
      text: 'At the end of your turn lose 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        endOfTurn: true
      }
    },
    {
      rank: 2,
      text: 'At the end of the month lose 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        endOfMonth: true
      }
    },
    {
      rank: 3,
      text: 'At the end of your turn gain 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        endOfTurn: true
      }
    },
    {
      rank: 4,
      text: 'At the end of the month, double the number of <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" /> you have.',
      system: {
        endOfMonth: true
      }
    },
  ]
};

export const THIEVES_GUILD = {
  id: 'thieves_guild',
  name: 'Thieves Guild',
  type: 'guild',
  building: 'Bazaar',
  rank: 1,
  side: 'side_a',
  region: '',
  side_a: [
    {
      rank: 1,
      text: 'Treasures cost +2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    {
      rank: 2,
      text: 'Treasures cost +1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    {
      rank: 3,
      text: 'Treasures cost 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    {
      rank: 4,
      text: 'When you Reinforce to gain a treasure, also gain the top card of the treasure deck.',
      system: {}
    },
  ],
  side_b: [
    {
      rank: 1,
      text: 'At the end of your turn lose 1 item.',
      system: {
        endOfTurn: true
      }
    },
    {
      rank: 2,
      text: 'At the end of the month lose 1 item.',
      system: {
        endOfMonth: true
      }
    },
    {
      rank: 3,
      text: 'After you Reinforce, gain 1 gear.',
      system: {}
    },
    {
      rank: 4,
      text: 'Double all values on your gear.',
      system: {}
    },
  ]
};

export const GUILDS = [
  ARCANE_SCOUTS,
  DRUIDS_CIRCLE,
  PALADINS_ORDER,
  THIEVES_GUILD
]

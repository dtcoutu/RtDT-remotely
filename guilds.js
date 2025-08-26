export const ARCANE_SCOUTS = {
  id: 'arcane_scouts',
  name: 'Arcane Scouts',
  type: 'guild',
  building: 'Citadel',
  level: 1,
  side: 'side_a',
  region: '',
  side_a: {
    rank_1: {
      text: 'If you start your move in this kingdom, your base move is -1.',
      system: {}
    },
    rank_2: {
      text: 'You cannot spend <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to double your base move.',
      system: {}
    },
    rank_3: {
      text: 'If you start your move in this kingdom, your base move is +1.',
      system: {}
    },
    rank_4: {
      text: 'At the start of your turn you may place your hero on any space.',
      system: {
        end_of_turn: true
      }
    }
  },
  side_b: {
    rank_1: {
      text: 'You cannot spend potions.',
      system: {}
    },
    rank_2: {
      text: 'You cannot spend more than 1 potion per turn.',
      system: {}
    },
    rank_3: {
      text: 'After you reinforce, gain 1 potion.',
      system: {}
    },
    rank_4: {
      text: 'After you reinforce, gain 2 potions.',
      system: {}
    }
  },
};

export const DRUIDS_CIRCLE = {
  id: 'druids_circle',
  name: 'Druids Circle',
  type: 'guild',
  building: 'Village',
  level: 1,
  side: 'side_a',
  region: '',
  side_a: {
    rank_1: {
      text: 'You cannot take a Banner action.',
      system: {}
    },
    rank_2: {
      text: 'You must spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to take your Banner action.',
      system: {}
    },
    rank_3: {
      text: 'When you take your Banner action, you may spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to take it twice.',
      system: {}
    },
    rank_4: {
      text: 'When you take your Banner Action, all other heroes in this kingdom may take your Banner action.',
      system: {}
    }
  },
  side_b: {
    rank_1: {
      text: 'Spaces have no terrain type.',
      system: {}
    },
    rank_2: {
      text: 'Your champion virtue has no effect.',
      system: {}
    },
    rank_3: {
      text: '+2 Wild Advantages in grasslands.',
      system: {
        advantage: 'Wild'
      }
    },
    rank_4: {
      text: 'Spaces have all terrain types.',
      system: {}
    }
  },
};

export const PALADINS_ORDER = {
  id: 'paladins_order',
  name: 'Paladins Order',
  type: 'guild',
  building: 'Sanctuary',
  level: 1,
  side: 'side_a',
  region: '',
  side_a: {
    rank_1: {
      text: 'You cannot Cleanse.',
      system: {}
    },
    rank_2: {
      text: 'You must spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" /> to Cleanse.',
      system: {}
    },
    rank_3: {
      text: 'After you Cleanse, gain +1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    rank_4: {
      text: 'After you Cleanse, gain +2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
  },
  side_b: {
    rank_1: {
      text: 'At the end of your turn lose 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        end_of_turn: true
      }
    },
    rank_2: {
      text: 'At the end of the month lose 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        end_of_month: true
      }
    },
    rank_3: {
      text: 'At the end of your turn gain 3 <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" />.',
      system: {
        end_of_turn: true
      }
    },
    rank_4: {
      text: 'At the end of the month, double the number of <img src="icons/warrior.png" title="warrior" alt="warrior" width="20" height="22" /> you have.',
      system: {
        end_of_month: true
      }
    },
  }
};

export const THIEVES_GUILD = {
  id: 'thieves_guild',
  name: 'Thieves Guild',
  type: 'guild',
  building: 'Bazaar',
  level: 1,
  side: 'side_a',
  region: '',
  side_a: {
    rank_1: {
      text: 'Treasures cost +2 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    rank_2: {
      text: 'Treasures cost +1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    rank_3: {
      text: 'Treasures cost 1 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="20" height="22" />.',
      system: {}
    },
    rank_4: {
      text: 'When you Reinforce to gain a treasure, also gain the top card of the treasure deck.',
      system: {}
    },
  },
  side_b: {
    rank_1: {
      text: 'At the end of your turn lose 1 item.',
      system: {
        end_of_turn: true
      }
    },
    rank_2: {
      text: 'At the end of the month lose 1 item.',
      system: {
        end_of_month: true
      }
    },
    rank_3: {
      text: 'After you Reinforce, gain 1 gear.',
      system: {}
    },
    rank_4: {
      text: 'Double all values on your gear.',
      system: {}
    },
  }
};

export const NEW_GUILDS = [
  ARCANE_SCOUTS,
  DRUIDS_CIRCLE,
  PALADINS_ORDER,
  THIEVES_GUILD
]

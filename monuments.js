export const MONUMENTS = [
  {
    id: 'arch-of-the-golden-sun',
    name: 'Arch of the Golden Sun',
    type: 'monument',
    location: 'Bazaar',
    built: false,
    offering: 'End your turn with 2+ foes on or adjacent to your space.',
    reinforce: {
      free: 'Gain 1 gear',
      enhanced: {
        cost: '5 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
        effect: 'Gain 1 virtue and the top two cards of the treasure deck'
      }
    }
  },
  {
    id: 'argent-oak',
    name: 'Argent Oak',
    type: 'monument',
    location: 'Sanctuary',
    built: false,
    offering: 'Gain a corruption.',
    reinforce: {
      free: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
      enhanced: {
        cost: 'Free',
        effect: 'Spend any number of items to remove an equal number of your corruptions'
      }
    }
  },
  {
    id: 'cenotaph-of-the-first-prophet',
    name: 'Cenotaph of the First Prophet',
    type: 'monument',
    location: 'Citadel',
    built: false,
    offering: 'Defeat a foe in a wasteland.',
    reinforce: {
      free: 'Gain 1 potion',
      enhanced: {
        cost: '4 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
        effect: 'Gain an active virtue tile from outside the game'
      }
    }
  },
  {
    id: 'colossus-of-bjorn',
    name: 'Colossus of Björn',
    type: 'monument',
    location: 'Village',
    built: false,
    offering: 'Lose 8+ warriors from a battle card.',
    reinforce: {
      free: 'Gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />',
      enhanced: {
        cost: 'Free',
        effect: 'Place yourself and this building in any space without a building'
      }
    }
  },
  {
    id: 'moonstone-temple',
    name: 'Moonstone Temple',
    type: 'monument',
    location: 'Sanctuary',
    built: false,
    offering: 'Complete a battle without using any advantages.',
    reinforce: {
      free: 'Gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
      enhanced: {
        cost: '10 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
        effect: 'You may Battle and Cleanse any number of times this turn'
      }
    }
  },
  {
    id: 'endless-necropolis',
    name: 'Endless Necropolis',
    type: 'monument',
    location: 'Village',
    built: false,
    offering: 'Spend or lose a treasure',
    reinforce: {
      free: 'Gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />',
      enhanced: {
        cost: '1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
        effect: 'Remove any number of skulls from this building and return them to the supply'
      }
    }
  },
  {
    id: 'nightmare-cage',
    name: 'Nightmare Cage',
    type: 'monument',
    location: 'Bazaar',
    built: false,
    offering: 'End your turn with 4+ skulls on or adjacent to your space.',
    reinforce: {
      free: 'Gain 1 gear',
      enhanced: {
        cost: '20 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />',
        effect: 'Remove a foe'
      }
    }
  },
  {
    id: 'tower-shard',
    name: 'Tower Shard',
    type: 'monument',
    location: 'Citadel',
    built: false,
    offering: 'Defeat a foe in a space adjacent to the Tower.',
    reinforce: {
      free: 'Gain 1 potion',
      enhanced: {
        cost: '1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />',
        effect: 'Gain 2 potions'
      }
    }
  },
];
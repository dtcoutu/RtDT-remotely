export const MONUMENTS = [
  {
    id: 'arch-of-the-golden-sun',
    name: 'Arch of the Golden Sun',
    type: 'monument',
    location: 'bazaar',
    offering: 'End your turn with 2+ foes on or adjacent to your space.',
    reinforce: {
      free: 'Gain 1 gear',
      enhanced: {
        cost: '5 <spirit>',
        effect: 'Gain 1 virtue and the top two cards of the treasure deck'
      }
    }
  },
  {
    id: 'argent-oak',
    name: 'Argent Oak',
    type: 'monument',
    location: 'sanctuary',
    offering: 'Gain a corruption.',
    reinforce: {
      free: 'Gain 1 <spirit>',
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
    location: 'citadel',
    offering: 'Defeat a foe in a wasteland.',
    reinforce: {
      free: 'Gain 1 potion',
      enhanced: {
        cost: '4 <spirit>',
        effect: 'Gain an active virtue tile from outside the game'
      }
    }
  },
  {
    id: 'colossus-of-bjorn',
    name: 'Colossus of Björn',
    type: 'monument',
    location: 'village',
    offering: 'Lose 8+ warriors from a battle card.',
    reinforce: {
      free: 'Gain 6 <warrior>',
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
    location: 'sanctuary',
    offering: 'Complete a battle without using any advantages.',
    reinforce: {
      free: 'Gain 1 <spirit>',
      enhanced: {
        cost: '10 <spirit>',
        effect: 'You may Battle and Cleanse any number of times this turn'
      }
    }
  },
  {
    id: 'endless-necropolis',
    name: 'Endless Necropolis',
    type: 'monument',
    location: 'village',
    offering: 'Spend or lose a treasure',
    reinforce: {
      free: 'Gain 6 <warrior>',
      enhanced: {
        cost: '1 <spirit>',
        effect: 'Remove any number of skulls from this building and return them to the supply'
      }
    }
  },
  {
    id: 'nightmare-cage',
    name: 'Nightmare Cage',
    type: 'monument',
    location: 'bazaar',
    offering: 'End your turn with 4+ skulls on or adjacent to your space.',
    reinforce: {
      free: 'Gain 1 gear',
      enhanced: {
        cost: '20 <warrior>',
        effect: 'Remove a foe'
      }
    }
  },
  {
    id: 'tower-shard',
    name: 'Tower Shard',
    type: 'monument',
    location: 'citadel',
    offering: 'Defeat a foe in a space adjacent to the Tower.',
    reinforce: {
      free: 'Gain 1 potion',
      enhanced: {
        cost: '1 <spirit>',
        effect: 'Gain 2 potions'
      }
    }
  },
];
export const GEAR = [
  {
    id: 'blessed_sceptres',
    name: 'Blessed Sceptres',
    type: 'gear',
    description: 'After your Reinforce remove 1 skull from the building on your space.'
  },
  {
    id: 'brass_talismans',
    name: 'Brass Talismans',
    type: 'gear',
    description: '+1 MAGIC Advantage',
    system: {
      advantage: 'MAGIC',
      amount: 1,
    }
  },
  {
    id: 'dusky_cloaks',
    name: 'Dusky Cloaks',
    type: 'gear',
    description: '+1 STEALTH Advantage',
    system: {
      advantage: 'STEALTH',
      amount: 1,
    }
  },
  {
    id: 'leather_armor',
    name: 'Leather Armor',
    type: 'gear',
    description: 'Prevent up to 2 <img src="/icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> losses per battle card'
  },
  {
    id: 'longswords',
    name: 'Longswords',
    type: 'gear',
    description: '+1 MELEE Advantage',
    system: {
      advantage: 'MELEE',
      amount: 1,
    }
  },
  {
    id: 'trusted_maps',
    name: 'Trusted Maps',
    type: 'gear',
    description: 'Your base move is +1.'
  },
];

export const COMPANIONS = [
    {
        id: 'gleb',
        name: 'Gleb',
        title: 'The Outlaw King',
        type: 'companion',
        benefit: {
            text: 'If you end your turn in the mountains, gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />'
        },
        advantage: [
            {
                text: '+2 HUMANOID Advantages'
            }
        ],
        event: 'provides warriors.',
        system: {
            advantage: 'HUMANOID',
            amount: 2,
            end_of_turn: true,
        }
    },
    {
        id: 'grigor',
        name: 'Grigor',
        title: 'The Unbreakable',
        type: 'companion',
        advantage: [
            {
                text: 'Spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> to gain +1 Wild Advantage.',
                usage: 'You can do this 3 times per turn.'
            },
            {
                text: '+2 MELEE Advantages',
            }
        ],
        event: 'removes foes from the board.',
        system: {
            advantage: 'MELEE',
            amount: 2,
        }
    },
    {
        id: 'hakan',
        name: 'Hakan',
        title: 'The Artificer',
        type: 'companion',
        benefit: {
            text: 'Spend 2 potions to gain the top card of the treasure deck.',
            usage: 'You can do this once per turn.'
        },
        advantage: [
            {
                text: '+2 Wild Advantages on spaces with buildings',
            }
        ],
        event: 'changes gear into potions.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'letha',
        name: 'Letha',
        title: 'The Dryad',
        type: 'companion',
        benefit: {
            text: 'If you end your turn in a forest, gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.',
        },
        advantage: [
            {
                text: '+2 BEAST Advantages',
            }
        ],
        event: 'weakens beasts.',
        system: {
            advantage: 'BEAST',
            amount: 2,
            end_of_turn: true,
        }
    },
    {
        id: 'miras',
        name: 'Miras',
        title: 'The Horselord',
        type: 'companion',
        benefit: {
            text: 'If you end your turn in a grasslands, gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" />.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages in grasslands',
            }
        ],
        event: 'moves foes around the board.',
        system: {
            advantage: 'Wild',
            end_of_turn: true,
        }
    },
    {
        id: 'nimet',
        name: 'Nimet',
        title: 'The Fathomless',
        type: 'companion',
        benefit: {
            text: 'Spend 3 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> to place a seal on the Tower.',
            usage: 'You can do this once per turn.'
        },
        advantage: [
            {
                text: '+2 MAGIC Advantages',
            }
        ],
        event: 'changes treasures into spirit.',
        system: {
            advantage: 'MAGIC',
            amount: 2,
        }
    },
    {
        id: 'tomas',
        name: 'Tomas',
        title: 'The Scout',
        type: 'companion',
        benefit: {
            text: 'You do not need to spend spirit to double your move.'
        },
        advantage: [
            {
                text: '+2 STEALTH Advantages',
            }
        ],
        event: 'moves heroes around the board.',
        system: {
            advantage: 'STEALTH',
            amount: 2,
        }
    },
    {
        id: 'vasa',
        name: 'Vasa',
        title: 'The Divine',
        type: 'companion',
        benefit: {
            text: 'Do not spend spirit for glyphs facing you. After you take an action matching a glyph facing you gain 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />.'
        },
        advantage: [
            {
                text: '+2 UNDEAD Advantages',
            }
        ],
        event: 'removes corruptions.',
        system: {
            advantage: 'UNDEAD',
            amount: 2,
        }
    },
    {
        id: 'yana',
        name: 'Yana',
        title: 'The Assassin',
        type: 'companion',
        benefit: {
            text: 'Gain no more than 1 corruption when you Battle a level 2, 3, or 4 foe.'
        },
        advantage: [
            {
                text: '+2 Wild Advantages vs. the adversary',
            }
        ],
        event: '"handles" foes before they spawn.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'zaida',
        name: 'Zaida',
        title: 'The Efreet',
        type: 'companion',
        advantage: [
            {
                text: 'Spend one treasure to gain +3 Wild Advantages.',
                usage: 'You can do this once per turn.'
            }
        ],
        event: 'gives treasures.',
        system: {
            advantage: 'Wild',
        }
    },
];

export const ALLIANCE_COMPANIONS = [
    {
        id: 'berat',
        name: 'Berat',
        title: 'The Wizard',
        type: 'companion',
        guild: "arcane_scouts",
        benefit: {
            text: 'When you would gain a gear, you can spend 1 <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" /> to gain the top card of the treasure deck instead.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages in dungeons',
            }
        ],
        event: 'makes dungeons easier.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'heraswa',
        name: 'Haraswa',
        title: 'The Pegasus',
        type: 'companion',
        guild: "arcane_scouts",
        benefit: {
            text: 'Your base move is +2.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages in mountains',
            }
        ],
        event: 'transports you to buildings for reinforcements.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'oola',
        name: 'Oola',
        title: 'The Nomad',
        type: 'companion',
        guild: "arcane_scouts",
        benefit: {
            text: 'If you Influence outside your home kingdom, gain an additional 3 |influence|.',
        },
        advantage: [
            {
                text: '+1 Wild Advantage outside your home kingdom',
            }
        ],
        event: 'provides spirit to heroes outside their home kingdom.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'burgoyn',
        name: 'Burgoyn',
        title: 'The Herbalist',
        type: 'companion',
        guild: "druids_circle",
        benefit: {
            text: 'When you spend (not lose) a potion, gain 1 |influence|',
        },
        advantage: [
            {
                text: '+2 Wild Advantages in forests',
            }
        ],
        event: 'provides potions.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'ruska',
        name: 'Ruska',
        title: 'The Barbarian',
        type: 'companion',
        guild: "druids_circle",
        benefit: {
            text: 'You can Reinforce on a space without a building. If you do, gain 6 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> or 1 potion.',
        },
        advantage: [
            {
                text: '+1 Wild Advantage on spaces without buildings',
            }
        ],
        event: 'provides spirit if you are outdoors.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'xyr',
        name: 'Xyr',
        title: 'The Oracle',
        type: 'companion',
        guild: "druids_circle",
        benefit: {
            text: 'Keep the top card of the treasure deck and potion deck face up. At the start of your turn, you may move the top card of either deck to the bottom.',
        },
        advantage: [
            {
                text: '+2 MAGIC Advantages',
            }
        ],
        event: 'gives you more time.',
        system: {
            advantage: 'MAGIC',
            amount: 2,
        }
    },
    {
        id: 'amani',
        name: 'Amani',
        title: 'The Vizier',
        type: 'companion',
        guild: "paladins_order",
        benefit: {
            text: 'At the end of the month, gain 4 |influence|.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages on spaces with buildings',
            }
        ],
        event: 'increases guild ranks.',
        system: {
            advantage: 'Wild',
            end_of_month: true,
        }
    },
    {
        id: 'omar',
        name: 'Omar',
        title: 'The Healer',
        type: 'companion',
        guild: "paladins_order",
        benefit: {
            text: 'In each battle, place the first 5 <img src="icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> that you lose on this card. At the end of the month, gain all <img src="/icons/warrior.png" title="warrior" alt="warrior" width="18" height="18" /> on this card.',
        },
        advantage: [
            {
                text: '+2 HUMANOID Advantages',
            }
        ],
        event: 'highlights dangerous cards in battle.',
        system: {
            advantage: 'HUMANOID',
            amount: 2,
        }
    },
    {
        id: 'sanzhar',
        name: 'Sanzhar',
        title: 'The Zealot',
        type: 'companion',
        guild: "paladins_order",
        benefit: {
            text: 'Virtues cost you 2 less <img src="icons/spirit.png" title="spirit" alt="spirit" width="18" height="18" />.',
        },
        advantage: [
            {
                text: '+1 Wild Advantage for each viture you have after your first three',
            }
        ],
        event: 'provides warriors.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'ema',
        name: 'Ema',
        title: 'The Grand Merchant',
        type: 'companion',
        guild: "thieves_guild",
        benefit: {
            text: 'You can Reinforce at any building as if it were a bazaar.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages when completing a monthly quest',
            }
        ],
        event: 'bribes the guilds.',
        system: {
            advantage: 'Wild',
        }
    },
    {
        id: 'maxim',
        name: 'Maxim',
        title: 'The Beast',
        type: 'companion',
        guild: "thieves_guild",
        benefit: {
            text: 'You can carry up to 4 extra treasures. When you gain a treasure, also gain 2 |influence|.',
        },
        advantage: [
            {
                text: '+2 BEAST Advantages',
            }
        ],
        event: 'magically transports items and companions.',
        system: {
            advantage: 'BEAST',
            amount: 2,
        }
    },
    {
        id: 'lukas',
        name: 'Lukas',
        title: 'The Plunderer',
        type: 'companion',
        guild: "thieves_guild",
        benefit: {
            text: 'When you defeat a level 4 foe, gain the top card of the treasure deck.',
        },
        advantage: [
            {
                text: '+2 Wild Advantages if you have any corruptions',
            }
        ],
        event: '"finds" treasures.',
        system: {
            advantage: 'Wild',
        }
    },
];

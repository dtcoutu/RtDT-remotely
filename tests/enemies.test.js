import { describe, it, expect } from 'vitest';
import { ENEMIES, TRAITS } from '../src/enemies.js';

describe('ENEMIES data', () => {
  it('should have all expected enemies', () => {
    expect(ENEMIES).toBeDefined();
    expect(ENEMIES.length).toBeGreaterThan(0);
  });

  it('should have enemies for each level 2-5', () => {
    const level2 = ENEMIES.filter(e => e.level === '2');
    const level3 = ENEMIES.filter(e => e.level === '3');
    const level4 = ENEMIES.filter(e => e.level === '4');
    const level5 = ENEMIES.filter(e => e.level === '5');

    expect(level2.length).toBeGreaterThan(0);
    expect(level3.length).toBeGreaterThan(0);
    expect(level4.length).toBeGreaterThan(0);
    expect(level5.length).toBeGreaterThan(0);
  });

  it('should have required properties on each enemy', () => {
    ENEMIES.forEach(enemy => {
      expect(enemy).toHaveProperty('id');
      expect(enemy).toHaveProperty('level');
      expect(enemy).toHaveProperty('name');
      expect(enemy).toHaveProperty('type');
      expect(enemy).toHaveProperty('traits');
      expect(enemy).toHaveProperty('strike_event');

      expect(enemy.type).toBe('enemy');
      expect(Array.isArray(enemy.traits)).toBe(true);
    });
  });

  it('should only use valid traits', () => {
    const validTraits = Object.keys(TRAITS);

    ENEMIES.forEach(enemy => {
      enemy.traits.forEach(trait => {
        expect(validTraits).toContain(trait);
      });
    });
  });

  it('should have unique enemy IDs', () => {
    const ids = ENEMIES.map(e => e.id);
    const uniqueIds = new Set(ids);

    expect(ids.length).toBe(uniqueIds.size);
  });
});

describe('TRAITS data', () => {
  it('should define all trait types', () => {
    expect(TRAITS.BEAST).toBeDefined();
    expect(TRAITS.HUMANOID).toBeDefined();
    expect(TRAITS.MAGIC).toBeDefined();
    expect(TRAITS.MELEE).toBeDefined();
    expect(TRAITS.STEALTH).toBeDefined();
    expect(TRAITS.UNDEAD).toBeDefined();
  });

  it('should have descriptions for each trait', () => {
    Object.values(TRAITS).forEach(description => {
      expect(typeof description).toBe('string');
      expect(description.length).toBeGreaterThan(0);
    });
  });
});

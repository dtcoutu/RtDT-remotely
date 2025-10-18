import { describe, it, expect } from 'vitest';
import { GEAR } from '../docs/gear.js';

describe('GEAR data', () => {
  it('should have all gear items', () => {
    expect(GEAR).toBeDefined();
    expect(GEAR.length).toBe(6); // Based on current gear.js
  });

  it('should have required properties', () => {
    GEAR.forEach(item => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('type');
      expect(item).toHaveProperty('description');

      expect(item.type).toBe('gear');
    });
  });

  it('should have unique gear IDs', () => {
    const ids = GEAR.map(g => g.id);
    const uniqueIds = new Set(ids);

    expect(ids.length).toBe(uniqueIds.size);
  });

  it('should have system properties when providing advantages', () => {
    const gearWithAdvantages = GEAR.filter(g => g.system?.advantage);

    gearWithAdvantages.forEach(item => {
      expect(item.system.advantage).toBeDefined();
      expect(item.system.amount).toBeDefined();
      expect(typeof item.system.amount).toBe('number');
      expect(item.system.amount).toBeGreaterThan(0);
    });
  });

  it('should have valid advantage types', () => {
    const validAdvantages = ['BEAST', 'HUMANOID', 'MAGIC', 'MELEE', 'STEALTH', 'UNDEAD', 'Wild'];

    GEAR.forEach(item => {
      if (item.system?.advantage) {
        expect(validAdvantages).toContain(item.system.advantage);
      }
    });
  });
});

import Swordsman from '../swordsman.js'

test('correct create swordsman', () => {
    const swordsman1 = new Swordsman('Name', 'Swordsman');
  
    expect(swordsman1.level).toBe(1);
    expect(swordsman1.health).toBe(100);
    expect(swordsman1.attack).toBe(40);
    expect(swordsman1.defense).toBe(10);
    expect(swordsman1.name).toBe('Name');
    expect(swordsman1.type).toBe('Swordsman');
  });
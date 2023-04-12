import Undead from '../undead.js'

test('correct create undead', () => {
    const undead1 = new Undead('Name', 'Undead');
  
    expect(undead1.level).toBe(1);
    expect(undead1.health).toBe(100);
    expect(undead1.attack).toBe(25);
    expect(undead1.defense).toBe(25);
    expect(undead1.name).toBe('Name');
    expect(undead1.type).toBe('Undead');
  });
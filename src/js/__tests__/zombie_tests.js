import Zombie from '../zombie.js'

test('correct create zombie', () => {
    const zombie1 = new Zombie('Name', 'Zombie');
  
    expect(zombie1.level).toBe(1);
    expect(zombie1.health).toBe(100);
    expect(zombie1.attack).toBe(40);
    expect(zombie1.defense).toBe(10);
    expect(zombie1.name).toBe('Name');
    expect(zombie1.type).toBe('Zombie');
  });
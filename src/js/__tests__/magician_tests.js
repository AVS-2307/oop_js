import Magician from '../magician.js'

test('correct create magician', () => {
    const magician1 = new Magician('Name', 'Magician');
  
    expect(magician1.level).toBe(1);
    expect(magician1.health).toBe(100);
    expect(magician1.attack).toBe(10);
    expect(magician1.defense).toBe(40);
    expect(magician1.name).toBe('Name');
    expect(magician1.type).toBe('Magician');
  });
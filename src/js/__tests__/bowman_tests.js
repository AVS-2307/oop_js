import Bowman from '../bowman.js'

test('correct create bowman', () => {
    const bowman1 = new Bowman('Nick', 'Bowman');
  
    expect(bowman1.level).toBe(1);
    expect(bowman1.health).toBe(100);
    expect(bowman1.attack).toBe(25);
    expect(bowman1.defense).toBe(25);
    expect(bowman1.name).toBe('Nick');
    expect(bowman1.type).toBe('Bowman');
  });
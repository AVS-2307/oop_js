import Zombie from '../zombie.js'

test('correct create zombie', () => {
    const zombie = new Zombie('Nick', 'Zombie');
    const correct = {attack: 40, defense: 10, level: 1, health: 100, name: 'Nick', type: 'Zombie'}
    expect(zombie).toEqual(correct);
  });
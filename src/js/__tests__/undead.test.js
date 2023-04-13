import Undead from '../undead.js'

test('correct create undead', () => {
    const undead = new Undead('Nick', 'Undead');
    const correct = {attack: 25, defense: 25, level: 1, health: 100, name: 'Nick', type: 'Undead'}
    expect(undead).toEqual(correct);
  });
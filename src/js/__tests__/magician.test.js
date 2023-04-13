import Magician from '../magician.js'

test('correct create magician', () => {
    const magician = new Magician('Nick', 'Magician');
    const correct = {attack: 10, defense: 40, level: 1, health: 100, name: 'Nick', type: 'Magician'}
    expect(magician).toEqual(correct);
  });
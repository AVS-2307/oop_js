import Daemon from '../daemon.js'

test('correct create daemon', () => {
    const daemon = new Daemon('Nick', 'Daemon');
    const correct = {attack: 10, defense: 40, level: 1, health: 100, name: 'Nick', type: 'Daemon'}
    expect(daemon).toEqual(correct);
  });
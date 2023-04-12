import Daemon from '../daemon.js'

test('correct create daemon', () => {
    const daemon1 = new Daemon('Nick', 'Daemon');
  
    expect(daemon1.level).toBe(1);
    expect(daemon1.health).toBe(100);
    expect(daemon1.attack).toBe(10);
    expect(daemon1.defense).toBe(40);
    expect(daemon1.name).toBe('Nick');
    expect(daemon1.type).toBe('Daemon');
  });
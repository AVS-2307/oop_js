import Character from '../character.js';

test('Получим объект Character', () => {
    const description = new Character('Nick', 'Bowman');

    const result = {
        name: 'Nick', 
        type: 'Bowman', 
        level: 1,
        health: 100    
    };
    expect(description).toEqual(result);
});

test('Повышаем уровень персонажа', () => {
    const description = new Character('Nick', 'Bowman');
    description.health = 50;
    description.attack = 10;
    description.defense = 10;
    description.levelUp();

    const result = {
        name: 'Nick', 
        type: 'Bowman',
        health: 100, 
        level: 2, 
        attack: 12, 
        defense: 12
    };
    expect(description).toEqual(result);
});

test('нельзя повысить левел умершего', () => {
  function test() {
    const description = new Character('Nick', 'Bowman');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});


test('Получим ошибку имени', () => {
  const description = () => new Character('Bravo111111', 'Bowman');
  expect(description).toThrow('Name length should be between 2 and 10 letters');
});

test('Получим ошибку типа имени', () => {
    const description = () => new Character(15, 'nsw');
    expect(description).toThrow('Name and/or Type should be string');
});

test('Получим ошибку типа', () => {
    const description = () => new Character('Nick', 15);
    expect(description).toThrow('Name and/or Type should be string');
});

test('Получим ошибку типа2', () => {
    const description = () => new Character('Nick', '15');
    expect(description).toThrow('Name and/or Type should be string');
});

test('нанесение урона', () => {
    const description = new Character('Nick', 'Bowman'); 
    description.health = 50; 
    description.defense = 25;
    const points = 15;
    description.damage(points);      
    expect(description.health).toBeCloseTo(50 - points * (1 - description.defense / 100));    
});

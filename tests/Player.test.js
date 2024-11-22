const Player = require('../src/models/Player');

describe('Player', () => {
  test('Player initializes correctly', () => {
    const player = new Player('Test Player', 50, 10, 5);
    expect(player.name).toBe('Test Player');
    expect(player.health).toBe(50);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
  });

  test('Player health cannot go below zero', () => {
    const player = new Player('Test Player', 10, 10, 5);
    player.takeDamage(15);
    expect(player.health).toBe(0);
  });

  test('Player isAlive() works correctly', () => {
    const player = new Player('Test Player', 0, 10, 5);
    expect(player.isAlive()).toBe(false);
  });
});

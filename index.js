const Player = require('./src/models/Player');
const Arena = require('./src/arena/Arena');

const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

const arena = new Arena(playerA, playerB);
arena.fight();

const Game  = require('../models/Gamemodel.js')

const gameData = [
  {
    gameId: '432jklj23432',
    player1: {
      id: '123213532523',
      health: 1.25,
      strength: 1.5,
      agility: 1,
      luck: 1.5
    },
    player2: {
      id: '23432jk432jl432',
      health: 1.5,
      strength: 2,
      agility: 1,
      luck: 1.25,
    },
    playing: true,
    player1turn: true,
  }
]

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;
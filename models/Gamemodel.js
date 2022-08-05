//requires sequelize
const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for Game
class Game extends Model {}
//game table contains gameid, player 1 object, player 2 object, a boolean as to whether the game is being played, and player1turn, which determines whose turn it is
Game.init(
  {
    gameId: {
      type: DataTypes.UUID,
    },
    player1: {
      type: DataTypes.JSON,
    },
    player2: {
      type: DataTypes.JSON,
    },
    playing: {
      type: DataTypes.BOOLEAN,
    },
    player1turn: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "game",
  }
);
//exports Game
module.exports = Game;

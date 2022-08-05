const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

// Create a new Sequelize model for books
class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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

module.exports = Game;

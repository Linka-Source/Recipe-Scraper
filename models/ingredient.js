const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates Ingredient model
class Ingredient extends Model {}

// Creates fields/columns for Ingredient model
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'category',
        key: 'id',
        }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'recipe',
        key: 'id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
  }
);

module.exports = Ingredient;

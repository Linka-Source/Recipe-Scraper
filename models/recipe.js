const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates Recipe model
class Recipe extends Model {}

// Creates fields/columns for Recipe model
Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    URL_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'category',
        key: 'id',
        }
    }, 
    user_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'user',
        key: 'id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;

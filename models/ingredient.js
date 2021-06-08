const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates Ingredient model
class Ingredient extends Model {}

// Creates fields/columns for Ingredient model
Ingredient.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            // unique: true
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

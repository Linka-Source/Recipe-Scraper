const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates Recipe model
class Recipe extends Model {}

// Creates fields/columns for Recipe model
Recipe.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        serving_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cook_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;

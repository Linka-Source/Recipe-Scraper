const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

// Creates fields/columns for User model
Tag.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'tag',
    }
);

module.exports = Tag;

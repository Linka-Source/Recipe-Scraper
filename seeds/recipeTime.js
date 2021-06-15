const { Recipe } = require('../models');

const recipeTimeData = [
    {
        recipe_time: {
            prep: '',
            cook: '25 minutes',
            active: '',
            inactive: '',
            ready: '',
            total: '25 minutes',
        },
    },
    {
        recipe_time: {
            prep: '',
            cook: '15 minutes',
            active: '',
            inactive: '',
            ready: '',
            total: '15 minutes',
        },
    },
    {
        recipe_time: {
            prep: '',
            cook: '40 minutes',
            active: '',
            inactive: '',
            ready: '',
            total: '40 minutes',
        },
    },
    {
        recipe_time: {
            prep: '',
            cook: '1 hour 20 minutes',
            active: '',
            inactive: '',
            ready: '',
            total: '1 hour 20 minutes',
        },
    },
];

const seedRecipeTime = () => Recipe.bulkCreate(recipeTimeData);

module.exports = seedRecipeTime;

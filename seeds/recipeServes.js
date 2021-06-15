const { Recipe } = require('../models');

const recipeServeData = [
    {
        recipe_serves: 4,
    },
    {
        recipe_serves: 4,
    },
    {
        recipe_serves: 6,
    },
    {
        recipe_serves: 4,
    },
];

const seedRecipeServes = () => Recipe.bulkCreate(recipeServeData);

module.exports = seedRecipeServes;

const { Recipe } = require('../models');

const recipeURLData = [
    {
        recipe_URL: 'https://www.jamieoliver.com/recipes/bread-recipes/quick-flatbreads-with-avocado-feta/',
    },
    {
        recipe_URL: 'https://www.jamieoliver.com/recipes/fruit-recipes/grilled-strawberries-with-pimm-s/',
    },
    {
        recipe_URL: 'https://www.jamieoliver.com/recipes/beef-recipes/a-cracking-burger/',
    },
    {
        recipe_URL: 'https://www.jamieoliver.com/recipes/rice-recipes/silky-squash-risotto/',
    },
];

const seedRecipeURL = () => Recipe.bulkCreate(recipeURLData);

module.exports = seedRecipeURL;

const { Recipe } = require('../models');

const recipeImageData = [
    {
        recipe_image: 'https://cdn.jamieoliver.com/recipe-database/medium/7SK9XjDG4Q-8HxbdlBlJ7C.jpg',
    },
    {
        recipe_image: 'https://cdn.jamieoliver.com/recipe-database/medium/77059516.jpg',
    },
    {
        recipe_image: 'https://cdn.jamieoliver.com/recipe-database/oldImages/medium/7_1_1434019298.jpg',
    },
    {
        recipe_image: 'https://cdn.jamieoliver.com/recipe-database/medium/121936025.jpg',
    },
];

const seedRecipeImage = () => Recipe.bulkCreate(recipeImageData);

module.exports = seedRecipeImage;

const { Recipe } = require('../models');

const recipeDescriptionData = [
    {
        recipe_description:
            "Jamie's quick flatbread recipe is perfect for whipping up at a moment's notice, and are really delicious served with avocado and feta, a great simple meal.",
    },
    {
        recipe_description:
            'This quick and easy strawberry dessert recipe from Jamie Oliver is a crowd-pleaser. A great strawberry recipe for a dinner party or a barbecue',
    },
    {
        recipe_description:
            'This is our best beef burger recipe! It shows you how to make your own burger patties from scratch, with a secret ingredient. Add your favourite toppings.',
    },
    {
        recipe_description:
            'Slow-roasted sweet squash, aromatic marjoram and nutty Parmesan come together to create this oozy, cheesy, sumptuous risotto that’s packed with flavour.',
    },
];

const seedRecipeDescription = () => Recipe.bulkCreate(recipeDescriptionData);

module.exports = seedRecipeDescription;

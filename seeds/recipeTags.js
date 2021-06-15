const { Recipe } = require('../models');

const recipeTagData = [
    {
        recipe_tags: ['Jamie Magazine', 'Bread', 'Fruit', 'Feta', 'Healthy lunch ideas', 'Healthy vegetarian recipes'],
    },
    {
        recipe_tags: ['Fruit', 'Wimbledon', 'Puddings & desserts'],
    },
    {
        recipe_tags: ["Jamie's Ministry of Food", 'Beef', 'American', 'Bread', 'Mains', 'BBQ food'],
    },
    {
        recipe_tags: [
            'Vegetables',
            'Pasta & risotto',
            'Healthy vegetarian recipes',
            'Healthy dinner ideas',
            'Lunch & dinner recipes',
        ],
    },
];

const seedRecipeTags = () => Recipe.bulkCreate(recipeTagData);

module.exports = seedRecipeTags;

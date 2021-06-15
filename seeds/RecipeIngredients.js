const { Recipe } = require('../models');

const recipeIngredientData = [
    {
        ingredients: [
            '1 teaspoon cumin seeds',
            '250 g wholemeal self-raising flour , plus extra for dusting',
            '¾ teaspoon baking powder',
            '350 g plain yoghurt',
            'olive oil',
            '2 ripe avocados',
            '75 g feta cheese',
            '1 teaspoon rose harissa',
        ],
    },
    {
        ingredients: [
            '400 g strawberries',
            '1 tablespoon vanilla sugar , (see tip)',
            '1 tablespoon stem ginger , in syrup',
            "1 splash of Pimm's",
            '4 scoops of quality vanilla ice cream',
        ],
    },
    {
        ingredients: [
            "12 Jacob's cream crackers",
            '8 sprigs of fresh flat-leaf parsley',
            '500 g quality minced beef',
            '2 heaped tablespoons Dijon mustard , optional',
            '1 large free-range egg',
            'olive oil',
            '1 cos or round lettuce',
            '3 ripe tomatoes',
            '1 red onion',
            '3-4 gherkins',
            '6 slices of Cheddar cheese , optional',
            '6 quality burger buns',
        ],
    },
    {
        ingredients: [
            '1 butternut or acorn squash , (1.2kg)',
            '1 bunch of fresh marjoram , (20g)',
            'olive oil',
            '1.2 litres quality vegetable or chicken stock',
            '1 onion',
            '1 stick of celery',
            '300 g Arborio risotto rice',
            '150 ml dry white wine',
            '200 g Tenderstem broccoli',
            '½ a lemon',
            'extra virgin olive oil',
            '50 g Parmesan cheese',
            '1 knob of unsalted butter',
        ],
    },
];

const seedRecipeIngredients = () => Recipe.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredients;

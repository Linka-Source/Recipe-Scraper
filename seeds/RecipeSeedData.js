const RecipeSeedData = [
    {
        url: 'https://www.jamieoliver.com/recipes/rice-recipes/silky-squash-risotto/',
        name: 'Quick flat breads with avocado & feta',
        description:
            "Jamie's quick flatbread recipe is perfect for whipping up at a moment's notice, and are really delicious served with avocado and feta, a great simple meal.",
        ingredients: [
            { name: '1 teaspoon cumin seeds' },
            { name: '250 g wholemeal self-raising flour ' },
            { name: 'plus extra for dusting' },
            { name: '¾ teaspoon baking powder' },
            { name: '350 g plain yoghurt' },
            { name: 'olive oil' },
            { name: '2 ripe avocados' },
            { name: '75 g feta cheese' },
            { name: '1 teaspoon rose harissa' },
        ],
        instructions: `Lightly toast the cumin in a dry pan, then tip into a bowl.,
            Add the flour, baking powder and seasoning with 250g of the yoghurt and mix together until you have a rough dough.,
            Turn out onto a lightly floured surface and knead until the dough just comes together. Place in a lightly greased bowl, cover with a damp tea towel and put to one side.,
            Peel, destone and chop the avocado into chunks, then place in a bowl. Crumble in the feta. Add a drizzle of oil and season to taste.,
            In another bowl, stir the harissa into the rest of the yoghurt.,
            Divide the dough into eight balls. Roll each one on a lightly floured surface into an oval shape, roughly 3mm thick.,
            Place a griddle pan over a high heat. Once hot. griddle each flatbread for 2 to 3 minutes, until puffed up and charred, turning halfway.,
            Off the heat, brush the flatbread with a little oil, then serve with the avocado salad and harissa yoghurt.`,

        tags: [
            { name: 'Jamie Magazine' },
            { name: 'Bread' },
            { name: 'Fruit' },
            { name: 'Feta' },
            { name: 'Healthy lunch ideas' },
            { name: 'Healthy vegetarian recipes' },
        ],
        cook_time: '25 minutes',
        serving_size: 4,
        image: 'https://cdn.jamieoliver.com/recipe-database/medium/7SK9XjDG4Q-8HxbdlBlJ7C.jpg',
    },
    {
        url: 'https://www.jamieoliver.com/recipes/bread-recipes/quick-flatbreads-with-avocado-feta/',
        name: "Grilled strawberries with Pimm's",
        description:
            'This quick and easy strawberry dessert recipe from Jamie Oliver is a crowd-pleaser. A great strawberry recipe for a dinner party or a barbecue',
        ingredients: [
            { name: '400 g strawberries' },
            { name: '1 tablespoon vanilla sugar , (see tip)' },
            { name: '1 tablespoon stem ginger , in syrup' },
            { name: '1 splash of Pimms' },
            { name: '4 scoops of quality vanilla ice cream' },
        ],
        instructions: `Preheat the grill to high.,
            Hull the strawberries and toss with the sugar.,
            Finely slice the ginger and stir through the strawberries with 2 tablespoons of the gingery syrup. Place in a shallow ovenproof dish.,
            Grill the strawberries for a few minutes, until softened and hot, then add the Pimm’s and stir to scrape up all the sticky bits from the bottom of the dish.,
            Divide the strawberries and juices between four bowls, top with a scoop of ice cream and tuck in.`,
        tags: [{ name: 'Fruit' }, { name: 'Wimbledon' }, { name: 'Puddings & desserts' }],
        cook_time: '15 minutes',
        serving_size: 4,
        image: 'https://cdn.jamieoliver.com/recipe-database/medium/77059516.jpg',
    },
];

module.exports = RecipeSeedData;

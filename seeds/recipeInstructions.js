const { Recipe } = require('../models');

const recipeInstructionData = [
    {
        recipe_instructions: [
            'Lightly toast the cumin in a dry pan, then tip into a bowl.',
            'Add the flour, baking powder and seasoning with 250g of the yoghurt and mix together until you have a rough dough.',
            'Turn out onto a lightly floured surface and knead until the dough just comes together. Place in a lightly greased bowl, cover with a damp tea towel and put to one side.',
            'Peel, destone and chop the avocado into chunks, then place in a bowl. Crumble in the feta. Add a drizzle of oil and season to taste.',
            'In another bowl, stir the harissa into the rest of the yoghurt.',
            'Divide the dough into eight balls. Roll each one on a lightly floured surface into an oval shape, roughly 3mm thick.',
            'Place a griddle pan over a high heat. Once hot. griddle each flatbread for 2 to 3 minutes, until puffed up and charred, turning halfway.',
            'Off the heat, brush the flatbread with a little oil, then serve with the avocado salad and harissa yoghurt.',
        ],
    },
    {
        recipe_instructions: [
            'Preheat the grill to high.',
            'Hull the strawberries and toss with the sugar.',
            'Finely slice the ginger and stir through the strawberries with 2 tablespoons of the gingery syrup. Place in a shallow ovenproof dish.',
            'Grill the strawberries for a few minutes, until softened and hot, then add the Pimm’s and stir to scrape up all the sticky bits from the bottom of the dish.',
            'Divide the strawberries and juices between four bowls, top with a scoop of ice cream and tuck in.',
        ],
    },
    {
        recipe_instructions: [
            'Wrap the crackers in a tea towel and smash up until fine, breaking up any big bits with your hands, then tip into a large bowl.',
            'Finely chop the parsley (stalks and all), then add to the bowl with the mustard (if using), and the minced beef.',
            'Crack the egg into the bowl, then add a good pinch of sea salt and black pepper.',
            'With clean hands, scrunch and mix everything up well. Divide into 6 and pat and mould each piece into a roundish shape, roughly 2cm thick.',
            'Place the burgers onto a plate, drizzle with oil, then cover and place in the fridge until needed – this will help to firm them up.',
            'To cook the burgers, preheat a large griddle or frying pan for 4 minutes on a high heat, then turn the heat down to medium.',
            'Place the burgers on the griddle or into the pan, then use a spatula to lightly press them down, making sure the burger is in full contact with the pan.',
            'Cook the burgers for 3 or 4 minutes on each side, depending on how you like them – you may need to work in batches.',
            'Meanwhile, wash and dry a few small lettuce leaves, tearing up the larger ones. Slice the tomatoes, peel and finely slice the red onion, then slice the gherkins lengthways as finely as you can.',
            'Place all the veg toppings, and the cheese (if using) on a platter and put in the middle of the table with plates, cutlery, ketchup and drinks.',
            'Once cooked, remove the burgers to a plate and carefully wipe the pan clean with a ball of kitchen paper.',
            'Halve the burger buns and lightly toast them in the pan, then serve up.',
        ],
    },
    {
        recipe_instructions: [
            'Preheat the oven to 180°C/350°F/gas 4. Scrub the squash (there’s no need to peel it), carefully halve it lengthways and deseed, then chop into 2cm chunks.',
            'Place the squash in a roasting tray, pick and chop most of the marjoram leaves, then toss with 1 tablespoon of olive oil and a pinch of sea salt and black pepper. Roast for 1 hour, or until soft and caramelised.',
            'With 20 minutes to go on the squash, simmer the stock over a low heat. Peel and finely chop the onion and celery, then place in a high-sided pan on a medium heat with ½ a tablespoon of olive oil. Cook for 10 minutes, or until softened but not coloured, stirring regularly, then stir in the rice to toast for 2 minutes.',
            'Pour in the wine and stir until absorbed. Add a ladleful of stock and wait until it’s been fully absorbed before adding another, stirring constantly and adding ladlefuls of stock until the rice is cooked – it will need 16 to 18 minutes.',
            'Remove the squash from the oven and mash up with a fork – I like to do half smashed and leave half chunky, then stir through the risotto about halfway through.',
            'Meanwhile, trim the broccoli, halving any larger stalks lengthways to help it cook evenly. Steam for 2 minutes, or until just cooked but still full of colour, then toss with the lemon juice and a drizzle of extra virgin olive oil, and season to perfection.',
            'When the risotto is done, add enough extra stock or boiling kettle water to make the risotto oozy, then finely grate in the Parmesan, and beat in with the butter.',
            'Cover the pan, turn off the heat and leave to relax for 2 minutes. Stir, season to perfection, then divide between your plates.',
            'Pick over the remaining marjoram and serve topped with the broccoli. Lovely.',
        ],
    },
];

const seedRecipeInstructions = () => Recipe.bulkCreate(recipeInstructionData);

module.exports = seedRecipeInstructions;

const router = require('express').Router();
const recipeScraper = require('recipe-scraper');
const withAuth = require('../../utils/withAuth');
const { User, Category, Recipe, Ingredient, Tag } = require('../../models');

// GET ROUTER to find all recipes
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            // Includes associated Category and Tag data
            include: [
                {
                    model: Category,
                    attributes: ['id', 'category_name'],
                },
                {
                    model: Tag,
                    attributes: ['id', 'tag_name'],
                },
            ],
        });
        if (!recipeData) {
            res.status(404).json({ message: 'No recipes found' });
            return;
        }

        res.status(200).json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/add', async (req, res) => {
    const category = req.body.category;
    const recipeUrl = req.body.recipeUrl;
    console.log({ category, recipeUrl });
    let recipeData;
    // enter a supported recipe url as a parameter - returns a promise
    try {
        recipeData = await recipeScraper(req.body.recipeUrl);
        console.log(recipeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    try {
        const recipeCreated = await Recipe.create(
            {
                name: recipeData.name,
                description: recipeData.description,
                ingredients: recipeData.ingredients.map((i) => ({ name: i })),
                instructions: recipeData.instructions.join(', '),
                url: req.body.recipeUrl,
                image: recipeData.image,
                serving_size: recipeData.servings,
                cook_time: recipeData.time.cook,
            },
            {
                include: [Ingredient],
            }
        );

        res.json(recipeCreated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;

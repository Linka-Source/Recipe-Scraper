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
    const cat = req.body.category;
    console.log('here');
    var recipeData = null;
    // enter a supported recipe url as a parameter - returns a promise
    try {
        recipeData = await recipeScraper(req.body.recipeUrl);
        console.log(recipeData);

        // save recipe data to model here.
        // Recipe.create({
        //     name: recipeData.name,
        //     description: recipeData.description,
        //     ingredients: recipeData.ingredients,
        //     instructions: recipeData.instructions,
        //     url: req.body.recipeUrl,
        //     image: recipeData.image,
        //     serving_size: recipeData.servings,
        //     cook_time: recipeData.time.cook,
        // })
        //     .then((recipeData) => res.json(recipeData))
        //     .catch((err) => {
        //         console.log(err);
        //         res.status(500).json(err);
        //     });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    Recipe.create({
        name: recipeData.name,
        description: recipeData.description,
        ingredients: JSON.stringify(recipeData.ingredients),
        instructions: JSON.stringify(recipeData.instructions),
        url: req.body.recipeUrl,
        image: recipeData.image,
        serving_size: recipeData.servings,
        cook_time: recipeData.time.cook,
    })
        .then((recipeData) => res.json(recipeData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    res.render('recipeAdd', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;

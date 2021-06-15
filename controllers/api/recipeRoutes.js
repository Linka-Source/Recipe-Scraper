const router = require('express').Router();
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

router.get('/add', withAuth, (req, res) => {
    console.log(req.session.user);
    res.render('recipeAdd', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;

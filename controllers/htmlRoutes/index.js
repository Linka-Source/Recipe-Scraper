// Requiring path to so we can use relative routes to our HTML files
const express = require('express');
// Requiring our custom middleware for checking if a user is logged in
const withAuth = require('../../utils/withAuth');
const { Recipe, Ingredient } = require('../../models');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

router.get('/login', (req, res) => {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
        res.redirect('/dashboard');
    }
    res.render('login', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

// Route for logging user out
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204);
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

router.get('/signup', (req, res) => {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
        res.redirect('/dashboard');
    }
    res.render('signup', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/dashboard', withAuth, async (req, res) => {
    const recipesData = await Recipe.findAll(
        {},
        {
            include: [Ingredient],
        }
    );
    const recipes = recipesData.map((recipe) => recipe.get({ plain: true }));
    console.log(req.session.user);
    res.render('dashboard', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
        recipes,
    });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/recipe/:id', async (req, res) => {
    const recipeData = await Recipe.findByPk(req.params.id, {
        include: [Ingredient],
    });
    const recipe = recipeData.get({ plain: true });
    console.log(req.session.user);
    res.render('recipe', {
        recipe,
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

router.get('/recipe-add', (req, res) => {
    res.render('recipeAdd', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;

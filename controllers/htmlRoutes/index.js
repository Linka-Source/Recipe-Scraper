// Requiring path to so we can use relative routes to our HTML files
const express = require('express');
// Requiring our custom middleware for checking if a user is logged in
const withAuth = require('../../utils/withAuth');
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
router.get('/dashboard', withAuth, (req, res) => {
    console.log(req.session.user);
    res.render('dashboard', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/recipe', (req, res) => {
    console.log(req.session.user);
    res.render('recipe', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
        recipe: {
            name: 'Classic ratatouille',
            url: 'https://www.jamieoliver.com/recipes/vegetables-recipes/classic-ratatouille/',
            image: '',
            ingredients:
                'Ingredients: 2 red onions, 4 cloves of garlic, 2 aubergines, 3 courgettes, 3 red or yellow peppers, 6 ripe tomatoes, ½ a bunch of fresh basil , (15g), olive oil, a few sprigs of fresh thyme, 1 x 400 g tin of quality plum tomatoes, 1 tablespoon balsamic vinegar, ½ a lemon',
            cook_time: 'Cook time: 1 HOUR 15 MINUTES',
            serving_size: 'Serves 4',
            description:
                'This moreish Mediterranean-style vegetable stew is perfect for a super-healthy midweek supper.',
            instructions:
                'METHOD: Prep your ingredients before you start – peel and cut the onions into wedges, then peel and finely slice the garlic. Trim the aubergines and courgettes, deseed the peppers and chop into 2.5cm chunks. Roughly chop the tomatoes. Pick the basil leaves and set aside, then finely slice the stalks. Heat 2 tablespoons of oil in a large casserole pan or saucepan over a medium heat, add the chopped aubergines, courgettes and peppers (you may need to do this in batches) and fry for around 5 minutes, or until golden and softened, but not cooked through. Spoon the cooked veg into a large bowl. To the pan, add the onion, garlic, basil stalks and thyme leaves with another drizzle of oil, if needed. Fry for 10 to 15 minutes, or until softened and golden. Return the cooked veg to the pan and stir in the fresh and tinned tomatoes, the balsamic and a good pinch of sea salt and black pepper. Mix well, breaking up the tomatoes with the back of a spoon. Cover the pan and simmer over a low heat for 30 to 35 minutes, or until reduced, sticky and sweet. Tear in the basil leaves, finely grate in the lemon zest and adjust the seasoning, if needed. Serve with a hunk of bread or steamed rice.',
        },
    });
});

router.get('/recipe/add', (req, res) => {
    res.render('recipeAdd', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;

const router = require('express').Router();
const withAuth = require('../../utils/withAuth');

router.get('/add', withAuth, (req, res) => {
    console.log(req.session.user);
    res.render('recipeAdd', {
        user: req.session.user,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;

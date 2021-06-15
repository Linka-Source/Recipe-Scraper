// Requiring path to so we can use relative routes to our HTML files
const express = require('express');
// Requiring our custom middleware for checking if a user is logged in
const withAuth = require('../../utils/withAuth');
const router = express.Router();
const { Categories } = require('../../models');
const withAuth = require('../../utils/auth');

// route to get all categories
router.get('/', withAuth, async (req, res) => {
    const categoriesData = await Categoriess.findAll().catch((err) => { 
        res.json(err);
      });
        const categories = categoriesData.map((categories) => categories.get({ plain: true }));
        res.render('all', { categories });
      });



module.exports = router;


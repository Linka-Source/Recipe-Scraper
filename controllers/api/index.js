const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeAddRoutes = require('./recipeAddRoutes');

router.use('/users', userRoutes);
router.use('./recipe/add', recipeAddRoutes);

module.exports = router;

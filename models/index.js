const Ingredient = require('./ingredient');
const User = require('./user');
const Recipe = require('./recipe');
const Category = require('./category');
const Tag = require('./tag');

User.hasMany(Recipe);
Recipe.belongsTo(User);

Recipe.belongsToMany(Tag, {
    foreignKey: 'recipe_id',
    through: 'recipe_tags',
    timestamps: false,
});

Tag.belongsToMany(Recipe, {
    foreignKey: 'tag_id',
    through: 'recipe_tags',
    timestamps: false,
});

Category.hasMany(Recipe);
Recipe.belongsTo(Category);

Recipe.belongsToMany(Ingredient, {
    foreignKey: 'recipe_id',
    through: 'recipe_ingredients',
    timestamps: false,
});

Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
    through: 'recipe_ingredients',
    timestamps: false,
});

module.exports = {
    User,
    Ingredient,
    Category,
    Recipe,
    Tag,
};

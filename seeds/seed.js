const sequelize = require('../config/connection');
const { User, Recipe, Ingredient, Tag } = require('../models');

const RecipeSeedData = require('./RecipeSeedData');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const recipe of RecipeSeedData) {
        const recipeData = await Recipe.create(
            {
                ...recipe,
                user_id: 1,
            },
            {
                include: [Tag, Ingredient],
            }
        );
    }

    process.exit(0);
};

seedDatabase();

const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const RecipeSeedData = require('./recipeData');

const userData = require('./userData.json');
const importedRecipeData = require('./importedRecipeData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    const seedRecipeData = await Recipe.bulkCreate(RecipeSeedData);
    console.log('\n----- SEED DATA SYNCED -----\n');

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // for (const project of projectData) {
    //     await Project.create({
    //         ...project,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();

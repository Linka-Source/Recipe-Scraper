const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const seedRecipeTitle = require('./recipeTitle');
const seedRecipeImage = require('./recipeImage');
const seedRecipeDescription = require('./recipeDescription');
const seedRecipeServes = require('./recipeServes');
const seedRecipeTime = require('./recipeTime');
const seedRecipeIngredients = require('./RecipeIngredients');
const seedRecipeInstructions = require('./recipeInstructions');
const seedRecipeTags = require('./recipeTags');
const seedRecipeURL = require('./recipeURL');

const userData = require('./userData.json');
const importedRecipeData = require('./importedRecipeData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedRecipeTitle();
    console.log('\n----- RECIPE TITLES SEEDED -----\n');

    await seedRecipeImage();
    console.log('\n----- RECIPE IMAGES SEEDED -----\n');

    await seedRecipeDescription();
    console.log('\n----- RECIPE DESCRIPTIONS SEEDED -----\n');

    await seedRecipeServes();
    console.log('\n----- RECIPE SERVINGS SEEDED -----\n');

    await seedRecipeTime();
    console.log('\n----- RECIPE COOKING TIMES SEEDED -----\n');

    await seedRecipeIngredients();
    console.log('\n----- RECIPE INGREDIENTS SEEDED -----\n');

    await seedRecipeInstructions();
    console.log('\n----- RECIPE INSTRUCTIONS SEEDED -----\n');

    await seedRecipeTags();
    console.log('\n----- RECIPE TAGS SEEDED -----\n');

    await seedRecipeURL();
    console.log('\n----- RECIPE URLS SEEDED -----\n');

    const recipes = await Recipe.bulkCreate(importedRecipeData);

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

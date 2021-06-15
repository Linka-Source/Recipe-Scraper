// import the module
const recipeScraper = require('recipe-scraper');
// enter a supported recipe url as a parameter - returns a promise
async function scrapeRecipe() {
    let = await recipeScraper(recipeURL);
    console.log(recipeData);
}
scrapeRecipe();

import Recipe from "../../../models/Recipe";


const getAllRecipes = async (filters) => {
    let recipes = await Recipe.find(filters);
    return recipes;
};

module.exports = {
    getAllRecipes,
}
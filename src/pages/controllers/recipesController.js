import Recipe from "../../../models/Recipe";

const getRecipes = async () => {
    const recipes = await Recipe.find().sort({ date: -1 });
    return recipes;
}

const getAllRecipes = async (filters) => {
    const recipes = await Recipe.find(filters);
    return recipes;
};

const postRecipe = async (data) => {
    const recipe = new Recipe(data);
    await recipe.save();
    return recipe;
}

const deleteRecipe = async (id) => {
    const recipeDeleted = await Recipe.findById(id).lean()
    const recipe = await Recipe.findByIdAndUpdate(
        id, {deleted: !recipeDeleted.deleted},
        {
            new: true,
            runValidators: true
        }
    );
    return recipe;
}

const editRecipe = async (id, data) => {
    const recipe = await Recipe.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );
    return recipe;
}

const getRecipe = async (id) => {
    const recipe = await Recipe.findById(id).lean();
    return recipe;
}

module.exports = {
    getRecipes,
    getAllRecipes,
    postRecipe,
    deleteRecipe,
    editRecipe,
    getRecipe
};
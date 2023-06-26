import conectionDB from "../../../../lib/dbConnect";
import Recipe from "../../../../models/Recipe";
import { createFilters } from "@/pages/utils/functions";
import { getRecipes, getAllRecipes, postRecipe } from "@/pages/controllers/recipesController"

export default async function handler(req, res) {
  await conectionDB();

  const { method } = req;
  switch (method) {
    //GET
    case "GET":
      try {
        const { title, category, ingredients } = req.query;
        let recipes;
        if (!title && !category && !ingredients) recipes = await getRecipes();
        else if (title || category || ingredients) {
          const filters = createFilters(title, category, ingredients);
          const filtersRecipes = await getAllRecipes(filters);
          recipes = filtersRecipes.length ? filtersRecipes : [];
        } else {
          return res.status(404).json({ success: false, error: "No se encontraron recetas" });
        }
        return res.status(200).json({success: true, data: recipes});
      } catch (error) {
        return res.status(404).json({ success: false, msg: error.message });
      }

      //POST
      case "POST":
        try {
        const recipe = await postRecipe(req.body);
        return res.status(200).json({ success: true, recipe });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: "Falla del servidor" });
  }
}
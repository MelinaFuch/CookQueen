import conectionDB from "../../../../lib/dbConnect";
import { getAllRecipes } from "@/pages/controllers/recipesController";

export default async function handler(req, res) {
await conectionDB();

const { method } = req;
switch (method) {
    //GET
    case "GET":
        try {
            let recipes;
            recipes = await getAllRecipes();
            if (!recipes) return res.status(404).json({ success: false, error: "No se encontraron recetas" });
            return res.status(200).json({success: true, data: recipes});
        } catch (error) {
            return res.status(404).json({ success: false, msg: error.message });
        }

    default:
        return res.status(500).json({ success: false, error: "Falla del servidor" });
    }
}
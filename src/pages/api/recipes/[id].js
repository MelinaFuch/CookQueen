import conectionDB from "../../../../lib/dbConnect";
import Recipe from "../../../../models/Recipe";
import { editRecipe, deleteRecipe, getRecipe } from "../../controllers/recipesController"


export default async function handler(req, res) {
    await conectionDB();

    const { method } = req;
    var { id } = req.query;

    switch (method) {
        case 'PUT':
            try {
                const recipe = await editRecipe(id, req.body);

                if (!recipe) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: recipe});

            } catch (error) {
                return res.status(404).json({success: false, error});
            }

            case 'DELETE':
                try {
                    const { deleted } = req.query; // Obtiene el valor de deleted desde req.query
                    console.log(req.query, "soy el query delete");

                    const recipe = await deleteRecipe(id, deleted);

                    if (!recipe) {
                         return res.status(404).json({ success: false });
                        }

                    return res.status(200).json({ success: true, data: recipe });

                } catch (error) {
                return res.status(404).json({ success: false, error });
                 }

        // case 'DELETE':
        //     try {
        //         const deleted = req.query.deleted
        //         console.log(req.query,"soy el query delete")

        //         const recipe = await deleteRecipe(id, deleted);

        //         if (!recipe) {
        //             return res.status(404).json({success: false});
        //         }

        //         return res.status(200).json({success: true, data: recipe});

        //     } catch (error) {
        //         return res.status(404).json({success: false, error});
        //     }

        case 'GET':
            try {
                const recipe = await getRecipe(id);

                if (!recipe) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: recipe});

            } catch (error) {
                return res.status(404).json({success: false});
            }

            default:
                return res.status(500).json({success: false, error: 'Falla en el servidor'});
    }
}
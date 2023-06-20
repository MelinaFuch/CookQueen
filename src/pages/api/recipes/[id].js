import conectionDB from "../../../../lib/dbConnect";
import Recipe from "../../../../models/Recipe";


export default async function handler(req, res) {

    await conectionDB();

  // POST api/Recipe/:id

    const { method } = req;
    var { id } = req.query;

    switch (method) {
        case 'PUT':
            try {
                const recipe = await Recipe.findByIdAndUpdate(
                    id,
                    req.body,
                    {
                        new: true,
                        runValidators: true
                    }
                );

                if (!recipe) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: recipe});

            } catch (error) {
                return res.status(404).json({success: false, error});
            }

        case 'DELETE':
            try {
                const recipe = await Recipe.findByIdAndUpdate(
                    id, {deleted: 'si'},
                    {
                        new: true,
                        runValidators: true
                    }
                );

                if (!recipe) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: recipe});

            } catch (error) {
                return res.status(404).json({success: false, error});
            }

        case 'GET':
            try {
                const recipe = await Recipe.findById(id).lean();

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
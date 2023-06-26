import conectionDB from "../../../../lib/dbConnect";
import { deleteUser, editUser, getUser } from "../../controllers/usersController";

export default async function handler(req, res) {
    await conectionDB();

    const { method } = req;
    var { id } = req.query;

    switch (method) {
        case 'PUT':
            try {
                const user = await editUser(id, req.body);

                if (!user) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: user});

            } catch (error) {
                return res.status(404).json({success: false, error});
            }

        case 'DELETE':
            try {
                const user = await deleteUser(id);

                if (!user) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: user});

            } catch (error) {
                return res.status(404).json({success: false, error});
            }

        case 'GET':
            try {
                const user = await getUser(id);

                if (!user) {
                    return res.status(404).json({success: false});
                }

                return res.status(200).json({success: true, data: user});

            } catch (error) {
                return res.status(404).json({success: false});
            }

            default:
                return res.status(500).json({success: false, error: 'Falla en el servidor'});
    }
}
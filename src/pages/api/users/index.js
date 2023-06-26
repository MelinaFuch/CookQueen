import conectionDB from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import { getAllUsers, postUser } from '../../controllers/usersController'

export default async function handler(req, res) {
    await conectionDB();

    const { method } = req;
    switch (method) {
        //GET
        case "GET":
        try {
            const users = getAllUsers();
            if (!users) return res.status(404).json({ success: false, error: "No se encontraron usuarios" });
            else return res.status(200).json({success: true, data: users});
        } catch (error) {
            return res.status(404).json({ success: false, msg: error.message });
        }

        //POST
        case "POST":
            try {
            const user = postUser(req.body);
            return res.status(200).json({ success: true, user });
        } catch (error) {
            return res.status(400).json({ success: false, error });
        }
        default:
        return res.status(500).json({ success: false, error: "Falla del servidor" });
    }
}
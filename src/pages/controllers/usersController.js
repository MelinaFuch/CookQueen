import User from "../../../models/User";

const getAllUsers = async () => {
    const users = await User.find();
    return users;
}

const postUser = async (data) => {
    const user = new User(data);
    await user.save();
    return user;
}

const deleteUser = async (id, status, tipo) => {
    const user = await User.findByIdAndUpdate(
        id, {status: status, tipo: tipo},
        {
            new: true,
            runValidators: true
        }
    );
    return user;
}

const editUser = async (id, data) => {
    const user = await User.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );
    return user;
}

const getUser = async (id) => {
    const user = await User.findById(id).lean();
    return user;
}

module.exports = {
    getAllUsers,
    postUser,
    deleteUser,
    editUser,
    getUser
}

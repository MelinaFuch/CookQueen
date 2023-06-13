import mongoose from "mongoose";

const URI_MONGO = process.env.URI_MONGO;

const conectionDB = async () => {
    try {
        await mongoose.connect(URI_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default conectionDB;
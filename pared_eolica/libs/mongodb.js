import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la DB");
    } catch (error) {
        console.error("Error al conectar a la DB", error);
    }
};

export default connectMongoDB;
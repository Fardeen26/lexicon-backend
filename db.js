import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database");
    } catch (error) {
        console.log(error)
    }
}

Connection();
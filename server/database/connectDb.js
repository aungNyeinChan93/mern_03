import mongoose from "mongoose"
import { MONGO_URI } from '../config/env.js'

const connectDb = async (callback) => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        db && console.log(`Mongodb is connected on ${db.connection.host}`);
        callback();
    } catch (error) {
        console.error(error.message)
    }
};

export default connectDb;
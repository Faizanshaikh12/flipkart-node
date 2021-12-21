import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('database connected')
    } catch (err) {
        console.log(err)
    }
}

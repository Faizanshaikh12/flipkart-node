import express from "express";
import dotenv from 'dotenv';
import {connection} from "./db/config.js";
import {fakeData} from "./fakeData.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
connection()
app.listen(PORT, () => {
    console.log(`Server Listen: ${PORT}`);
})

//Fake Data
fakeData();

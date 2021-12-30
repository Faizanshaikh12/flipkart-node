import express from "express";
import dotenv from 'dotenv';
import {connection} from "./db/config.js";
import {fakeData} from "./fakeData.js";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Routes);

const PORT = process.env.PORT || 8000;
connection()
app.listen(PORT, () => {
    console.log(`Server Listen: ${PORT}`);
})

//Fake Data
fakeData();

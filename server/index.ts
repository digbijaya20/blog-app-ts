import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cros from "cors";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


//Middleware

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cros());
app.use(morgan('dev'));
app.use(cookieParser());

//Routes
app.get('/', (req, res) => {
    res.json({msg: 'Hello bro chill now'});
})

//Database
import './config/database';

//Server Listenning 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on PORT', 5000);
})
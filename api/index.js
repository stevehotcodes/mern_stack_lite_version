import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import route from './routes/userRoutes.js';



// set up the express server
const app=express();
// set up the middleware such that the server can parse object in json format
app.use(bodyParser.json())
// set up the dotenv to read environment variables 
dotenv.config()

// read environment variables from dotenv
const {PORT,MONGO_DB_URL}=process.env
const port=PORT || '7000'
const mongo_db_url=MONGO_DB_URL 





// database connection
mongoose
    .connect(mongo_db_url)
    .then(()=>{
        console.log("Database connected successfully ")
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

app.use("/api",route)
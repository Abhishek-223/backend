import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
   app.on("error", (err) => {
     console.log('ERR: ', err);
     throw err;
   });
   app.listen(process.env.PORT || 8000 , () =>{
     console.log(`Server is running at port:${process.env.PORT}`)
   })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!! ", err);
})




/*
import express  from 'express';
const app = express();

(async =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err)=>{
            console.log('ERR: ',error);
            throw err;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`); 
        });
        console.log('Connected to MongoDB');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()*/
import express from 'express';
import mongoose from 'mongoose';


const api = express();


mongoose.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("CONNECTED TO DATABASE")
})
.catch((err)=>{console.error(err)});

api.use(express.static("../MEAN_EXERCISE/FRONTEND/Frontend/dist/Frontend/browser"))






api.listen(3000,()=>{
    console.log("WORKING !!");

})
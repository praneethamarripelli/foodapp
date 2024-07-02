import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://praneetha:Praneetha_1234@cluster0.ts76nd2.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}
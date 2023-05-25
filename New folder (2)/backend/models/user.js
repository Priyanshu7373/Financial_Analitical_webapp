import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
        unique:true,
    },
    password:{
        type:String,
        // required:true
    },
    initial_balance:{
        type:Number,
        // required:true
    },
    // Total_transaction:{
    //     type:Number,
    //     default:0
    // },
})
export const User=mongoose.model("User",userSchema);
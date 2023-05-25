import express from"express";
import {User} from "../models/user.js"
import jwt from "jsonwebtoken";
export const auth=async (req,res,next)=>
{
    const {token}=req.cookies;
     if(!token)
     {return(
        res.status(404).json({
            success:false,
            message:"login first",
        }))
     }
     const decode= jwt.verify(token,"pqowieuryt");
     req.user=await User.findById({_id:decode._id});
     next();
    //  req.body=decode._id;
}
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return  res.status(400).json({
                success: false,
                message: "user not found",
            })
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
        return (
            res.status(400).json({
                success: false,
                message: "invalid password",
            }))
    }
    const token = await jwt.sign({ _id: user._id }, "pqowieuryt")
    return (
        res.status(200).cookie("token", token).json({
            success: true,
            message: "login success",
        }))
}
export const register = async (req, res) => {
    const { name, email, password, initial_balance } = req.body;
    const match = await User.findOne({ email });
    if (match) {
        return (
            res.status(404).json({
                success: false,
                message: "user already exist",
            }))
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password:hashpassword , initial_balance });
    const token = await jwt.sign({ _id: user._id }, "pqowieuryt");
    return (
        res.status(200).cookie("token", token).json({
            success: true,
            message: "register success",
        }))
}
export const logout = async (req, res) => {
    res.clearCookie("token");
    return (
        res.status(200).json({
            success: true,
            message: "logout success",
        }))
}
export const editprofile = async (req, res) => {
    const { name, email, password } = req.body;
    const user= await User.findOne({_id:req.user._id});
    if(name)
    {user.name=name;}
    if(email)
    {user.email=email;}
    if(password)
    { const hashed_password=bcrypt.hash(password, 10);
        user.password=hashed_password;
    }
    await user.save();
    return (
        res.status(200).json({
            success: true,
            message: "profile updated",
        }))
}
export const getprofile= async (req, res) => {
    const user= await User.findOne({_id:req.user._id});
    return (
        res.status(200).json({
            success: true,
            message: "profile",
            user:user,
        }))
}

import HomeModel from "../models/userModel.js";
import asyncHanlder from "express-async-handler";
import UserModel from "../models/userModel.js";
import { generateJwtToken } from "../utils/generateJwtToken.js";
export const registerUser = asyncHanlder(async (req, res) => {
    try {
        const { name, email, password, pic } = req.body;
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User Already Exists");
        }
        const user = await UserModel.create({
            name, email, password, pic
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token:generateJwtToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error("Error occured while creating the user.");
        }
    } catch (error) {
        res.status(400);
        throw new Error(`Un Expected error occured while creating the user ${error.message}`);
    }
});

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
    
        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                pic:user.pic,
                token:generateJwtToken(user._id)
            });
        }else{
            res.status(400);
            throw new Error("Invalid Email or Password!")
        }
    } catch (error) {
        res.status(400);
        throw new Error(`Un Expected error occured while login the user ${error.message}`);
    }
}


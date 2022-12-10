import jwt from "jsonwebtoken";
import UserModel from '../models/user.js';

export const checkUserAuth = async(req,res,next)=>{
    let token;
    const {authorization} = req.headers;
    if(authorization && authorization.startsWith("Bearer")){
        try {
            token = authorization.split(" ")[1];

            const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.user = await UserModel.findById(userID).select("-password");
            // res.status(409).json({ status: "error", message: "All fields are required." })
            next();

        } catch (error) {
            res.status(409).json({ status: "error", message: "Unauthorized user" })
        }
    }else{
        res.status(409).json({ status: "error", message: "Unauthorized user" })
    }
}
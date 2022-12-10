import HomeModel from "../models/home.js";
export const getHome =async (req,res)=>{
    res.send({name:"Shafique Malik"});
    // try {
    //     const homeData = await HomeModel.find();
    //     res.status(200).json(homeData);
    // } catch (error) {
    //     res.status(404).json({message:error.message})
    // }
}


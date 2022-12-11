import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import { notes } from "./assets/data.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
// app.use(cors({origin: 'http://localhost:3001'}));

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use("/api/users",userRoutes);
app.get("/api/notes",(req,res)=>{
    res.send(notes)
})

app.use(notFound);
app.use(errorHandler);

const CONNECTION_URL = process.env.MONGODB_URL

const PORT = process.env.PORT || 5000;
// app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))

//stop warnings from console
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT} and mongodb connected`)))
.catch((error)=>console.log("=====Error=====",error.message));






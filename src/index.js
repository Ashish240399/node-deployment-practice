const express=require("express");
const app=express();
const morgan=require("morgan");
const helmet=require("helmet")
const cors=require("cors");
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'))
app.use(cors());
const userController=require("./controller/userController")
app.use("/",userController)
module.exports=app;
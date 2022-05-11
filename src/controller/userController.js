const app=require("../index");
const express=require("express");
const router=express.Router();
router.get("",async(req,res)=>{
    try {
        return res.send("Hii")
    } catch (error) {
        return res.send(error)
    }
})

module.exports=router
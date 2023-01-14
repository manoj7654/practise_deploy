
const express=require("express");
const { Todomodel } = require("../modal/modal.js");
const todoRouter=express.Router();
const jwt=require("jsonwebtoken");


todoRouter.get("/getdata", async(req,res)=>{
     token=req.headers.authorization.split(" ")[1]
    try {
         await jwt.verify(token,"chandan",async(err,decoded)=>{
            if(err){
                res.send("Invalid Token")
            }else{
              const result=await Todomodel.find();
              res.send(result)
            }
         })
    } catch (error) {
        console.log(error)
    }
})



todoRouter.post("/todo/create",async(req,res)=>{
    let body=req.body;
    try {
        let todo=new Todomodel(body)
        await todo.save();
        let token= jwt.sign({name:"manoj123"},"chandan",{expiresIn:"1h"})
        res.send({message:"Added","token":token})
      
    } catch (error) {
        console.log({"err":"something went wrong"});
        console.log(error)
    }
})

module.exports={todoRouter}
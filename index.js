
const express=require("express");
const todoApp=express();
const {connection}=require("./config/db");
const {todoRouter}=require("./routes/todoroutes")

require('dotenv').config()
todoApp.use(express.json());
todoApp.use("/",todoRouter)




todoApp.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (err) {
        console.log("something went wrong");
        console.log(err)
    }
})
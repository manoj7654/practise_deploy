const mongoose=require("mongoose")
const todoSchema=mongoose.Schema({
    
    title:{type:String,require:true},
    completed:Boolean
},{
 versionKey:false
})

const Todomodel=mongoose.model("todo",todoSchema);

module.exports={Todomodel}
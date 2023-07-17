const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    user:String,
    userID:String,
    device:String,
    
},{
    versionKey:false
})

const postModel=mongoose.model("post",postSchema)

module.exports={
    postModel
}
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String,required:true},
    creator:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
})

const postModel = mongoose.model('post',postSchema)
module.exports =postModel
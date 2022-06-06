const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   age:{
       type:Number,
       required:true
   }, 
   mobile:{
    type:Number,
    required:true
},
   address:{
       type:String,
       required:true
   },
},
{ timestamps: true })

const FriedModel = mongoose.model("Friends",FriendSchema)

module.exports = FriedModel;
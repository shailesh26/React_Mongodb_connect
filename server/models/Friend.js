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
   discription:{
       type:String,
       required:false
   }
})

const FriedModel = mongoose.model("Friends",FriendSchema)

module.exports = FriedModel;
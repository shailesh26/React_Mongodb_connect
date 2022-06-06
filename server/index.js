const { response } = require('express')
const express = require('express')
const FriedModel = require('./models/Friend')
const cors = require('cors')
require('dotenv').config
const app = express()

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://manu:<Password>@cluster0.y43xm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true,})

app.post('/addUser', async (req,resp)=>{

    const name = req.body.name;
    console.log(name)
    const age = req.body.age;
    console.log(age)
    const mobile = req.body.mobile;
    console.log(mobile)
    const address = req.body.address;
    console.log(address)

    const friend = new FriedModel({name:name,age:age,mobile:mobile,address:address})
   await  friend.save()
   resp.send(friend)
})

app.get('/getUserList', async (req,resp)=>{

    FriedModel.find({},(error,result)=>{

        if(error){
          resp.send(error)
        }else{
           resp.send(result)
        }

    })
})

app.put('/updateuser', async(req,resp)=>{
    const newAge = req.body.newupdatedAge
    console.log(`new updated age is ${newAge}`)
    const id = req.body.id


        await FriedModel.findById(id,(error,friendupdate)=>{
            friendupdate.age = newAge
            friendupdate.save()
        }).clone()
    

   resp.send("updated")

})

app.delete('/deleteuser/:id',async (req,resp)=>{
    const id = req.params.id
    console.log(`delete ${id}`)

    await FriedModel.findByIdAndRemove(id).exec()
     
    resp.send("User deleted")
})

app.listen(process.env.PORT || 3001 ,(error,result)=>{
    if(error){
        console.log(error)
    }else{
        console.log("connected")
    }
})

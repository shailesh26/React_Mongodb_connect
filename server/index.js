const { response } = require('express')
const express = require('express')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

const FriedModel = require('./models/Friend')

mongoose.connect("mongodb+srv://manu:Welcome123@cluster0.y43xm.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true,})

app.post('/addUser', async (req,resp)=>{

  
    const name = req.body.name;
    console.log(name)
    const age = req.body.age;
    console.log(age)

    const friend = new FriedModel({name:name,age:age})
   await  friend.save()
   resp.send("Data inserted!!!")
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

app.listen(3001,(error,result)=>{
    if(error){
        console.log(error)
    }else{
        console.log("connected")
    }
})
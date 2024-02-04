const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8000
const msh = mongoose.Schema;
const app = new express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/evisa',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

const registerSchema = msh({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, 
      },
      password: {
        type: String,
        required: true,
      }
})

const applySchema = msh({
    name:{
        type:String,
        // required:true,
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        trim: true,
        lowercase: true, 
      },

    aadhaar:{
        type:Number,
        // required:true,
        unique:true,
    },
    father_name:{
        type:String,
        // required:true,
    },
    mother_name:{
        type:String,
        // required:true,
    },
    pincode:{
        type:Number,
        // required:true,
    },
    address:{
        type:String,
        // required:true,
    },
    
    applied_visa:{
        type:String,
        // required:true,
    },
    status:{
        type:String,
        default:"Processing"
    },
})

const acceptedSchema = msh({
    name:{
        type:String,
        // required:true,
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        trim: true,
        lowercase: true, 
      },

    aadhaar:{
        type:Number,
        // required:true,
        unique:true,
    },
    father_name:{
        type:String,
        // required:true,
    },
    mother_name:{
        type:String,
        // required:true,
    },
    pincode:{
        type:Number,
        // required:true,
    },
    address:{
        type:String,
        // required:true,
    },
    
    applied_visa:{
        type:String,
        // required:true,
    },
    status:{
        type:String,
        default:"Processing"
    },
})

const Register =  mongoose.model('Register',registerSchema);
const Apply = mongoose.model('Apply',applySchema);
const AcceptedVisa = mongoose.model('AcceptedVisa',acceptedSchema)
const RejectedVisa = mongoose.model('RejectedVisa',applySchema)

app.get('/',(req,res)=>{
    res.send('home')
})

app.post('/newuser',async(req,res)=>{
    
    try {
        console.log(req.body)
        const newRegister = new Register(req.body);
        await newRegister.save();
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
    
})
app.post('/newvisa',async(req,res)=>{
    
    try {
        console.log(req.body)
        const newApply = new Apply(req.body);
        await newApply.save();
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.get('/appiledusers',async(req,res)=>{
    res.send(await Apply.find())
})

app.get('/check',async(req,res)=>{
    res.send(await Apply.find(req.body))
})

app.post('/accepted',async(req,res)=>{
    try {
        console.log(req.body)
        const newAcceptedVisa = new AcceptedVisa(req.body);
        await newAcceptedVisa.save();
        await Apply.deleteOne({_id:req.body._id})
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.post('/rejected',async(req,res)=>{
    try {
        console.log(req.body)
        const newRejectedVisa = new RejectedVisa(req.body);
        await newRejectedVisa.save();
        await Apply.deleteOne({_id:req.body._id})
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})



app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})
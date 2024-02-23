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
      },
      role:{
        type: String,
        required:true,
        default:"user"
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
        res.send("1");
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
        res.send(newApply._id)
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.get('/appiledusers',async(req,res)=>{
    res.send(await Apply.find())
})

app.post('/login',async(req,res)=>{
    var result = await Register.findOne({email:req.body.un,password:req.body.pwd})
    if(result==null)
    {
        res.send("0");
        return
    }
    console.log(result)
    res.send('1')
})

app.post('/accepted',async(req,res)=>{
    try {
        console.log(req.body)
        req.body.status = "Accepted"
        const newAcceptedVisa = new AcceptedVisa(req.body);
        var result = await newAcceptedVisa.save();
        await Apply.deleteOne({_id:req.body._id})
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.post('/search',async(req,res)=>{
    console.log(req.body.id)
    var result = await Apply.findOne({_id:req.body.id})
    if(result==null)
    {
        result = await AcceptedVisa.findOne({_id:req.body.id})
    }
    if(result==null)
    {
        result = await RejectedVisa.findOne({_id:req.body.id})
    }
    if(result==null)
    {
        res.send("Check token number and try again...")
        return
    }
    console.log(result.status)
    res.send(result.status)
})

app.post('/rejected',async(req,res)=>{
    try {
        console.log(req.body)
        req.body.status = "Rejected"
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
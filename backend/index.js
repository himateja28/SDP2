const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8000
const msh = mongoose.Schema;
var nodemailer = require('nodemailer');
const app = new express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/evisa',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

const registerSchema = msh({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
      },
      password:{
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
    gender:{
        type:String,
    },
    age:{
        type:Number,
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
    applied_country :{
        type:String
    },
    status:{
        type:String,
        default:"Processing"
    },
    file:{
        type:String,
        required : true
    },
    // applied_by:{
    //     type:String,
    //     required:true
    // },
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
    gender:{
        type:String,
    },
    age:{
        type:Number,
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
    applied_country:{
        type:String,
    },
    status:{
        type:String,
        default:"Processing"
    },
    file:{
        type:String,
        required : true
    },
    // applied_by:{
    //     type:String,
    //     required:true
    // }
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
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tempararymail28@gmail.com',
            pass: 'tmgvgdrvkiczrtga'
        }
        });

        var mailOptions = {
        from: 'tempararymail28@gmail.com',
        to: req.body.email,
        subject: 'Welcome to Online E-visa Services',
        text: 'welcome to our services we hope that you may use our services !'
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
    
})

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post('/newvisa',upload.single('avatar'), async (req,res)=>{
    
    try {
        console.log(req.file)
        const visa = req.body
        visa.file = req.file.filename
        console.log(visa)
        const newApply = new Apply(visa);
        await newApply.save();
        res.send(newApply._id)
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

app.get('/acceptedvisa',async(req,res)=>{
    var result =  await AcceptedVisa.find()
    res.send(result)
})

app.get('/appiledusers',async(req,res)=>{
    res.send(await Apply.find())
})

app.post('/login',async(req,res)=>{
    var result = await Register.findOne({email:req.body.un,password:req.body.pwd})
    console.log(result)
    if(result==null)
    {
        res.send("0");
        return
    }
    console.log(result)
    if(result.role =="user")
    {
    res.send('1')
    }
    if(result.role =="admin"||result.role=="hr")
    {
    res.send('2')
    }
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
    res.send(result)
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
const mongoose=require("mongoose");
const validator = require('validator');
mongoose.connect('mongodb://pr16866:8529745331@cluster0-shard-00-00.bkcf8.mongodb.net:27017,cluster0-shard-00-01.bkcf8.mongodb.net:27017,cluster0-shard-00-02.bkcf8.mongodb.net:27017/food-ordering-website-data?ssl=true&replicaSet=atlas-grxf4x-shard-0&authSource=admin&retryWrites=true&w=majority', {useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connected")).catch((err)=>console.log(err));

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
     
    },
    number:{
        type:Number,
        required:true,
        unique:true,
        maxLength:10,
        minLength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is not valid");
            }
        }   
    },
    password:{
        type:String,
        required:true,
    },
    cnfpassword:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        default:Date(Date.now()).toString()
    },
});
const user_data=mongoose.model("user_data",schema);
module.exports=user_data;

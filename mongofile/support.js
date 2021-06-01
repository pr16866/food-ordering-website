const express=require("express");
const router=new express.Router();
const user_data=require("./connection");
router.use(express.urlencoded());

// home page

router.get("/home",(req,res)=>{

    res.status(200).render("home",{title:"piyush is best",message:"our pug templet engine is set"}); 
});

// registter part

router.get("/register",(req,res)=>{
    res.status(200).render("register",{title:"piyush is best",message:"our pug templet engine is set"}); 
});
router.post("/register",async(req,res)=>{
    try{
   console.log(req.body);
       const data= req.body;
       const var1=await user_data.insertMany([data]);
       res.status(200).render("login");
    }catch(er){
        res.status(404).send(er);
    }  
});

// login part

router.get("/",(req,res)=>{
    res.status(200).render("login"); 
});
router.post("/",async(req,res)=>{
    try{
     const email=req.body.email;
    
     const password=req.body.password;
  const edb= await user_data.findOne({email});
  
  if(email==edb.email && password==edb.password){
      res.status(200).render("home");
  }
  else{
    res.status(402).send("<h1>Your Email Id Or Password Is Not Correct</h1>"); 
  }
    }catch(er){
        console.log(er);
        res.status(404).send(er);
    }
});

// menu part

router.get("/menu",(req,res)=>{
    res.status(200).render("menu",{title:"piyush is best",message:"our pug templet engine is set"}); 
});
module.exports=router;
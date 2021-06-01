const express=require("express");
const path=require("path");
const app=express();

const routter=require("./mongofile/support");
// const user_data=require("./mongofile/connection")

const port=process.env.PORT || 80;

const pug_path=path.join(__dirname,"./pug");
const img_path=path.join(__dirname,"./img");
const css_path=path.join(__dirname,"./css");



app.set("view engine","pug");
app.set("views",pug_path);

app.use(routter);
app.use(express.static(img_path));
app.use(express.static(css_path));




app.listen(port,()=>{

    console.log(`your server is listen at port ${port}`);
})
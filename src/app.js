const express= require("express");
const app = express();
const path=require("path");
const hbs = require("hbs");
//const fetch =require('node-fetch') ;


require("./db/conn");
const Contacts = require("./models/registers");
const bodyParser = require("body-parser");


const port= process.env.PORT || 3000;


const static_path= path.join(__dirname, "../public");
const templates_path= path.join(__dirname, "../templates/views");
const partials_path= path.join(__dirname, "../templates/partials");

//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res)=>{
    res.render("index");
    console.log('yay');
    //res.redirect('/register')
});

// app.get('/registers', function(req,res){
//     res.render('registers',{});
// });
// async function getPosts(){
//     const myPosts= await fetch("localhost:3000/registers");
// const response = await myPosts.json();
// console.log(response); 
// for(let i=0; i<response.length;i++){
//     const post=new Post({
//         firstname:response[i]['firstname'],
//         surname:response[i]['surname'],
//         email:response[i]['email'],
//         phone_no:response[i]['phone_no'],
//         address:response[i]['address'],
//     })
// }
// }
// getPosts();

app.post("/registers",async(req,res)=>{
  try{
    console.log('noyay');

    const contacted = new Contacts({
        firstname: req.body.firstname,
        surname :req.body.surname,
        email:req.body.email,
        phone_no:req.body.phone_no,
        address:req.body.address
    });
    console.log('noyay');
   console.log(req.body)
 const Contacts = await contacted.save();
 res.status(201).render("index");
 //res.redirect('/registers');
  }catch(error){
    res.status(400).send(error);
  }
});
app.listen(port,()=>{
    console.log(`server is runnint on port ${port}`);
})
const connection = require ("./model/dbconnect_model");
const express = require ("express");
const path=require("path");
const Handlebars= require('handlebars');
const expresshandlebars= require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const getServices=require("./controllers/getServices");
const postServices=require("./controllers/postServices");


const application= express();

/*application.engine("hbs",expresshandlebars({handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: "hbs",
    defaultlayout : "mainlayout",
    layoutsDir: __dirname + "/views/layouts/"

}));
application.set("view engine","hbs")

/* application.get("/",(req,res)=>{
    res.render("index",{})
}); */ 



//application.set('views',path.join(__dirname,"/views/"));
application.get("/",getServices);
application.post("/",postServices);

application.listen("3000",()=> console.log("Listening to client requests at port 3000"));

const connection = require ("./model/dbconnect_model");
const express = require ("express");
const path=require("path");
const Handlebars= require('handlebars');
const expresshandlebars= require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const getUserDetails=require("./controllers/getUserDetails");
const AuthUserDetails=require("./controllers/AuthUserDetails");
const bodyParser = require('body-parser');
const querystring = require('querystring');
const { Router } = require("express");
const router = require("./controllers/getUserDetails");
const router2 = require("./controllers/AuthUserDetails");
const mongoose= require("mongoose");
const { isNull } = require("util");
const Loginmodel= mongoose.model("Login");



const application= express();

application.use(express.json());
application.use(bodyParser.urlencoded({ extended: false }));
application.use("/getUsers",getUserDetails);
application.get("/Username/:uname/Password/:pwd",async function(req, res) {
    
        var uname = req.params.uname;
        var pwd = req.params.pwd;

        Loginmodel.find({Username:uname,Password:pwd},{Status:1, Username:1,_id:0}, function(err,doc){

            if(!err)
            {
               
                
                    console.log("User Validation Successfull");
                    console.log(doc);
                    res.send(doc);
                                      
               
            }
    
    
            else
            {
                res.send("User Not Found");
            }
        })
    });

application.listen("2020",()=> console.log("Listening to client requests at port 2020"));

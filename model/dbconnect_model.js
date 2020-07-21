const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://farhatajshaik:T%40j786786@cluster1-djmve.mongodb.net/ServiceCatalog?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true},(error)=>{
if (!error)
    {
    console.log("Connected to Mongo DB");
    }    
else
    {
    console.log("DB Connection Failed");   
    }
});
const loginstats= require("./Login_model.js");
const express=require("express");
const mongoose= require("mongoose");
const router=express.Router();
const covidcasesmodel= mongoose.model("Services")

router.post("/add",(req,res)=>{
    
    var serviceadd= new covidcasesmodel();
    serviceadd.Application= req.body.Application;
    serviceadd.SGroup=req.body.SGroup;
    serviceadd.Service=req.body.Service;
    serviceadd.Operation=req.body.Operation;
    serviceadd.Version=req.body.Version;
    serviceadd.Backend=req.body.Backend;
    serviceadd.protocol=req.body.protocol;

    serviceadd.save((err,doc)=>{
        if(!err)
        {
           //res.render("list",{data : docs})
           console.log("Entry Added Successfully");
           
        }

        else
        {
            console.error(err);
        }

    });

            
       
    
    
})
module.exports=router;
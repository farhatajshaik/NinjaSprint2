const express=require("express");
const mongoose= require("mongoose");
const router=express.Router();
const covidcasesmodel= mongoose.model("Services")

router.get("/",(req,res)=>{
    covidcasesmodel.find((err,docs)=>{

        
        if(!err)
        {
           //res.render("list",{data : docs})
           console.log(docs);
           res.send(docs);
        }

        else
        {
            console.error(err);
        }
    });
    
})
module.exports=router;
const mongoose = require ("mongoose");
var ServicesSchema = new mongoose.Schema({
    Application  : {type : String,required : "Required"},
    SGroup: {type : String},
    Service: {type : String},
    Operation:  {type : String},
    Version:    {type : String},
    Backend: {type : String},
    protocol:    {type : String}
});
mongoose.model("Services",ServicesSchema,"Services")
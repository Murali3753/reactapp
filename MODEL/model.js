const mongoose = require("mongoose");

//create a schema
const productSchema = mongoose.Schema({
  
    name:{
        type:String, require:true
      },
      cost:{
        type :String,require:true
      },
      text:{
        type:String ,require:true
      },
      image:{
        type:String ,require:true
      }
    });

//expoet as module

module.exports= mongoose.model('product',productSchema);
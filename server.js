const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); //ODM-user can define the schema for the documents in a particular collection
const PORT = 8080;
const productRoutes = require('../Restapi/Route/route');

//Create an instance of express
const app = express();

//Connect with MongoDB DB - 
mongoose.connect("mongodb://localhost:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }).then(() => {
    console.log("Connection Success..!");
  }).catch(() => {
    console.log("Connection Unsuccessful..!");
  });

  app.get('/',(req,res)=>{
    res.send("This is react api")
  })

  app.use(bodyParser.json()); 
  app.use('/api', productRoutes);

  

//Start Server
app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// setup the database connection and configration
mongoose.Promise= global.Promise;
mongoose.connect(config.mongoURI, 
  {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
  });



app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server started on port ${config.port}`);
});
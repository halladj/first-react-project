import mongoose from "mongoose";
import crypto from "crypto";


const UserSchema=mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name id Required"
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email eddress"],
    required: "Email is required"
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  hashed_password: {
    type: String,
    required: "Password is Required"
  },
  salt: String
});

UserSchema
  .virtual("password")
  .set(function (password) {
    this._password= password;
    this.salt= this.makeSalt();
    this.hashed_password= this.encryptPassword(password);
    console.log(this.hashed_password);
  })
  .get(function () {
    return this._password;  
  });

UserSchema.methods= {
  authenticate: function(plainText){
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password){
    if (!password) return "error";
    try {
      return crypto
      .createHmac("sha1", this.salt)
      .update(password)
      .digest("hex");
    } catch (err) {
      return "error";
    }  
  },
  makeSalt: function (){
    return Math.round((new Date().valueOf() * Math.random())) + ""
  }
}

UserSchema.path('hashed_password').validate(function(v){
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "password must be at least 6 characters");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "password is required");
  }
});

export default mongoose.model("User", UserSchema);
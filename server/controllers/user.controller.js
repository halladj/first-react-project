import User from "./../models/user.model";
import extend from "lodash/extend";
import errorHandler from "./error.controller.js";
import formidable from "formidable";
import fs from "fs";
import profileImage from "./../../client/assets/images/profile-picture.jpg";

//................................................................
//the classic index function to list all the docs in the collection
const index = async (req, res) => {
  try {
    const users = await User.find({}).select("name email updated created");
    res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

//..........................................................
//save one doc to the collection
const store = async (req, res) => {
  let user = new User(req.body);
  try {
    await user.save();
    return res.status(201).json({
      message: user,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

//..........................................................
//fetch one the doc the id and hook it the request object
const findUserById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        error: "User Not Found",
      });
    }
    req.profile = user;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could Not Retrive The Document",
    });
  }
};

//.................................................................
//fetch a specific doc by ID
const show = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json(req.profile);
};
//.................................................................
//updating a doc by id
const update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be unloaded",
      });
    }
    let user = req.profile;
    user = extend(user, fields);
    user.updated = Date.now();
    if (files.photo) {
      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }

    try {
      await user.save();
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  });
};
//........................................................................
//delete a document by ID
const destroy = async (req, res) => {
  try {
    let user = req.profile;
    let deletedUser = await User.deleteOne(user);
    deletedUser.salt = undefined;
    deletedUser.hashed_password = undefined;
    res.json(deletedUser);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
//........................................................................
//this controller fetchs the user profile picturefrom the data base
const photo= (req, res, next) => {
  if(req.profile.photo.data){
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
  next();
}
//........................................................................
//here is the controller for the default picture
const defaultImage= (req, res) => {
  return res.sendFile(process.cwd()+profileImage);
}

export default { index, store, show, update, destroy, findUserById, photo, defaultImage};

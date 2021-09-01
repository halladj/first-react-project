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
     id == "follow" ? id= req.body.userId : id =id
    let user = await User.findById(id).populate('following', '_id name')
    .populate('followers', '_id name')
    .exec()
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
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
const photo = (req, res, next) => {
  if (req.profile.photo.data) {
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
  next();
};
//........................................................................
//here is the controller for the default picture
const defaultImage = (req, res) => {
  return res.sendFile(process.cwd() + profileImage);
};
//........................................................................
//update the following array of the guy who follows the req.body.followId
const addFollowing = async (req, res, next) => {
  try{
    await User.findByIdAndUpdate(req.body.userId, {$push: {following: req.body.followId}}) 
    next()
  }catch(err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const addFollower = async (req, res) => {
  try{
    let result = await User.findByIdAndUpdate(req.body.followId, {$push: {followers: req.body.userId}}, {new: true})
                            .populate('following', '_id name')
                            .populate('followers', '_id name')
                            .exec()
      result.hashed_password = undefined
      result.salt = undefined
      res.json(result)
    }catch(err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }  
}

const removeFollowing = async (req, res, next) => {
  try{
    await User.findByIdAndUpdate(req.body.userId, {$pull: {following: req.body.unfollowId}}) 
    next()
  }catch(err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
const removeFollower = async (req, res) => {
  try{
    let result = await User.findByIdAndUpdate(req.body.unfollowId, {$pull: {followers: req.body.userId}}, {new: true})
                            .populate('following', '_id name')
                            .populate('followers', '_id name')
                            .exec() 
    result.hashed_password = undefined
    result.salt = undefined
    res.json(result)
  }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
  }
}


export default {
  index,
  store,
  show,
  update,
  destroy,
  findUserById,
  photo,
  defaultImage,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
};

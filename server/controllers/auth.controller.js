import User from "./../models/user.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "./../../config/config";

const signin = async (req, res) => {
  try {
    //here we assusme that the email is the unique id for the user
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status("401").json({ error: "user not found" });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({ error: "email and password dont match" });
    }

    const token = jwt.sign({ _id: user._id }, config.jwtSecret);

    res.cookie("t", token, { expire: new Date() + 9999 });
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status("401").json({ error: "could not sign in" });
  }
};
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed our",
  });
};
const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: "auth",
  algorithms: ["HS256"],
});
//give authorization to the user to only delete and update his
//own information and protect others
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "User is not authorized",
    });
  }
  next();
};

//you have to set the Authorization header in the request to be able to access
//protected <<authorizaed>> routes

export default { signin, signout, requireSignin, hasAuthorization };

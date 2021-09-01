import { Router } from "express";
import userController from "./../controllers/user.controller";
import authController from "./../controllers/auth.controller";

const router = Router();

//this part will handel the index and store RESTful acts
router.route("/api/users").get(userController.index).post(userController.store);

//this part will handel the show, update and destroy RESTful acts
//authentication and authorization check before deleteing and updating docs
router
  .route("/api/users/:userId")
  .get(authController.requireSignin, userController.show)
  .put(
    authController.requireSignin,
    authController.hasAuthorization,
    userController.update
  )
  .delete(
    authController.requireSignin,
    authController.hasAuthorization,
    userController.destroy
  );

//here goes the photo controller to
//fetch the user profile picture
//if found otherwise fetch the default one
router
  .route("/api/users/photo/:userId")
  .get(userController.photo, userController.defaultImage);
router.route("api/users/defaultPhoto").get(userController.defaultImage);

//these routes are for endpoints for the following and followers
//API's
router.route('/api/users/follow')
    .put(authController.requireSignin,
      userController.addFollowing,
      userController.addFollower);
router.route('/api/users/unfollow')
    .put(authController.requireSignin, userController.removeFollowing, userController.removeFollower);


//mounts the user instence under the name of profile with proper id
//on the request object << it's basicaly a middleware
//that is triggered with the :userId params is in use>>
router.param("userId", userController.findUserById);

//defualt export for ya
export default router;

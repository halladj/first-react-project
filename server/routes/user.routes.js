import { Router } from "express";
import userController from "./../controllers/user.controller";
import authController from "./../controllers/auth.controller";

const router= Router();

//this part will handel the index and store RESTful acts
router.route("/api/users")
  .get(userController.index)
  .post(userController.store);

//this part will handel the show, update and destroy RESTful acts
//authentication and authorization check before deleteing and updating docs 
router.route("/api/users/:userId")
  .get(authController.requireSignin, userController.show)
  .put(authController.requireSignin, authController.hasAuthorization
    , userController.update)
  .delete(authController.requireSignin, authController.hasAuthorization
    , userController.destroy);


//mounts the user instence under the name of profile with proper id
//on the request object << it's basicaly a middleware 
//that is triggered with the :userId params is in use>>
router.param("userId", userController.findUserById);


//defualt export for ya
export default router;
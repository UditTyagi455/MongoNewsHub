import { Router } from "express";
import { registerUser,loginUser, logoutUser } from "../controllers/user.controllers.js";
import { createUser, uploadAvatar } from "../controllers/aboutuser.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/user-create").post(createUser)
router.route("/upload-image").post(upload.single("file"),uploadAvatar)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser);

export default router;
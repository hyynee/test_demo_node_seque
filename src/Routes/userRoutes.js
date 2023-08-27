import  express  from "express";
import { findUser, getUser } from "../Controller/userController.js";
const userRoutes = express.Router();

userRoutes.get("/get-user",getUser)
userRoutes.get("/find-user",findUser)

export default userRoutes;
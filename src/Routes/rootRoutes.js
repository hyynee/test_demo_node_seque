import express  from "express";
import foodRoutes from "./foodRoutes.js";
import userRoutes from "./userRoutes.js";
// quản lý tên đối tượng endpoint
const rootRoutes = express.Router();

// quản lý đối tượng food
rootRoutes.use("/food",foodRoutes)
// quản lý đối tượng user
rootRoutes.use("/user",userRoutes)

export default rootRoutes
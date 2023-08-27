import express  from "express";
import { findFood, getFood } from "../Controller/foodController.js";
const foodRoutes = express.Router();
// /food/get-food, getFood


// Nơi định nghĩa API và quản lý chức năng của đối tượng
// GET, POST, PUT, DELETE
foodRoutes.get("/get-food",getFood)
foodRoutes.get("/find-food",findFood)
export default foodRoutes;
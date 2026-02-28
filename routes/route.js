import express from "express";
import { first, second, third } from "../controllers/controller.js";

const route = express.Router()
route.get("/first",first)
route.get("/second",second)
route.get("/third",third)
export default route
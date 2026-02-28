import express from "express";
import { Edit, first, GetAll, Register, second, third } from "../controllers/controller.js";

const route = express.Router()

route.get("/first",first)
route.get("/second",second)
route.get("/third",third)
route.post("/post",Register)
route.get("/",GetAll)
userRoute.put("/edit/:id",Edit)
export default route
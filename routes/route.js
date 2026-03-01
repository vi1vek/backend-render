import express from "express";
import multer from "multer";
import { Edit, first, GetAll, Register, second, third } from "../controllers/controller.js";
import {storage} from '../config/clodinary.js'

const upload = multer({storage})
const route = express.Router()

route.get("/first",first)
route.get("/second",second)
route.get("/third",third)
route.post("/post",upload.single("image"),Register)
route.get("/",GetAll)
route.put("/edit/:id",Edit)
export default route
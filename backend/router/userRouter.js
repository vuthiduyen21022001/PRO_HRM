import express from "express";
import {addUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/ThemNhanVien", addUser);
// userRouter.get("/LayDanhNhanVien", getEmployee);
// employeeRouter.delete("/XoaLuong/:id", deleteDepartment);
// employeeRouter.put("/CapNhapThongTinLuong/:id", editDepartment);

export default userRouter;

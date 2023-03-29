import express from "express";
import {addUser, deleteUser, editUser, getId} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/ThemNhanVien", addUser);
userRouter.get("/LayThongTinNguoiDung/:id", getId);
userRouter.delete("/XoaNguoiDung/:id", deleteUser);
userRouter.put("/CapNhapThongTinNguoiDung/:id", editUser);

export default userRouter;

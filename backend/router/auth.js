import express from "express";
import {
  deleteUser,
  getUser,
  logOut,
  loginUser,
  requestRefreshToken,
  userRegister,
} from "../controllers/authController.js";
import {addEmployee, getEmployee} from "../controllers/employeeController.js";
import middlewareController from "../controllers/middlewareController.js";
const route = express.Router();
route.post("/DangKy", userRegister);
route.post("/DangNhap", loginUser);
route.get("/LayDanhSachNguoiDung", middlewareController.verifyToken, getUser);
route.post("/addEmployee", addEmployee);
route.get("/listEmployee", getEmployee);
route.delete(
  "/XoaNguoiDung/:id",
  middlewareController.verifyTokenAndAdminAuth,
  deleteUser
);

//REFRESH TOKEN
route.post("/refresh", requestRefreshToken);
// //LOG OUT
route.post("/DangXuat", middlewareController.verifyToken, logOut);
export default route;

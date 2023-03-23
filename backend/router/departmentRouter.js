import express from "express";
import {
  addDepartment,
  deleteDepartment,
  editDepartment,
  getDepartment,
} from "../controllers/departmentController.js";
const departmentRoute = express.Router();

departmentRoute.post("/ThemPhongBan", addDepartment);
departmentRoute.get("/LayDanhSachPhongBan", getDepartment);
departmentRoute.delete("/XoaPhongBan/:id", deleteDepartment);
departmentRoute.put("/CapNhapThongTinPhongBan/:id", editDepartment);

export default departmentRoute;

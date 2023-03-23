import express from "express";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployee,
} from "../controllers/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.post("/ThemNhanVien", addEmployee);
employeeRouter.get("/LayDanhSachNhanVien", getEmployee);
employeeRouter.delete("/XoaNhanVien/:id", deleteEmployee);
employeeRouter.put("/CapNhapThongTinNhanVien/:id", editEmployee);

export default employeeRouter;

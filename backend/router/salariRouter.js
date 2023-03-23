import express from "express";
import {
  addDepartment,
  deleteDepartment,
  editDepartment,
  getDepartment,
} from "../controllers/salariController.js";

const salariRouter = express.Router();

salariRouter.post("/ThemLuong", addDepartment);
salariRouter.get("/LayDanhSachLuong", getDepartment);
salariRouter.delete("/XoaLuong/:id", deleteDepartment);
salariRouter.put("/CapNhapThongTinLuong/:id", editDepartment);

export default salariRouter;

import express from "express";

import {
  addPosition,
  deletePosition,
  editPosition,
  getPosition,
} from "../controllers/positionController.js";
const positionRouter = express.Router();

positionRouter.post("/ThemChucVu", addPosition);
positionRouter.get("/LayDanhSachChucVu", getPosition);
positionRouter.delete("/XoaChucVu/:id", deletePosition);
positionRouter.put("/CapNhapThongTinChucVu/:id", editPosition);

export default positionRouter;

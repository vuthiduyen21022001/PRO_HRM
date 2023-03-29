import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./router/auth.js";
import departmentRoute from "./router/departmentRouter.js";
import positionRouter from "./router/positionRouter.js";
import salariRouter from "./router/salariRouter.js";
import employeeRouter from "./router/employeeRouter.js";
import userRouter from "./router/userRouter.js";
const app = express();
dotenv.config();
// Khai báo một biến PORT, nếu không được thiết lập, sẽ sử dụng giá trị mặc định là 5000
const PORT = process.env.port || 5000;

// Khai báo biến URL để lưu đường dẫn đến cơ sở dữ liệu MongoDB
const URL =
  "mongodb+srv://vuduyen:6Ur0pky8enXUGs6t@cluster.35tioyh.mongodb.net/HRM?retryWrites=true&w=majority";

// Thiết lập middleware để xử lý dữ liệu POST được gửi đến từ client
app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}));

// Thiết lập middleware để cho phép các tài nguyên từ các máy chủ khác yêu cầu truy cập tài nguyên của server
app.use(cors());

// Xử lý request GET,POST,DELETE đến đường dẫn gốc của server
app.use("/api/QuanLyNguoiDung/", route);
app.use("/api/QuanLyNguoiDung/", userRouter);
app.use("/api/QuanLyPhongBan/", departmentRoute);
app.use("/api/QuanLyChucVu/", positionRouter);
app.use("/api/QuanLyLuong/", salariRouter);
app.use("/api/QuanLyNhanVien/", employeeRouter);

// Kết nối đến cơ sở dữ liệu MongoDB sử dụng thư viện mongoose
mongoose
  .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connection to DB");
    // Bắt đầu lắng nghe các kết nối tới server trên cổng PORT
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("error", err);
  });

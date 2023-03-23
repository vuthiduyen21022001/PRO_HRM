import {https} from "./configURL";

export const employeeService = {
  getAllEmployee: () => {
    return https.get("/QuanLyNhanVien/LayDanhSachNhanVien");
  },
  postEmployee: (value) => {
    return https.post("/QuanLyNhanVien/ThemNhanVien", value);
  },
  putEmployee: (id, value) => {
    return https.put(`/QuanLyNhanVien/CapNhapThongTinNhanVien/${id}`, value);
  },
  deleteEmployee: (id) => {
    return https.delete(`/QuanLyNhanVien/XoaNhanVien/${id}`);
  },
};

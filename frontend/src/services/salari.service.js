import {https} from "./configURL";

export const salaryService = {
  ListSalary: () => {
    return https.get("/QuanLyLuong/LayDanhSachLuong");
  },
  postSalary: (value) => {
    return https.post("/QuanLyLuong/ThemLuong", value);
  },
  updateSalary: (id, value) => {
    return https.put(`/QuanLyLuong/CapNhapThongTinLuong/${id}`, value);
  },
  deleteSalary: (id) => {
    return https.delete(`/QuanLyLuong/XoaLuong/${id}`);
  },
};

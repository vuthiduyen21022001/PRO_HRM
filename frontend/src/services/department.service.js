import {https} from "./configURL";

export const departmentService = {
  getdepartmentList: () => {
    return https.get("/QuanLyPhongBan/LayDanhSachPhongBan");
  },
  postDepartment: (value) => {
    return https.post("/QuanLyPhongBan/ThemPhongBan", value);
  },
  updateDepartment: (id, value) => {
    return https.put(`/QuanLyPhongBan/CapNhapThongTinPhongBan/${id}`, value);
  },
  deleteDepartment: (id) => {
    return https.delete(`/QuanLyPhongBan/XoaPhongBan/${id}`);
  },
};

import { https } from "./configURL";

export const userService = {
  getUserListId: (id) => {
    return https.get(`/QuanLyNguoiDung/LayThongTinNguoiDung/${id}`);
  },
  postUser: (value) => {
    return https.post("/QuanLyNguoiDung/ThemNhanVien", value);
  },
  postRegister: (value) => {
    return https.post("/QuanLyNguoiDung/DangKy", value);
  },
  postRegister: (value) => {
    return https.post("/QuanLyNguoiDung/DangKy", value);
  },
  loginUser: (value) => {
    return https.post("/QuanLyNguoiDung/DangNhap", value);
  },
  userList: (accessToken) => {
    return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateUser: (id, value) => {
    return https.put(`/QuanLyNguoiDung/CapNhapThongTinNguoiDung/${id}`, value)
  },
  
};

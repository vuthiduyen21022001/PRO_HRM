import {https} from "./configURL";

export const positionService = {
  positionList: () => {
    return https.get("/QuanLyChucVu/LayDanhSachChucVu");
  },
  postPosition: (value) => {
    return https.post("/QuanLyChucVu/ThemChucVu", value);
  },
  updatePosition: (id, value) => {
    return https.put(`/QuanLyChucVu/CapNhapThongTinChucVu/${id}`, value);
  },
  deletePosition: (id) => {
    return https.delete(`/QuanLyChucVu/XoaChucVu/${id}`);
  },
};

import axios from "axios";
export const https = axios.create({
  baseURL: "http://localhost:5000/api",
  // localStorageServ.user.get() lấy dữ liệu từ local
});

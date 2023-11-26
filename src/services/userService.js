import { https } from "./config";
export const userService = {
    postLogin: (data) => {
        return https.post("/api/QuanLyNguoiDung/DangNhap", data);
    },
      postRegister: (data) => {
        return https.post("/api/QuanLyNguoiDung/DangKy", data);
    },
};

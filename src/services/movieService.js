import { https } from "./config";


export const movieService = {
  getBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07");
  },
  getListFilm: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11");
  },
  getDetailMovie: (data) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
  },
  getListMovie: (data) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP13&soTrang=${data}&soPhanTuTrenTrang=10`
    );
  },
  getMovieDaily: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhimTheoNgay");
  },
  // lấy thông tin hệ thống rạp
  getInforToTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10"
    );
  },
  // lấy thông tin theo cụm rạp
  getSystemBaseTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinCumRapTheoHeThong");
  },
  // lấy thông tin lịch chiếu theo hệ rạp
  getInforSystemTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  //lấy thông tin lịch chiếu phim của từng rạp
  getInforDetailTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuPhim");
  },
  // lấy thông tin từ rạp cho từng phim
  getDetailInforFilmAndTheater: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  //quản lí đặt vé
  // postTicketManagement: () => {
  //   return https.post("/api/QuanLyDatVe/TaoLichChieu");
  // },
  // danh sách phòng vé
  getListTheaterBookTickets: (lichChieu) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${lichChieu}`
    );
  },
  postTicketManagement: (inforBookTicket) => {
    return https.post("/api/QuanLyDatVe/DatVe", inforBookTicket);
  },
};

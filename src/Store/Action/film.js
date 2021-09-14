import { createAction } from ".";
import { request } from "../../Api";
import { actionTypes } from "./type";
import * as dayjs from "dayjs";
export const fetchFilm = (tuKhoa) => {
  return (dispatch) => {
    let listFilm;
    if (tuKhoa === "") {
      listFilm = request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?",
        method: "GET",
        params: {
          maNhom: "GP01",
        },
      });
    } else {
      listFilm = request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?",
        method: "GET",
        params: {
          maNhom: "GP01",
          tenPhim: tuKhoa,
        },
      });
    }
    listFilm
      .then((res) => {
        console.log("res", res.data);
        dispatch(createAction(actionTypes.SET_LIST_FILM, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchFilmById = (maPhim, callBack) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?",
      params: {
        MaPhim: maPhim,
      },
    })
      .then((res) => {
        const ngayKhoiChieu = dayjs(res.data.content.ngayKhoiChieu).format(
          "DD/MM/YYYY"
        );
        const date = dayjs(res.data.content.ngayKhoiChieu).format("YYYY-MM-DD");
        const object = {
          tenPhim: res.data.content.tenPhim,
          maPhim: res.data.content.maPhim,
          trailer: res.data.content.trailer,
          moTa: res.data.content.moTa,
          dangChieu: res.data.content.dangChieu,
          sapChieu: res.data.content.sapChieu,
          hot: res.data.content.hot,
          hinhAnh: res.data.content.hinhAnh,
          danhGia: res.data.content.danhGia,
          ngayKhoiChieu: date,
        };
        callBack(object, date);
        console.log("Film detail", object);
        dispatch(createAction(actionTypes.SET_FILM_DETAIL, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchFilmById2 = (maPhim) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?",
      params: {
        MaPhim: maPhim,
      },
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_FILM_DETAIL, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchFilmShowTime = (maPhim, callback, setImage, setTenPhim) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?",
      params: {
        MaPhim: maPhim,
      },
    })
      .then((res) => {
        const object = {
          maPhim: res.data.content.maPhim,
          ngayChieuGioChieu: res.data.content.ngayKhoiChieu,
        };
        callback(object);
        setImage(res.data.content.hinhAnh);
        setTenPhim(res.data.content.tenPhim);
        dispatch(createAction(actionTypes.SET_FILM_DETAIL, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addNewFilm = (data) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      body: data,
      method: "POST",
    })
      .then((res) => {
        console.log("Xử lý thành công", res);
        alert("Thêm phim thành công");
      })
      .catch((err) => {
        console.log(err.content);
      });
  };
};
export const editFilm = (data, callBack) => {
  request({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
    method: "POST",
    body: data,
  })
    .then((res) => {
      console.log("Edit film res", res);
      alert("Sửa phim thành công");
      callBack();
    })
    .catch((err) => {
      console.log("Edit film err", err);
    });
};
export const deleteFilm = (maPhim, callback) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?",
      method: "DELETE",
      params: {
        MaPhim: maPhim,
      },
    })
      .then((res) => {
        console.log("Delete film res", res);
        alert(`Phim (${maPhim}) được xóa thành công`);
        callback();
      })
      .catch((err) => {
        console.log("Delete film err", err);
      });
  };
};
export const fetchListCinema = (callback) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((res) => {
        // dispatch(createAction(actionTypes.SET_CINEMA, res.data.content));
        callback(res.data.content);
      })
      .catch((err) => {
        console.log("Fetch List Cinema", err);
      });
  };
};
export const fetchCumRapById = (id, callback) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?",
      method: "GET",
      params: {
        maHeThongRap: id,
      },
    })
      .then((res) => {
        console.log("Fetch List Cum rap res", res.data.content);
        callback(res.data.content);
      })
      .catch((err) => {
        console.log("Fetch List Cum rap err", err);
      });
  };
};
export const taoLichChieu = (data, callback) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      method: "POST",
      body: data,
    })
      .then((res) => {
        alert(res.data.content);
        callback();
      })
      .catch((err) => {
        console.log("tao lich chieu err", err);
      });
  };
};

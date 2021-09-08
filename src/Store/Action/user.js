import { request } from "../../Api";
import { createAction } from ".";
import { actionTypes } from "./type";
export const fetchListUser = (soTrang, totalPages) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?",
      method: "GET",
      params: {
        MaNhom: "GP01",
        soTrang: soTrang,
        soPhanTuTrenTrang: "20",
      },
    })
      .then((res) => {
        console.log(res);
        totalPages(res.data.content.totalPages);
        dispatch(
          createAction(actionTypes.SET_LIST_USER, res.data.content.items)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteUser = (taiKhoan) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?",
      method: "DELETE",
      params: {
        TaiKhoan: taiKhoan,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.content);
      });
  };
};
export const searchPagination = (tuKhoa, soTrang, setTotalPages) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01",
      method: "GET",
      params: {
        tuKhoa: tuKhoa,
        soTrang: soTrang,
        soPhanTuTrenTrang: 10,
      },
    })
      .then((res) => {
        console.log("searchyyy", res.data.content.items);
        setTotalPages(res.data.content.totalPages);
        dispatch(
          createAction(actionTypes.SET_LIST_USER, res.data.content.items)
        );
      })
      .catch((err) => {
        console.log("err.response", err.response);
      });
  };
};
export const fetchMaLoaiNguoiDUng = () => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
      method: "GET",
    })
      .then((res) => {
        console.log("RES", res.data.content);
        dispatch(
          createAction(actionTypes.SET_MALOAINGUOIDUNG, res.data.content)
        );
      })
      .catch((err) => {
        console.log("err.response", err.response);
      });
  };
};
export const addUser = (data, callBack) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log("RES", res);
        alert("Thêm thành công");
        callBack();
      })
      .catch((err) => {
        alert(err.response.data.content);
      });
  };
};
export const editUser = (data, callBack) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log("RES", res);
        alert("Sửa thành công");
        callBack();
      })
      .catch((err) => {
        alert(err.response.data.content);
      });
  };
};
export const fetchUser = (taiKhoan, setUser, nguoiDung) => {
  return () => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayThongTinNguoiDung?",
      method: "POST",
      params: {
        taiKhoan: taiKhoan,
      },
    })
      .then((res) => {
        setUser(res.data.content);
        nguoiDung(res.data.content);
        console.log("userrrrrrrrrrrr", res.data.content);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
};

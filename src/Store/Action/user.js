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

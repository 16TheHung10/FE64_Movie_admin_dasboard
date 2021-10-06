import { useDispatch } from "react-redux";
import { createAction } from ".";
import { request } from "../../Api";
import { actionTypes } from "./type";

export const AuthAdmin = (data, callback) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      body: data,
      method: "POST",
    })
      .then((res) => {
        if (res.data.content.maLoaiNguoiDung === "QuanTri") {
          dispatch(createAction(actionTypes.SET_ME, res.data.content));
          localStorage.setItem("user", res.data.content.accessToken);
          localStorage.setItem("taiKhoan", res.data.content.taiKhoan);
          callback();
        } else {
          alert("Bạn không có quyền đăng nhập vào trang này !!");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const TokkenLogin = (taiKhoan) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayThongTinNguoiDung?",
      method: "POST",
      params: {
        taiKhoan: taiKhoan,
      },
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_ME, res.data.content));
      })
      .catch((err) => {
        console.log("Tokken Fail", err);
      });
  };
};

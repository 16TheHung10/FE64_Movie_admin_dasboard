import { createAction } from ".";
import { request } from "../../Api";
import { actionTypes } from "./type";
export const fetchFilm = (dispatch) => {
  request({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim",
    method: "GET",
    params: {
      maNhom: "GP01",
    },
  })
    .then((res) => {
      console.log("res", res.data);
      dispatch(createAction(actionTypes.SET_LIST_FILM, res.data.content));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const HandleEditFilm = (maPhim, callBack) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?",
      params: {
        MaPhim: maPhim,
      },
    })
      .then((res) => {
        const object = {
          tenPhim: res.data.content.tenPhim,
          maPhim: res.data.content.maPhim,
        };
        console.log("Film detail", res.data.content);
        callBack(object);
        dispatch(createAction(actionTypes.SET_FILM_DETAIL, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

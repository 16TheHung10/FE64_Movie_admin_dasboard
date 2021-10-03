import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../HOC/Layout";
import { editFilm, fetchFilmById } from "../../../Store/Action/film";
import { useStyles } from "./style";
import { useFormik } from "formik";
import { useCallback } from "react";
import * as yup from "yup";
import dayjs from "dayjs";

let validationSchema = yup.object().shape({
  tenPhim: yup.string().required("Tên phim không được để trống"),
  danhGia: yup.string().required("Đánh giá phim không được để trống"),
  trailer: yup.string().required("Trailer không được để trống"),
  moTa: yup.string().required("Mô tả phim không được để trống"),
});

const FilmEdit = (props) => {
  const dispatch = useDispatch();
  const [hinhAnh, setHinhAnh] = useState("");
  const classes = useStyles();
  const goToListFilm = () => {
    props.history.push("/admin/film");
  };
  const setAllfieldTouched = () => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  };
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      maPhim: "",
      trailer: "",
      moTa: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      hinhAnh: {},
      danhGia: "",
      ngayKhoiChieu: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        if (key === "ngayKhoiChieu") {
          const date = dayjs(values[key]).format("DD/MM/YYYY");
          formData.append(key, date);
        } else {
          formData.append(key, values[key]);
        }
      }
      dispatch(editFilm(formData, goToListFilm));
    },
  });

  const callBackFilmInfo = useCallback(
    (data, date) => {
      formik.setValues(data);
    },
    [formik]
  );
  useEffect(() => {
    const maPhim = props.match.params.id;
    dispatch(fetchFilmById(maPhim, callBackFilmInfo));
  }, [dispatch, props.match.params.id]);
  useEffect(() => {
    setAllfieldTouched();
  }, []);
  const handleChangeFile = (e) => {
    //lấy file ra từ e
    let file = e.target.files[0];
    formik.setFieldValue("hinhAnh", file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setHinhAnh(e.target.result);
    };
  };
  return (
    <Layout>
      <h1 className="text-center">Cập nhật phim</h1>
      <div className={classes.form}>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className={classes.formHeading}
        >
          {formik.touched.tenPhim && (
            <p style={{ textAlign: "left" }} className="text-danger">
              {formik.errors.tenPhim}
            </p>
          )}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
            className={classes.inputField}
            fullWidth
            label="Tên Phim"
            variant="outlined"
            name="tenPhim"
          />

          <TextField
            onChange={formik.handleChange}
            className={classes.inputField}
            value={formik.values.maPhim}
            fullWidth
            label="Mã Phim"
            variant="outlined"
            name="maPhim"
            disabled
          />

          {formik.touched.trailer && (
            <p style={{ textAlign: "left" }} className="text-danger">
              {formik.errors.trailer}
            </p>
          )}
          <TextField
            onChange={formik.handleChange}
            className={classes.inputField}
            value={formik.values.trailer}
            fullWidth
            label="Trailer"
            variant="outlined"
            name="trailer"
          />

          {formik.touched.moTa && (
            <p style={{ textAlign: "left" }} className="text-danger">
              {formik.errors.moTa}
            </p>
          )}
          <TextField
            onChange={formik.handleChange}
            className={classes.inputField}
            value={formik.values.moTa}
            fullWidth
            multiline={true}
            label="Mô tả"
            variant="outlined"
            name="moTa"
          />
          <TextField
            id="date"
            label="Ngày khởi chiếu"
            type="date"
            name="ngayKhoiChieu"
            onChange={formik.handleChange}
            value={formik.values.ngayKhoiChieu}
            className={classes.inputField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            label="Đang Chiếu"
            checked={formik.values.dangChieu}
            className={classes.inputField}
            control={<Switch onChange={formik.handleChange} name="dangChieu" />}
          />
          <FormControlLabel
            className={classes.inputField}
            checked={formik.values.sapChieu}
            label="Sắp Chiếu"
            control={<Switch onChange={formik.handleChange} name="sapChieu" />}
          />
          <FormControlLabel
            className={classes.inputField}
            checked={formik.values.hot}
            label="Hot"
            control={<Switch onChange={formik.handleChange} name="hot" />}
          />

          {formik.touched.danhGia && (
            <p style={{ textAlign: "left" }} className="text-danger">
              {formik.errors.danhGia}
            </p>
          )}
          <TextField
            onChange={formik.handleChange}
            className={classes.inputField}
            value={formik.values.danhGia}
            fullWidth
            type="number"
            label="Số sao"
            variant="outlined"
            name="danhGia"
          />

          <input
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            name="hinhAnh"
            type="file"
            accept="image/png,image/gif,image/jpeg,image/apng,image/avif,image/webp,image/svg+xml"
            onChange={handleChangeFile}
          />
          <label htmlFor="raised-button-file">
            Hình ảnh :
            <Button
              className="ml-4"
              variant="contained"
              color="secondary"
              component="span"
            >
              upLoad
            </Button>
          </label>
          {formik.values.hinhAnh === "" ? (
            ""
          ) : (
            <img
              style={{
                width: "380px",
                height: "200px",
                borderRadius: "7px",
                boxShadow: " rgb(0 0 0 / 90%) 0px 5px 15px",
                marginBottom: "30px",
              }}
              src={hinhAnh || formik.values.hinhAnh}
              alt={formik.values.tenPhim}
            />
          )}

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Layout>
  );
};

export default memo(FilmEdit);

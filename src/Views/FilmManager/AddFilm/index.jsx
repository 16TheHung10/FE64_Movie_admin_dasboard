import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../../HOC/Layout";
import { useStyles } from "./style";
import { useFormik } from "formik";
import { useCallback } from "react";
import { addNewFilm } from "../../../Store/Action/film";
import * as dayjs from "dayjs";
import * as yup from "yup";

let validationSchema = yup.object().shape({
  tenPhim: yup.string().required("Tên phim không được để trống"),
  maPhim: yup
    .string()
    .required("Mã phim không được để trống")
    .matches(/^[0-9]*$/g, "Mã phim chỉ được định dạng là số"),
  trailer: yup.string().required("Trailer không được để trống"),
  moTa: yup.string().required("Mô tả phim không được để trống"),
  danhGia: yup.string().required("Đánh giá không được để trống"),
});

const FilmEdit = (props) => {
  const dispatch = useDispatch();
  const [hinhAnh, setHinhAnh] = useState("");
  const [disabledDangChieu, setDisabledDangChieu] = useState(false);
  const [disabledSapChieu, setDisabledSapChieu] = useState(false);
  const date = new Date();
  const today = dayjs(date).format("YYYY-MM-DD");
  const classes = useStyles();
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
      hinhAnh: "",
      danhGia: "",
      ngayKhoiChieu: "2021-09-20",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      setAllfieldTouched();
      formik.setFieldValue("ngayKhoiChieu", today);
      let formData = new FormData();
      for (let key in values) {
        if (key === "ngayKhoiChieu") {
          const date = dayjs(values[key]).format("DD/MM/YYYY");
          formData.append(key, date);
        } else {
          formData.append(key, values[key]);
        }
      }
      dispatch(addNewFilm(formData));
    },
  });
  const setDisable = () => {
    if (formik.values.dangChieu) {
      setDisabledSapChieu(true);
    } else {
      setDisabledSapChieu(false);
    }
    if (formik.values.sapChieu) {
      setDisabledDangChieu(true);
    } else {
      setDisabledDangChieu(false);
    }
  };
  useEffect(() => {
    setDisable();
  }, [setDisable]);

  const handleChangeFile = (e) => {
    //lấy file ra từ e
    let file = e.target.files[0];
    formik.setFieldValue("hinhAnh", file);
    //Tạo đối tượng để đọc và chuyển file sang dạng url
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setHinhAnh(e.target.result);
    };
  };
  return (
    <Layout>
      <div className={classes.root}>
        <h1 className="text-center pt-3">THÊM PHIM</h1>
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

            {formik.touched.maPhim && (
              <p style={{ textAlign: "left" }} className="text-danger">
                {formik.errors.maPhim}
              </p>
            )}
            <TextField
              onChange={formik.handleChange}
              className={classes.inputField}
              value={formik.values.maPhim}
              fullWidth
              label="Mã Phim"
              variant="outlined"
              name="maPhim"
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
              control={
                <Switch
                  disabled={disabledDangChieu}
                  onChange={formik.handleChange}
                  name="dangChieu"
                />
              }
            />
            <FormControlLabel
              className={classes.inputField}
              checked={formik.values.sapChieu}
              label="Sắp Chiếu"
              control={
                <Switch
                  disabled={disabledSapChieu}
                  onChange={formik.handleChange}
                  name="sapChieu"
                />
              }
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
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              name=""
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
                src={hinhAnh}
                alt={formik.values.tenPhim}
              />
            )}
            <Button
              color="secondary"
              variant="contained"
              className={classes.btnSubmit}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default memo(FilmEdit);

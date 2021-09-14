import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../../HOC/Layout";
import { useStyles } from "./style";
import { useFormik } from "formik";
import { useCallback } from "react";
import { addNewFilm } from "../../../Store/Action/film";
import * as dayjs from "dayjs";
const FilmEdit = (props) => {
  const dispatch = useDispatch();
  const [hinhAnh, setHinhAnh] = useState("");
  const [disabledDangChieu, setDisabledDangChieu] = useState(false);
  const [disabledSapChieu, setDisabledSapChieu] = useState(false);
  const date = new Date();
  const today = dayjs(date).format("YYYY-MM-DD");
  const classes = useStyles();
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
    onSubmit: (values) => {
      formik.setFieldValue("ngayKhoiChieu", today);
      let formData = new FormData();
      for (let key in values) {
        if (key === "ngayKhoiChieu") {
          const date = dayjs(values[key]).format("DD/MM/YYYY");
          formData.append(key, date);
        } else {
          formData.append(key, values[key]);
        }
        console.log(key, formData.get(key));
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
  console.log("todayyyyyyyyyyyy", today);
  return (
    <Layout>
      <h1 className="text-center">THÊM PHIM</h1>
      <div className={classes.form}>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className={classes.formHeading}
        >
          <TextField
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
            className={classes.inputField}
            color="secondary"
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
          />
          <TextField
            onChange={formik.handleChange}
            className={classes.inputField}
            value={formik.values.trailer}
            fullWidth
            label="Trailer"
            variant="outlined"
            name="trailer"
          />
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
    </Layout>
  );
};

export default memo(FilmEdit);

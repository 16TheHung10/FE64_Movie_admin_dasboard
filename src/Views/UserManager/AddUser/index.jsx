import React, { useEffect, useState } from "react";
import Layout from "../../../HOC/Layout";
import { FormControl, InputLabel, TextField } from "@material-ui/core";
import { useStyles } from "./style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchMaLoaiNguoiDUng } from "../../../Store/Action/user";
import Button from "@material-ui/core/Button";
import * as yup from "yup";

let validationSchema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  hoTen: yup.string().required("Họ tên không được để trống"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
  email: yup
    .string()
    .required("email không được để trống")
    .email("Email không đúng định dạng"),
  soDt: yup
    .string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]*$/g, "Số điện thoại không đúng định dạng"),
  maLoaiNguoiDung: yup.string().required("Loại người dùng không được để trống"),
});

const AddUser = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [nguoiDung, setNguoiDung] = useState();
  const redirect = () => {
    props.history.push("/admin/quanlynguoidung");
  };
  const setAllfieldTouched = () => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setAllfieldTouched();
      dispatch(addUser(values, redirect));
    },
  });
  useEffect(() => {
    dispatch(fetchMaLoaiNguoiDUng());
  }, [dispatch]);
  const loaiNguoiDung = useSelector((state) => {
    return state.user.loaiNguoiDung;
  });
  const handleChangeLoaiNguoiDung = (e) => {
    setNguoiDung(e.target.value);
  };
  const setFieldValue = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };
  return (
    <Layout>
      <div className={classes.root}>
        <Typography className={classes.header} variant="h3" component="h1">
          THÊM NGƯỜI DÙNG
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container alignContent="center" className={classes.flex}>
            <Grid item md={6}>
              {formik.touched.taiKhoan && (
                <p
                  style={{ textAlign: "left", width: "90%", margin: "auto" }}
                  className="text-danger"
                >
                  {formik.errors.taiKhoan}
                </p>
              )}
              <TextField
                className={classes.inputField}
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                label="Tài khoản"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              {formik.touched.matKhau && (
                <p
                  style={{ textAlign: "left", width: "90%", margin: "auto" }}
                  className="text-danger"
                >
                  {formik.errors.matKhau}
                </p>
              )}
              <TextField
                className={classes.inputField}
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                label="Mật khẩu"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              {formik.touched.hoTen && (
                <p
                  style={{ textAlign: "left", width: "90%", margin: "auto" }}
                  className="text-danger"
                >
                  {formik.errors.hoTen}
                </p>
              )}
              <TextField
                className={classes.inputField}
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                label="Họ tên"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              {formik.touched.email && (
                <p
                  style={{ textAlign: "left", width: "90%", margin: "auto" }}
                  className="text-danger"
                >
                  {formik.errors.email}
                </p>
              )}
              <TextField
                className={classes.inputField}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              {formik.touched.soDt && (
                <p
                  style={{ textAlign: "left", width: "90%", margin: "auto" }}
                  className="text-danger"
                >
                  {formik.errors.soDt}
                </p>
              )}
              <TextField
                className={classes.inputField}
                name="soDt"
                value={formik.values.soDt}
                onChange={formik.handleChange}
                label="Số điện thoại"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <FormControl variant="outlined" className={classes.inputField}>
                {formik.touched.maLoaiNguoiDung && (
                  <p style={{ textAlign: "left" }} className="text-danger">
                    {formik.errors.maLoaiNguoiDung}
                  </p>
                )}
                <InputLabel>Loại người dùng</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Age"
                  name="maLoaiNguoiDung"
                  onChange={handleChangeLoaiNguoiDung}
                  value={nguoiDung}
                >
                  {loaiNguoiDung.map((item, i) => {
                    return (
                      <MenuItem
                        key={i}
                        value={item.tenLoai}
                        onClick={() => {
                          setFieldValue(item.maLoaiNguoiDung);
                        }}
                      >
                        {item.tenLoai}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Thêm người dùng
            </Button>
          </Grid>
        </form>
      </div>
    </Layout>
  );
};

export default AddUser;

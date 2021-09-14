import React, { useEffect, useState } from "react";
import Layout from "../../../HOC/Layout";
import {
  FormControl,
  Input,
  InputLabel,
  Paper,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchMaLoaiNguoiDUng } from "../../../Store/Action/user";
import Button from "@material-ui/core/Button";
const AddUser = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [nguoiDung, setNguoiDung] = useState();
  const redirect = () => {
    props.history.push("/admin/quanlynguoidung");
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
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

    console.log("jdlaks");
  };
  const setFieldValue = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };
  console.log("loaiNguoiDUng", formik.values);
  return (
    <Layout>
      <div className={classes.root}>
        <Typography className={classes.header} variant="h3" component="h1">
          THÊM NGƯỜI DÙNG
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container alignContent="center" className={classes.flex}>
            <Grid item md={6}>
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

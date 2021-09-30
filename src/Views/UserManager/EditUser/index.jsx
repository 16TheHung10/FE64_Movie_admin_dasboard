import { FormControl, InputLabel, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Layout from "../../../HOC/Layout";
import { editUser, fetchMaLoaiNguoiDUng } from "../../../Store/Action/user";
import { useStyles } from "./style";

const EditUser = (props) => {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const token = localStorage.getItem("user");
  const [nguoiDung, setNguoiDung] = useState();
  const loaiNguoiDung = useSelector((state) => {
    return state.user.loaiNguoiDung;
  });

  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${params.taiKhoan}`,
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
        },
      });
      const data = await res.data;
      formik.setValues(data.content[0]);
      console.log(data.content[0]);
    })();
  }, []);
  useEffect(() => {
    dispatch(fetchMaLoaiNguoiDUng());
  }, [dispatch]);

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
      maNhom: "GP09",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      dispatch(editUser({ ...values, maNhom: "GP09" }, redirect));
    },
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
          SỬA NGƯỜI DÙNG
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container alignContent="center" className={classes.flex}>
            <Grid item md={6}>
              <TextField
                disabled={true}
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
                  value={formik.values.maLoaiNguoiDung || ""}
                >
                  {loaiNguoiDung.map((item, i) => {
                    return (
                      <MenuItem
                        key={i}
                        value={item.maLoaiNguoiDung}
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
              Sửa người dùng
            </Button>
          </Grid>
        </form>
      </div>
    </Layout>
  );
};

export default EditUser;
// https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung

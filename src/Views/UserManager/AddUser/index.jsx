import React from "react";
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
const AddUser = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
    },
  });
  return (
    <Layout>
      <Paper className={classes.root}>
        <div className={classes.root}>
          <Typography className={classes.header} variant="h3" component="h1">
            THÊM NGƯỜI DÙNG
          </Typography>
          <form>
            <Grid container alignContent="center" className={classes.flex}>
              <Grid item md={6}>
                <TextField
                  className={classes.inputField}
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  className={classes.inputField}
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              {/* <Grid item>
                <TextField
                  className={classes.inputField}
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.inputField}
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.inputField}
                  name="taiKhoan"
                  value={formik.values.taiKhoan}
                  onChange={formik.handleChange}
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <FormControl variant="outlined" className={classes.inputField}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Paper>
    </Layout>
  );
};

export default AddUser;

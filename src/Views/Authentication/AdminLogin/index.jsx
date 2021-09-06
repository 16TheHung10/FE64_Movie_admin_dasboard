import { Container, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import useStyles from "../../../Component/Header/style";
import { AuthAdmin } from "../../../Store/Action/Authentication";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const AdminLogin = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const goToHome = () => {
    console.log("props", props);
    props.history.push("/admin");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthAdmin(formik.values, goToHome));
    console.log("sjdklf", formik.values);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} method="POST">
            <TextField
              variant="outlined"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              label="Tài Khoản"
              name="taiKhoan"
              autoFocus
            />
            <TextField
              variant="outlined"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              name="matKhau"
              label="Mật khẩu"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AdminLogin;

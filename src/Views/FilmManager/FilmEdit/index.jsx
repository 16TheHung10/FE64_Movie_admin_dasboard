import { Button, TextField } from "@material-ui/core";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../HOC/Layout";
import { HandleEditFilm } from "../../../Store/Action/film";
import { useStyles } from "./style";
import { useFormik } from "formik";
import { useCallback } from "react";
const FilmEdit = (props) => {
  const dispatch = useDispatch();
  // const filmDetail = useSelector((state) => {
  //   return state.film.FilmDetail;
  // });
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      maPhim: "",
    },
  });
  const callBackFilmInfo = (data) => {
    formik.setValues(data);
  };
  useEffect(() => {
    const maPhim = props.match.params.id;
    // dispatch(HandleEditFilm(maPhim));
    dispatch(HandleEditFilm(maPhim, callBackFilmInfo));
  }, [dispatch, props.match.params.id]);

  console.log("detail", formik.values);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("value", formik.values);
    },
    [formik.values]
  );
  return (
    <Layout>
      <h1 className="text-center">Cập nhật phim</h1>
      <div className={classes.form}>
        <form action="" onSubmit={handleSubmit}>
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
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Layout>
  );
};

export default memo(FilmEdit);

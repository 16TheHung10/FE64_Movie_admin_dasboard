import React, { memo, useCallback, useEffect, useState } from "react";
import Layout from "../../../HOC/Layout";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {
  fetchCumRapById,
  fetchFilmShowTime,
  fetchListCinema,
} from "../../../Store/Action/film";
import { useFormik } from "formik";
import dayjs from "dayjs";

const FilmShowtime = (props) => {
  const dispatch = useDispatch();

  const listFilm = useSelector((state) => {
    return state.film.ListFilm;
  });

  const [tenHeThongRap, setTenHeThongRap] = useState([]);
  const [tenCumRap, setTenCumRap] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [listCumRap, setCumRap] = useState([]);
  const [anhPhim, setAnhPhim] = useState({});
  const [ngayKhoiChieu, setNgayKhoiChieu] = useState();
  const classes = useStyles();
  const maPhim = props.match.params.id;
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      ngayChieuGioChieu: "",
      giaVe: "",
    },
  });
  const setValuesFomik = useCallback(
    (data) => {
      formik.setValues(data);
    },
    [formik]
  );
  const handleChangeHTRap = (event) => {
    setTenHeThongRap(event.target.value);
  };
  const handleChangeCumRap = (event) => {
    setTenCumRap(event.target.value);
  };
  const functionSetCinema = useCallback((data) => {
    setCinema(data);
  });
  const setStateCumRap = (data) => {
    setCumRap(data);
  };
  const fetchCumRap = (maCumRap) => {
    dispatch(fetchCumRapById(maCumRap, setStateCumRap));
  };
  useEffect(() => {
    console.log("listFilm", listFilm);
    dispatch(fetchFilmShowTime(maPhim, setValuesFomik, setAnhPhim));
    dispatch(fetchListCinema(functionSetCinema));
  }, [dispatch]);

  console.log("ngay khoi chieu ", formik.values.ngayChieuGioChieu);
  return (
    <Layout>
      <div className={classes.root}>
        <Typography className={classes.header} variant="h2" component="h1">
          TẠO LỊCH CHIẾU PHIM : {formik.values.tenPhim}
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img className={classes.image} src={anhPhim} />
            </Grid>
            <Grid item xs={9}>
              <Grid className={classes.fillSide}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Hệ thống rạp
                  </InputLabel>
                  <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={tenHeThongRap}
                    onChange={handleChangeHTRap}
                  >
                    {cinema.map((item) => (
                      <MenuItem
                        onClick={() => {
                          fetchCumRap(item.maHeThongRap);
                        }}
                        key={item.tenHeThongRap}
                        value={item.tenHeThongRap}
                      >
                        {item.tenHeThongRap}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Cụm rạp
                  </InputLabel>
                  <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={tenCumRap}
                    onChange={handleChangeCumRap}
                  >
                    {listCumRap.map((item) => (
                      <MenuItem
                        // onClick={() => {
                        //   fetchCumRap(item.maHeThongRap);
                        // }}
                        key={item.maCumRap}
                        value={item.tenCumRap}
                      >
                        {item.tenCumRap}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="date"
                  label="Ngày khởi chiếu"
                  type="datetime-local"
                  name="ngayChieuGioChieu"
                  value={formik.values.ngayChieuGioChieu}
                  className={classes.formControl}
                  onChange={formik.handleChange}
                  //   InputLabelProps={{
                  //     shrink: true,
                  //   }}
                />
                <TextField
                  label="Giá vé"
                  name="giaVe"
                  type="number"
                  value={formik.giaVe}
                  className={classes.formControl}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default memo(FilmShowtime);

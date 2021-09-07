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
  taoLichChieu,
} from "../../../Store/Action/film";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import dayjs from "dayjs";

const FilmShowtime = (props) => {
  const dispatch = useDispatch();

  const listFilm = useSelector((state) => {
    return state.film.ListFilm;
  });
  const [tenHeThongRap, setTenHeThongRap] = useState([]);
  const [tenCumRap, setTenCumRap] = useState([]);
  const [cinema, setCinema] = useState([]); //list Hệ thống rạp
  const [listCumRap, setCumRap] = useState([]); //List Cụm rạp
  const [tenPhim, setTenPhim] = useState([]);
  const [maRap, setMaRap] = useState("");
  const [anhPhim, setAnhPhim] = useState({});
  const classes = useStyles();
  const maPhim = props.match.params.id;
  const goToHome = () => {
    props.history.push("/admin/film");
  };
  const formik = useFormik({
    initialValues: {
      maPhim: "",
      ngayChieuGioChieu: "",
      giaVe: "",
      maRap: "",
    },
    onSubmit: (values) => {
      const date = dayjs(formik.values.ngayChieuGioChieu).format(
        "DD/MM/YYYY hh:mm:ss"
      );
      const payload = { ...values, ngayChieuGioChieu: date };
      dispatch(taoLichChieu(payload, goToHome));
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
    const fetchListRap = listCumRap.find(
      (item) => item.tenCumRap === event.target.value
    );
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
    dispatch(fetchFilmShowTime(maPhim, setValuesFomik, setAnhPhim, setTenPhim));
    dispatch(fetchListCinema(functionSetCinema));
  }, [dispatch]);

  return (
    <Layout>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <Typography className={classes.header} variant="h2" component="h1">
            TẠO LỊCH CHIẾU PHIM : {tenPhim}
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
                          onClick={() => {
                            formik.setFieldValue("maRap", item.maCumRap);
                          }}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    label="Giá vé"
                    name="giaVe"
                    type="number"
                    value={formik.values.giaVe}
                    className={classes.formControl}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                  Tạo lịch chiếu
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default memo(FilmShowtime);

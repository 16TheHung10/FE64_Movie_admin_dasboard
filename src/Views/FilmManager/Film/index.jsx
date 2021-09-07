import React, { Fragment, useCallback, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Layout from "../../../HOC/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteFilm, fetchFilm } from "../../../Store/Action/film";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { createAction } from "../../../Store/Action";
import { actionTypes } from "../../../Store/Action/type";
import {
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";
import AccountCircle from "@material-ui/icons/AccountCircle";
const Film = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tuKhoa, setTuKhoa] = useState("");
  useEffect(() => {
    dispatch(fetchFilm(""));
  }, [dispatch]);
  const listFilm = useSelector((state) => {
    return state.film.ListFilm;
  });

  const callBack = (maPhim) => {
    const index = listFilm.findIndex((item) => item.maPhim === maPhim);
    if (index !== -1) {
      const listFilmNew = [...listFilm];
      listFilmNew.splice(index, 1);
      console.log("new", listFilmNew);
      dispatch(createAction(actionTypes.DELETE_FILM, listFilmNew));
    }
  };
  const setIDLocalStorage = (maPhim) => {
    localStorage.setItem("maPhim", maPhim);
  };
  const columns = [
    { field: "id", headerName: "STT", width: 110 },
    {
      field: "maPhim",
      headerName: "Mã phim",
      width: 140,
      editable: true,
    },
    {
      field: "hinhAnh",
      headerName: "Hình ảnh",
      renderCell: (params) => {
        return (
          <Fragment>
            <img
              style={{ height: "100%", width: "100%" }}
              src={params.value}
              alt={listFilm.tenPhim}
            />
          </Fragment>
        );
      },
      width: 200,
      editable: true,
      sortable: false,
    },
    {
      field: "tenPhim",
      flex: 1,
      headerName: "Tên phim",
      width: 150,
      editable: true,
    },
    {
      field: "moTa",
      headerName: "Mô tả",
      multiline: true,
      width: 750,
      editable: true,
    },
    {
      field: "actions",
      flex: 1,
      headerName: "Hành động",
      renderCell: (params) => {
        return (
          <Fragment>
            <IconButton style={{ height: "45px" }} variant="contained">
              <NavLink to={`/admin/film/edit/${params.value}`}>
                <EditIcon />
              </NavLink>
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(deleteFilm(params.value, callBack(params.value)));
              }}
              variant="contained"
              color="primary"
            >
              <DeleteOutlineIcon />
            </IconButton>
            <IconButton style={{ height: "45px" }}>
              <NavLink
                onClick={() => setIDLocalStorage(params.value)}
                to={`/admin/film/showtime/${params.value}`}
              >
                <EventNoteIcon color="secondary" />
              </NavLink>
            </IconButton>
          </Fragment>
        );
      },
      sortable: false,
    },
  ];
  const rows = listFilm.map((item, index) => {
    return {
      id: index,
      maPhim: item.maPhim,
      tenPhim: item.tenPhim,
      moTa: item.moTa,
      hinhAnh: item.hinhAnh,
      actions: item.maPhim,
    };
  });
  console.log("row", rows);

  const changeSearch = useCallback(
    (e) => {
      setTuKhoa();
      dispatch(fetchFilm(e.target.value));
    },
    [setTuKhoa]
  );
  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <form>
          <FormControl className={classes.search}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Bạn cần tiềm kiếm gì ?
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              name="search"
              onChange={changeSearch}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton type="submit" style={{ padding: "0" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          pageSize={14}
          rowHeight={200}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Layout>
  );
};
export default Film;

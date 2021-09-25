import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Layout from "../../../HOC/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteFilm, fetchFilm } from "../../../Store/Action/film";
import { NavLink } from "react-router-dom";
import { createAction } from "../../../Store/Action";
import { actionTypes } from "../../../Store/Action/type";
import { IconButton, InputBase, Paper, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";
const Film = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tuKhoa, setTuKhoa] = useState();
  useEffect(() => {
    console.log("efect");
    dispatch(fetchFilm());
  }, [dispatch]);
  const listFilm = useSelector((state) => {
    return state.film.ListFilm;
  });

  const callBack = (maPhim) => {
    const index = listFilm.findIndex((item) => item.maPhim === maPhim);
    if (index !== -1) {
      const listFilmNew = [...listFilm];
      listFilmNew.splice(index, 1);
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
      width: 700,
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
  const handleChangeSearch = (e) => {
    setTuKhoa(e.target.value);
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    if (tuKhoa === "") {
      dispatch(fetchFilm());
    } else dispatch(fetchFilm(tuKhoa));
  };

  console.log("từ khóa: ", tuKhoa);
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.main}>
          <Typography
            variant="h2"
            component="h2"
            style={{
              color: "black",
              textTransform: "uppercase",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Quản lý phim
          </Typography>

          {/* Search */}
          <Paper
            component="form"
            onSubmit={searchSubmit}
            className={classes.searchRoot}
          >
            <InputBase
              onChange={handleChangeSearch}
              className={classes.input}
              placeholder="Tìm kiếm"
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

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
      </div>
    </Layout>
  );
};
export default Film;

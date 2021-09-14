import React, { useEffect, useState } from "react";
import Layout from "../../../HOC/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  fetchListUser,
  searchPagination,
} from "../../../Store/Action/user";
import {
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Pagination from "@material-ui/lab/Pagination";
import { Typography } from "antd";
import { createAction } from "../../../Store/Action";
import { actionTypes } from "../../../Store/Action/type";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
const ListUser = (props) => {
  const dispatch = useDispatch();
  const [soTrang, setSoTrang] = useState(1);
  const [tuKhoa, setTuKhoa] = useState(1);

  const [totalPages, setTotalPages] = useState(); //Số trang của pagination
  const classes = useStyles();
  const handleChange = (e, value) => {
    setSoTrang(parseInt(value));
    localStorage.setItem("page", value);
  };
  useEffect(() => {
    dispatch(fetchListUser(soTrang, setTotalPages));
  }, [soTrang, dispatch]);
  const listUser = useSelector((state) => {
    return state.user.listUsers;
  });
  const handleDelete = (taiKhoan) => {
    const index = listUser.findIndex((user) => user.taiKhoan === taiKhoan);
    const listUserNew = [...listUser];
    if (index !== -1) {
      listUserNew.splice(index, 1);
      alert("Xóa người dùng thành công");
      dispatch(createAction(actionTypes.SET_LIST_USER, listUserNew));
    } else return;

    console.log("List userrrrrrrrrrr", listUserNew);
    dispatch(deleteUser(taiKhoan));
  };
  const handleChangeSearch = (e) => {
    setTuKhoa(e.target.value);
  };
  const searSubmit = (e) => {
    e.preventDefault();
    console.log("đã submit");
    if (tuKhoa !== "") {
      dispatch(searchPagination(tuKhoa, soTrang, setTotalPages));
    } else {
      dispatch(fetchListUser(soTrang, setTotalPages));
    }
  };
  const handleEditUser = (taiKhoan) => {
    props.history.push(`/admin/quanlynguoidung/edit/${taiKhoan}`);
  };
  return (
    <Layout>
      <TableContainer component={Paper} className={classes.root}>
        <Typography
          variant="h1"
          component="h2"
          style={{
            color: "black",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "20px 0 40px 0",
          }}
        >
          Quản lý người dùng
        </Typography>

        <Paper
          component="form"
          onSubmit={searSubmit}
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

        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow className={classes.table}>
              <TableCell>STT</TableCell>
              <TableCell align="left">Tài khoản</TableCell>
              <TableCell align="left">Mật khẩu</TableCell>
              <TableCell align="left">Họ tên</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">SDT</TableCell>
              <TableCell align="left">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listUser.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{item.taiKhoan}</TableCell>
                <TableCell align="left">{item.matKhau}</TableCell>
                <TableCell align="left">{item.hoTen}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{item.soDt}</TableCell>
                <TableCell align="left">
                  <IconButton style={{ height: "45px" }} variant="contained">
                    <EditIcon
                      onClick={() => {
                        handleEditUser(item.taiKhoan);
                      }}
                    />
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      handleDelete(item.taiKhoan);
                    }}
                  >
                    <Link
                      className={classes.link}
                      to={"/admin/quanlynguoidung/edit"}
                    >
                      <DeleteOutlineIcon />
                    </Link>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className={classes.pagination}
        page={soTrang}
        count={totalPages - 1}
        onChange={handleChange}
        color="secondary"
      />
    </Layout>
  );
};

export default ListUser;

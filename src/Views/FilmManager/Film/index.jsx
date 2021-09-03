import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../HOC/Layout";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  withStyles,
} from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import { fetchFilm } from "../../../Store/Action/film";

const Film = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm);
  }, [dispatch]);

  const listFilm = useSelector((state) => {
    return state.film.ListFilm;
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const classes = useStyles();
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ width: "100px" }}>
                Mã Phim
              </StyledTableCell>
              <StyledTableCell align="center">Hình ảnh</StyledTableCell>
              <StyledTableCell style={{ width: "200px" }} align="center">
                Tên phim
              </StyledTableCell>
              <StyledTableCell style={{ width: "700px" }} align="center">
                Mô tả
              </StyledTableCell>
              <StyledTableCell style={{ width: "240px" }} align="center">
                Hành động
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listFilm.map((item) => (
              <StyledTableRow key={item.maPhim}>
                <StyledTableCell align="center">{item.maPhim}</StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  <img
                    src={item.hinhAnh}
                    style={{ width: "100px", height: "100%" }}
                    alt="anh phim"
                  />
                </StyledTableCell>
                <StyledTableCell align="center">{item.tenPhim}</StyledTableCell>
                <StyledTableCell align="center">{item.moTa}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    style={{ marginRight: "10px" }}
                    variant="contained"
                    className={classes.successColor}
                  >
                    <NavLink
                      className={classes.link}
                      to={`/admin/film/edit/${item.maPhim}`}
                    >
                      Sửa
                    </NavLink>
                  </Button>
                  <Button variant="contained" color="primary">
                    Xóa
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Film;

import "./App.css";
import Home from "./Views/Home/index";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./Views/PageNotFound";
import { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
import Film from "./Views/FilmManager/Film";
import FilmEdit from "./Views/FilmManager/FilmEdit/index";
import AddFilm from "./Views/FilmManager/AddFilm/index";
import AdminLogin from "./Views/Authentication/AdminLogin/index";
import { TokkenLogin } from "./Store/Action/Authentication";
import { connect } from "react-redux";
import { AdminGuard } from "./HOC/Route";
import FilmShowtime from "./Views/FilmManager/FilmShowTime";
import { fetchFilmById, fetchFilmById2 } from "./Store/Action/film";
import ListUser from "./Views/UserManager/ListUser";
import AddUser from "./Views/UserManager/AddUser";
import EditUser from "./Views/UserManager/EditUser";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/admin" />

            <AdminGuard
              exact
              path="/admin"
              Component={Home}
              redirectPath="/admin/login"
            />
            <Route exact path="/admin/login" component={AdminLogin} />
            <AdminGuard
              exact
              path="/admin/film"
              Component={Film}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/film/add"
              Component={AddFilm}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/film/edit/:id"
              Component={FilmEdit}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/film/showtime/:id"
              Component={FilmShowtime}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/quanlynguoidung"
              Component={ListUser}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/quanlynguoidung/add"
              Component={AddUser}
              redirectPath="/admin/login"
            />
            <AdminGuard
              exact
              path="/admin/quanlynguoidung/edit/:taiKhoan"
              Component={EditUser}
              redirectPath="/admin/login"
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.props.dispatch(TokkenLogin(localStorage.getItem("taiKhoan")));
    }
  }
}

export default connect()(App);

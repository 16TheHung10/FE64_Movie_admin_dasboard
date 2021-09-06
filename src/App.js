import "./App.css";
import Home from "./Views/Home/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <AdminGuard
              exact
              path="/admin"
              Component={Home}
              redirectPath="/admin/login"
            />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/film" component={Film} />
            <Route exact path="/admin/film/add" component={AddFilm} />
            <Route exact path="/admin/film/edit/:id" component={FilmEdit} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  componentDidMount() {
    this.props.dispatch(TokkenLogin(localStorage.getItem("taiKhoan")));
  }
}

export default connect()(App);

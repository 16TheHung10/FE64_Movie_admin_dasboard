import "./App.css";
import Home from "./Views/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./Views/PageNotFound";
import { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
import Film from "./Views/FilmManager/Film";
import FilmEdit from "./Views/FilmManager/FilmEdit/index";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin" component={Home} />
            <Route exact path="/admin/film" component={Film} />
            <Route exact path="/admin/film/edit/:id" component={FilmEdit} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

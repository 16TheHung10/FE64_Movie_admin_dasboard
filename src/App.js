import "./App.css";
import Home from "./Views/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Views/Profile";
import PageNotFound from "./Views/PageNotFound";
import { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pf" component={Profile} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

import React from "react";
import { Redirect, Route } from "react-router-dom";

const createRoute = (conditions) => {
  return class extends React.Component {
    render() {
      const { path, Component, redirectPath, exact } = this.props;
      return (
        <Route
          path={path}
          exact={exact}
          render={(routeProps) => {
            if (conditions()) {
              return <Component {...routeProps} />;
            } else {
              return <Redirect to={redirectPath} />;
            }
          }}
        />
      );
    }
  };
};

export const AdminGuard = createRoute(() => localStorage.getItem("user"));

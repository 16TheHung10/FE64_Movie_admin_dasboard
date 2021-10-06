import React, { memo } from "react";
import Header from "../../Component/Header/index";
import Sidebar from "../../Component/SideBar/index";
import useStyles from "./style";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import "./Layout.css";
import { Paper } from "@material-ui/core";
const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classNames("container-fluid p-0")}>
      <Grid container>
        <Grid item xs={2} style={{ backgroundColor: "#222b36" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Header />
            <div className={classes.propsChildren}>{props.children}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(Layout);

import React from "react";
import Header from "../../Component/Header/index";
import Sidebar from "../../Component/SideBar/index";
import useStyles from "./style";
import classNames from "classnames";
const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classNames("container-fluid p-0")}>
      <div className="row">
        <div className={classNames("col-md-2  p-0", classes.layoutSidebar)}>
          <Sidebar />
        </div>
        <div className="col-md-10  p-0">
          <Header />
          <div className={classes.propsChildren}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

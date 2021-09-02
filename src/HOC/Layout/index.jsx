import React from "react";
import Footer from "../../Component/Footer/index";
import Header from "../../Component/Header/index";
import Sidebar from "../../Component/SideBar/index";

const Layout = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="row">
        <div className="col-md-2 col-sm-4 p-0">
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-8 p-0">
          <Header />
          {props.children}
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

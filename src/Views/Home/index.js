import React from "react";
import Layout from "../../HOC/Layout";
import logo from "../../assets/images/logo.png";
const index = () => {
  return (
    <Layout>
      <div>home</div>
      <img src={logo} alt="logo" />
    </Layout>
  );
};

export default index;

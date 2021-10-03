import React from "react";
import Layout from "../../HOC/Layout";
import logo from "../../assets/images/logo.png";

const Home = () => {
  return (
    <Layout>
      <img src={logo} alt="logo" />
    </Layout>
  );
};

export default Home;

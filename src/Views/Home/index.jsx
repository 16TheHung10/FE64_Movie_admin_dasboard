import React from "react";
import Layout from "../../HOC/Layout";
import logo from "../../assets/images/logo.png";
import { useStyles } from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <Layout style={{ overflow: "none !important" }}>
      <div className={classes.root}>
        <h1 className={classes.title}>Fix everything you want</h1>
      </div>
    </Layout>
  );
};

export default Home;

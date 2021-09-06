import React from "react";
import Layout from "../../HOC/Layout";
import logo from "../../assets/images/logo.png";

const Home = () => {
  // const dispatch = useDispatch();
  // const getInfoUser = useSelector((state) => {
  //   return state.auth.me;
  // });
  // useEffect(() => {
  //   console.log("hunggggg", getInfoUser.taiKhoan);
  //   dispatch(TokkenLogin(localStorage.getItem("taiKhoan")));
  // });
  return (
    <Layout>
      <div>home</div>
      <img src={logo} alt="logo" />
    </Layout>
  );
};

export default Home;

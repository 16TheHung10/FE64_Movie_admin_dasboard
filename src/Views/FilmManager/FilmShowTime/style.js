import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => {
  return {
    root: {
      textAlign: "center",
      padding: "10px 70px",
      height: "100vh",
      borderRadius: "20px",
      backgroundColor: "#eaeaed",
      margin: "10px",
    },
    fillSide: {
      display: "flex",
      flexDirection: "column",
    },
    image: {
      width: "100%",
      height: "500px",
      borderRadius: "20px",
      boxShadow: "rgb(0 0 0) 0px 3px 8px",
    },
    header: {
      textTransform: "uppercase",
    },
    hinhAnh: {
      height: "300px",
    },
    formControl: {
      width: "100%",
      marginBottom: "30px",
    },
  };
});

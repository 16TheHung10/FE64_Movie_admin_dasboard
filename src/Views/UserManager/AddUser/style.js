import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px",
      borderRadius: "20px",
      overflow: "hidden",
      height: "100vh",
      boxShadow:
        "rgb(0 0 0 / 55%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px",
    },
    header: {
      textAlign: "center",
    },
    inputField: {
      width: "90%",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "right",
    },
    flex: {
      justifyContent: "center",
    },
  };
});

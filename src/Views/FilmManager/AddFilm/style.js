import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: "10px",
      boxShadow: " rgb(0 0 0 / 50%) 0px 5px 15px",
    },
    form: {
      padding: "0px 20px 50px",
      borderRadius: "10px",
      width: "70%",
      margin: "20px auto",
    },
    formHeading: {
      display: "flex",
      flexDirection: "column",
    },
    text: {
      color: "red",
    },
    inputField: {
      marginBottom: "30px",
      color: "black",
    },
    textareaField: {
      width: "100%",
      height: "100%",
    },
    btnSubmit: {
      width: "10%",
      margin: "auto",
    },
    inputColor: {
      color: "red",
    },
  };
});

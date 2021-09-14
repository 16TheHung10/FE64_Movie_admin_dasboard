import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: " rgb(0 0 0 / 50%) 0px 5px 15px",
    },
    form: {
      padding: "100px 300px;",
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
      color: "white",
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

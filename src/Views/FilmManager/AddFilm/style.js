import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
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
    },
    textareaField: {
      width: "100%",
      height: "100%",
    },
    btnSubmit: {
      width: "10%",
      margin: "auto",
    },
  };
});

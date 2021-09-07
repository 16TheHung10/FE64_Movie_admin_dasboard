import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow:
        "rgb(0 0 0 / 55%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px",
    },
    table: {
      borderRadius: "20px",
    },
    tablehead: {
      backgroundColor: theme.palette.secondary.main,
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    searchRoot: {
      padding: "2px 4px 2px 20px",
      display: "flex",
      alignItems: "center",
      width: 400,
      marginBottom: "10px",
    },
    input: {
      width: "100%",
    },
  };
});

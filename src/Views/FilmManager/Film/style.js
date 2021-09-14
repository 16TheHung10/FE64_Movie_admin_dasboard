import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    main: {
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow:
        "rgb(0 0 0 / 55%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px",
      padding: "10px",
    },
    successColor: {
      backgroundColor: theme.palette.success.main,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },
    link: {
      color: "white",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
        color: "white",
      },
    },
    search: {
      margin: "20px 10px",
      width: "80%",
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
export default useStyles;

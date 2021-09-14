import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
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
    MuiTablePaginationSelectIcon: {
      padding: "100px",
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

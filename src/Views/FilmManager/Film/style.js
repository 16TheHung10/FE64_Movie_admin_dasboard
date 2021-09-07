import { alpha, makeStyles } from "@material-ui/core/styles";
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
  };
});
export default useStyles;

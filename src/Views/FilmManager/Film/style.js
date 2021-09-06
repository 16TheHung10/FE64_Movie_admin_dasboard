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
  };
});
export default useStyles;

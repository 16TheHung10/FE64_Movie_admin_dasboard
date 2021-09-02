import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  link: {
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "none",
      color: "red",
      transition: "all 0.7s",
    },
  },
  borderTopBottom: {
    borderTop: "1px solid black",
    // borderBottom: "1px solid black",
  },
}));
export default useStyles;

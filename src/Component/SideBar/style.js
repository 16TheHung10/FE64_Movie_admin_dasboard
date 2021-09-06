import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    marginTop: 0,
  },
  accordion: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  expandIcon: {
    color: "white",
  },
  sidebarProfile: {
    color: "white",
    fontSize: "32px",
    height: "100%",
    margin: "20px 17px",
    display: "flex",
    padding: "0px 10px",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    width: "100px",
    height: "100px",
    margin: "auto",
    backgroundColor: "blue",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  link: {
    color: "white",
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

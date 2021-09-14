import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    marginTop: 0,
  },
  bgDark: {
    backgroundColor: theme.palette.primary.main,
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
    padding: "40px 20px",
    borderRadius: "40px 20px",
    margin: "32px",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#171c24",
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
    marginLeft: "20px",
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

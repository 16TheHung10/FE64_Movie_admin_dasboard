import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    text: {
      color: "white",
    },
    colorToolbar: {
      // backgroundColor: "#ffffffb8",
      boxShadow: "none",
      borderBottom: "1px solid black",
      backgroundColor: "#222b36",
    },
    colorWhite: {
      color: "white",
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    link: {
      textDecoration: "none",
      color: theme.palette.primary.light,
      "&:hover": {
        textDecoration: "none",
        transition: "all 0.7s",
        color: theme.palette.primary.main,
      },
    },
  };
});
export default useStyles;

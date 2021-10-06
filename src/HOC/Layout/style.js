import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    // layoutSidebar: {
    //   height: "100vh",
    //   backgroundColor: theme.palette.primary.main,
    // },
    propsChildren: {
      height: "calc(93vh + 1px)",
      overflowY: "scroll",
      padding: "20px",
      backgroundColor: "#eff3f7",
    },
  };
});
export default useStyles;

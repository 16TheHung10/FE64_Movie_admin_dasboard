import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    // layoutSidebar: {
    //   height: "100vh",
    //   backgroundColor: theme.palette.primary.main,
    // },
    propsChildren: {
      height: "calc(93vh + 3px)",
      overflow: "scroll",
      padding: "20px",
    },
  };
});
export default useStyles;

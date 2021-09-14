import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    // layoutSidebar: {
    //   height: "100vh",
    //   backgroundColor: theme.palette.primary.main,
    // },
    propsChildren: {
      height: "90vh",
      overflow: "scroll",
      padding: "20px",
    },
  };
});
export default useStyles;

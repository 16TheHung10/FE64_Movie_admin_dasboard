import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    layoutSidebar: {
      maxHeight: "100vh",
      backgroundColor: theme.palette.primary.main,
    },
    propsChildren: {
      height: "90vh",
      overflow: "scroll",
    },
  };
});
export default useStyles;

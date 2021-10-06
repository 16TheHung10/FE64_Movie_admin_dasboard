import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundImage: "url('https://wallpaperaccess.com/full/1095571.jpg')",
      height: "100%",
      borderRadius: "20px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      overflow: "unset !important",
    },
    title: {
      color: "white",
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "61px",
      fontWeight: "300",
      paddingTop: "20px",
    },
  };
});

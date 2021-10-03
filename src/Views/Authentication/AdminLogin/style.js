import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "fixed",
      height: "100vh",
      backgroundImage:
        'url("https://movie-booking-project.vercel.app/img/mobile/backapp.jpg")',
    },
    paper: {
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#ffffffe0",
      width: "30%",
      margin: "50px auto",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      padding: "10px 0 130px",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "90%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  };
});

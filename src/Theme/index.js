import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 576,
  //     md: 768,
  //     lg: 992,
  //     xl: 1200,
  //   },
  // },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#4d627c",
      main: "#222b36",
      dark: "#6283de",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffef8c",
      main: "#00b0ff",
      dark: "#fbb512",
      contrastText: "#000",
    },
    error: {
      light: "#e57373",
      main: " #f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    text: {
      primary: "#000",
      secondary: "rgba(0,0,0,0.6)",
    },
    c1: {
      light: "#ee92ff",
      main: "#b930d1",
      dark: "#6a037d",
      contrastText: "#fff",
    },

    // c2: {},
    // c3: {}
  },
  typography: {
    h2: {
      fontSize: "3rem",
    },
  },
});

export default theme;

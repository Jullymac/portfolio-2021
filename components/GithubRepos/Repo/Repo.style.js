import { makeStyles } from "@material-ui/styles";

export default makeStyles(
  {
    root: {
      position: "relative",
      borderRadius: 4,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      background: "#FFFFFF",
      marginBottom: 20,
      padding: "8px 10px 40px",

      "@media (min-width: 500px)": {
        width: "32%",
      },

      "& a, & a:hover, & a:visited, & a:active": {
        color: "#31393C",
        textDecoration: "none",
        display: "block",
      },
    },
    title: {
      fontSize: "1.3em",
      overflowWrap: "break-word",
      margin: "0 0 10px 0",
      fontWeight: 400,
      "&:hover": {
        textDecoration: ["underline", "!important"],
      },
    },
    date: {
      fontSize: ".9em",
      position: "absolute",
      bottom: 8,
    },
  },
  { name: "GithubRepo" }
);

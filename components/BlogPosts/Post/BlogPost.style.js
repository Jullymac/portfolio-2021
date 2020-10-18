import { makeStyles } from "@material-ui/styles";

export default makeStyles(
  {
    root: {
      borderRadius: 4,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      background: "#FFFFFF",
      marginBottom: 20,
      padding: "8px 10px",
      "@media (min-width: 500px)": {
        display: "flex",
      },

      "& a, & a:hover, & a:visited, & a:active": {
        color: "#31393C",
        textDecoration: "none",
        display: "block",
      },
    },
    cover: {
      backgroundImage: ({ coverImage }) => `url(${coverImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      minWidth: 150,
      minHeight: 150,
    },
    details: {
      position: "relative",
      paddingTop: 10,
      paddingBottom: 35,
      "@media (min-width: 500px)": {
        paddingTop: 0,
        paddingLeft: 10,
      },
    },
    title: {
      fontSize: "1.4em",
      overflowWrap: "break-word",
      marginBottom: 10,
      "&:hover": {
        textDecoration: ["underline", "!important"],
      },
    },
    description: {
      fontSize: "1em",
      overflowWrap: "break-word",
      marginBottom: 15,
    },
    tags: {
      fontSize: ".9em",
      position: "absolute",
      bottom: 0,
    },
  },
  { name: "BlogPost" }
);

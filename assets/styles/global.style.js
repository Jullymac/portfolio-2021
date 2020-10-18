import { makeStyles } from "@material-ui/styles";
import backgroundImage from "../images/bg.jpg";
import backgroundTop from "../images/header.png";

export default makeStyles(
  {
    "@global": {
      body: {
        backgroundImage: `url(${backgroundImage})`,
        margin: 0,
        padding: 0,
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: "#31393C",
        lineHeight: 1.43,
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },
    },
    root: {
      backgroundImage: `url(${backgroundTop})`,
      backgroundRepeat: "repeat-x",
      minHeight: 162,
    },
  },
  { name: "global" }
);

import { makeStyles } from "@material-ui/styles";
import backgroundImage from "../images/bg.jpg";
import backgroundTop from "../images/header.png";

export default makeStyles(
  {
    "@global": {
      body: {
        backgroundImage: `url(${backgroundImage})`,
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

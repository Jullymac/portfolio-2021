import { makeStyles } from "@material-ui/styles";
import { FaInstagramSquare as InstagramIcon } from "react-icons/fa";
import { LINK_INSTAGRAM } from "../../../constants/links";

const useStyles = makeStyles(
  {
    root: {
      "& a, & a:hover, & a:visited, & a:active": {
        color: "rgb(36, 41, 46)",
      },
    },
  },
  { name: "Instagram" }
);

const Instagram = ({ className }) => {
  const style = useStyles();
  return (
    <span className={[style.root, className].join(" ")}>
      <a href={LINK_INSTAGRAM} target="_blank">
        <InstagramIcon size="2em" />
      </a>
    </span>
  );
};

export default Instagram;

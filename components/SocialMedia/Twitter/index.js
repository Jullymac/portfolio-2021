import { makeStyles } from "@material-ui/styles";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { LINK_TWITTER } from "../../../constants/links";

const useStyles = makeStyles(
  {
    root: {
      "& a, & a:hover, & a:visited, & a:active": {
        color: "rgb(29, 161, 242)",
      },
    },
  },
  { name: "Twitter" }
);

const Twitter = ({ className }) => {
  const style = useStyles();
  return (
    <span className={[style.root, className].join(" ")}>
      <a href={LINK_TWITTER} target="_blank">
        <TwitterIcon size="2em" />
      </a>
    </span>
  );
};

export default Twitter;

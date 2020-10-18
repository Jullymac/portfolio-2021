import { makeStyles } from "@material-ui/styles";
import { FaDev as DevToIcon } from "react-icons/fa";
import { LINK_DEVTO } from "../../../Constants/links";

const useStyles = makeStyles(
  {
    root: {
      "& a, & a:hover, & a:visited, & a:active": {
        color: "rgb(36, 41, 46)",
      },
    },
  },
  { name: "DevTo" }
);

const DevTo = ({ className }) => {
  const style = useStyles();
  return (
    <span className={[style.root, className].join(" ")}>
      <a href={LINK_DEVTO} target="_blank">
        <DevToIcon size="2em" />
      </a>
    </span>
  );
};

export default DevTo;

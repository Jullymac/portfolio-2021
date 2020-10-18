import { makeStyles } from "@material-ui/styles";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { LINK_GITHUB } from "../../../constants/links";

const useStyles = makeStyles(
  {
    root: {
      "& a, & a:hover, & a:visited, & a:active": {
        color: "rgb(36, 41, 46)",
      },
    },
  },
  { name: "Github" }
);

const Github = ({ className }) => {
  const style = useStyles();
  return (
    <span className={[style.root, className].join(" ")}>
      <a href={LINK_GITHUB} target="_blank">
        <GitHubIcon size="2em" />
      </a>
    </span>
  );
};

export default Github;

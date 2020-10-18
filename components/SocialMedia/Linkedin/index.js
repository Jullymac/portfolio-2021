import { makeStyles } from "@material-ui/styles";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { LINK_LINKEDIN } from "../../../constants/links";

const useStyles = makeStyles(
  {
    root: {
      "& a, & a:hover, & a:visited, & a:active": {
        color: "#0A66C2",
      },
    },
  },
  { name: "Linkedin" }
);

const Linkedin = ({ className }) => {
  const style = useStyles();
  return (
    <span className={[style.root, className].join(" ")}>
      <a href={LINK_LINKEDIN} target="_blank">
        <LinkedinIcon size="2em" />
      </a>
    </span>
  );
};

export default Linkedin;

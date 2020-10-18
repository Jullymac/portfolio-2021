import DevTo from "./DevTo";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import useStyles from "./SocialMedia.style";

const SocialMedia = () => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <Github className={style.icon} />
      <Linkedin className={style.icon} />
      <DevTo className={style.icon} />
      <Twitter className={style.icon} />
      <Instagram className={style.icon} />
    </div>
  );
};

export default SocialMedia;

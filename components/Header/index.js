import Logo from "../Logo";
import useStyles from "./Header.style";

const Header = () => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <Logo />
    </div>
  );
};

export default Header;

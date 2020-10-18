import Logo from "../Logo";
import useStyles from "./Header.style";

const Header = () => {
  const style = useStyles();
  return (
    <header className={style.root}>
      <Logo />
    </header>
  );
};

export default Header;

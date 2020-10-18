import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles(
  {
    image: {
      width: "354px",
      maxWidth: "100%",
      height: "auto",
    },
  },
  { name: "Logo" }
);

const Logo = () => {
  const style = useStyles();
  return <img src={logo} alt="Logo Juliana Macêdo" className={style.image} />;
};

export default Logo;

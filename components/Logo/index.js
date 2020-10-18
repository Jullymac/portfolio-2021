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
  return (
    <h1>
      <img src={logo} alt="Juliana Macêdo" className={style.image} />
    </h1>
  );
};

export default Logo;

import { LINK_DEVTO } from "../../../constants/links";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      marginTop: 40,
      marginBottom: 10,
      textAlign: "center",
    },
    btn: {
      "&, &:visited, &:active, &:hover": {
        background: "#31393C",
        color: "#FFFFFF",
        padding: "7px 30px",
        borderRadius: "5px",
        textDecoration: "none",
      },
    },
  },
  { name: "BlogButton" }
);

const BlogButton = () => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <a href={LINK_DEVTO} target="_blank" className={style.btn}>
        Check my Dev.to
      </a>
    </div>
  );
};

export default BlogButton;

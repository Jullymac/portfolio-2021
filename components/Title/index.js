import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      fontSize: "1.7em",
      marginTop: 0,
    },
  },
  { name: "Section-Title" }
);

const SectionTitle = ({ children }) => {
  const style = useStyles();
  return <h2 className={style.root}>{children}</h2>;
};

export default SectionTitle;

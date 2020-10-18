import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      fontSize: "1.7em",
      marginTop: 0,
    },
  },
  { name: "BlogPostsTitle" }
);

const BlogPostsTitle = () => {
  const style = useStyles();
  return <h2 className={style.root}>Latest articles</h2>;
};

export default BlogPostsTitle;

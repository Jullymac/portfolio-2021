import BlogPost from "./Post";

const { default: BlogPostsTitle } = require("./Title");

import { makeStyles } from "@material-ui/styles";
import BlogNoPosts from "./NoPosts";
import BlogButton from "./Button";

const useStyles = makeStyles(
  {
    root: {
      width: 600,
      maxWidth: "100%",
      margin: "0 auto 20px",
      padding: 20,
    },
  },
  { name: "BlogPosts" }
);

const BlogPosts = ({ posts }) => {
  const style = useStyles();
  return (
    <main className={style.root}>
      <BlogPostsTitle />
      {posts.length > 0 ? (
        posts.map((p) => <BlogPost post={p} />)
      ) : (
        <BlogNoPosts />
      )}
      <BlogButton />
    </main>
  );
};

export default BlogPosts;

import { makeStyles } from "@material-ui/styles";
import BlogPost from "./Post";
import BlogNoPosts from "./NoPosts";
import Button from "../Button";
import Title from "../Title";
import { LINK_DEVTO } from "../../constants/links";

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
      <Title>Latest articles</Title>
      {posts.length > 0 ? (
        posts.map((p) => <BlogPost key={p.id} post={p} />)
      ) : (
        <BlogNoPosts />
      )}
      <Button link={LINK_DEVTO}>Check my Dev.to</Button>
    </main>
  );
};

export default BlogPosts;

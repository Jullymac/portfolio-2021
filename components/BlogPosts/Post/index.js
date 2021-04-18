import { LINK_DEVTO } from "../../../constants/links";
import useStyles from "./BlogPost.style";

const BlogPost = ({ post }) => {
  const style = useStyles({
    coverImage:
      post?.cover_image || "https://via.placeholder.com/1000x400?text=No+cover",
  });

  const linkTo = post?.url || LINK_DEVTO;

  return (
    <div className={style.root}>
      <a href={linkTo} target="_blank" className={style.cover} />
      <div className={style.details}>
        <h3 className={style.title}>
          <a href={linkTo} target="_blank">
            {post?.title}
          </a>
        </h3>
        <a href={linkTo} target="_blank" className={style.description}>
          {post?.description}
        </a>
        <div className={style.tags}>Tags: {post?.tag_list.join(", ")}</div>
      </div>
    </div>
  );
};

export default BlogPost;

import { parse, format } from "date-fns";
import { LINK_GITHUB } from "../../../constants/links";
import useStyles from "./Repo.style";

const GithubRepo = ({ repo }) => {
  const style = useStyles();

  const linkTo = repo?.html_url || LINK_GITHUB;
  const updatedAt = format(
    parse(repo?.pushed_at, "yyyy-MM-dd'T'HH:mm:ssXXX", new Date()),
    "YYY-MM-dd"
  );

  return (
    <div className={style.root}>
      <h3 className={style.title}>
        <a href={linkTo} target="_blank">
          {repo?.name}
        </a>
      </h3>
      <a href={linkTo} target="_blank" className={style.description}>
        {repo?.description}
      </a>

      <div className={style.date}>Updated at: {updatedAt}</div>
    </div>
  );
};

export default GithubRepo;

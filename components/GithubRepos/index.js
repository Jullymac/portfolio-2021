import { makeStyles } from "@material-ui/styles";
import { LINK_GITHUB } from "../../constants/links";
import Button from "../Button";
import Title from "../Title";
import GithubNoRepos from "./NoRepos";
import GithubRepo from "./Repo";

const useStyles = makeStyles(
  {
    root: {
      width: 600,
      maxWidth: "100%",
      margin: "0 auto 20px",
      padding: 20,
    },

    container: {
      "@media (min-width: 500px)": {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
  { name: "GithubRepos" }
);

const GithubRepos = ({ items }) => {
  const style = useStyles();
  return (
    <main className={style.root}>
      <Title>Updated repositories</Title>
      {items.length > 0 ? (
        <div className={style.container}>
          {items.map((r) => (
            <GithubRepo key={r.id} repo={r} />
          ))}
        </div>
      ) : (
        <GithubNoRepos />
      )}
      <Button link={LINK_GITHUB}>Check my Github</Button>
    </main>
  );
};

export default GithubRepos;

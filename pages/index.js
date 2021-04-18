import BlogPosts from "../components/BlogPosts";
import GithubRepos from "../components/GithubRepos";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";
import { getPosts } from "../http/devto";
import { getRepositories } from "../http/github";

const Home = ({ posts, repos }) => {
  return (
    <>
      <Header />
      <SocialMedia />
      <GithubRepos items={repos} />
      <BlogPosts posts={posts} />
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      posts: await getPosts(),
      repos: await getRepositories(),
    },
  };
};

export default Home;

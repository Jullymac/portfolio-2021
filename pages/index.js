import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";
import { getPosts } from "../http/devto";

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <SocialMedia />
      <BlogPosts posts={posts} />
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      posts: await getPosts(),
    },
  };
};

export default Home;

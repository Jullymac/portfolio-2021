import useNormalizeStyles from "../assets/styles/normalize.style";
import useGlobalStyles from "../assets/styles/global.style";

const App = ({ Component, pageProps }) => {
  useNormalizeStyles();
  const style = useGlobalStyles();

  return (
    <div className={style.root}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;

import "typeface-roboto";
import { useEffect } from "react";
import Head from "next/head";
import useNormalizeStyles from "../assets/styles/normalize.style";
import useGlobalStyles from "../assets/styles/global.style";
import { PAGE_DEFAULT_TITLE } from "../constants/configs";

const App = ({ Component, pageProps }) => {
  useNormalizeStyles();
  const style = useGlobalStyles();

  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className={style.root}>
      <Head>
        <title>{PAGE_DEFAULT_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;

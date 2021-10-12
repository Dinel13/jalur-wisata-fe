import { Provider } from "react-redux";
import Head from "next/head";

import store from "../store/store";
import Layout from "../components/layout/layout";
// import "../styles/styles.module.css";
import "../styles/styles.css";
import ErrorModal from "../components/layout/modal/ErrorModal";
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ErrorModal />
      <Layout>
        <Head>
          <title>Jalur Wisata</title>
          <meta property="og:title" content="My page title" key="title" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

import { Provider } from "react-redux";

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
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

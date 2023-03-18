import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";
import '../styles/global.css';
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import { StateContextProvider } from "../context/index";
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../components/myCommon/Alert'
import {useState , useEffect} from 'react'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");

}

function MyApp({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;




  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
      <StateContextProvider>
        <Component {...pageProps} />

<Alert/>



        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

</StateContextProvider>

      </Provider>





      <ScrollToTop />
    </>
  );
}

export default appWithTranslation(MyApp);

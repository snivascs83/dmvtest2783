import "../styles/globals.css"; // Import global styles
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { NextPageWithLayout } from "../features/layouts";
import store from "../app/store";
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: any) => (
      <main className=" min-h-[calc(100vh_-_70px)]">{page}</main>
    ));
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;

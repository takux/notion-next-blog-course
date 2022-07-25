import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

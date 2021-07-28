import { AppProps } from "next/app";
import React from "react";
import Cart from "../components/Cart";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Cart />
    <Component {...pageProps} />
  </>
);

export default App;

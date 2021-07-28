import { AppProps } from "next/app";
import React from "react";
import Cart from "../components/Cart";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Cart />
  </>
);

export default App;

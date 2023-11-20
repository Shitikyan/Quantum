import type { AppProps } from "next/app";

import "@/src/styles/colors.scss";
import "@/src/styles/globals.scss";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

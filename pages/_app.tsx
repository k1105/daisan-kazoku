import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localfont from "next/font/local";

const LineSeed = localfont({
  src: [
    {
      path: "./LINESeedJP_OTF_Rg.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./LINESeedJP_OTF_Th.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./LINESeedJP_OTF_Bd.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./LINESeedJP_OTF_Eb.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={LineSeed.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <canvas className="background"></canvas>
        <script async src="/particles.js-master\dist\particles.min.js"></script>
        <NextScript />
      </body>
    </Html>
  );
}

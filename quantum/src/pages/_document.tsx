import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <canvas className="background"></canvas>
        <script src="/particles.js-master\dist\particles.min.js"></script>
        <NextScript />
      </body>
    </Html>
  );
}

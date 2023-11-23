import Head from "next/head";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuantumAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
}

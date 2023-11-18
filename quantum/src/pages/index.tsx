import Head from "next/head";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { General } from "../components/Sections/General";
import { Investing } from "../components/Sections/Investing";
import { Problems } from "../components/Sections/Problems";
import { Resilience } from "../components/Sections/Resilience";
import { Footer } from "../components/Footer";
import { Advisors } from "../components/Sections/Advisors";
import { Statistics } from "../components/Sections/Statistics";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuantumAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Header />
      </Head>
      <Layout>
        <Main>
          <General />
          <Investing />
          <Problems />
          <Resilience />
          <Advisors />
          <Statistics />
        </Main>
        <Footer />
      </Layout>
    </>
  );
}

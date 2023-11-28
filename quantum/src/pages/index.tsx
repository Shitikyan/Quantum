import Head from "next/head";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { UserService } from "../services/userService";
import { NextPageContext } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ me }: any) {
  const router = useRouter();
  useEffect(() => {
    if (me && me?.verified != 1) {
      router.push("/verify");
    }
  }, [me]);

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

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const cookies = req?.headers.cookie;

  if (!cookies) {
    return {
      props: { me: null },
    };
  }

  const phone = cookies
    .split(";")
    .find((cookie) => cookie.trim().startsWith("phone_number="));
  const phoneNumber = phone ? phone.split("=")[1] : null;

  if (!phoneNumber) {
    return {
      props: { me: null },
    };
  }

  const user = new UserService();
  const me = await user.getUserByPhone(phoneNumber);

  return {
    props: { me },
  };
};

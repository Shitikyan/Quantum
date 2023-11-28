import { useState } from "react";
import { Layout } from "@/src/components/Layout";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { UserService } from "@/src/services/userService";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const VerifyPAGE = () => {
  const [code, setCode] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const router = useRouter();
  const user = new UserService();

  return (
    <Layout>
      <Header />
      <div className={styles.box}>
        <form className={styles.form}>
          <h1 className={styles.title}>Verify your phone number</h1>
          <p className={styles.descr}>
            Enter here the code sent to your phone number
          </p>
          {err && <p className={styles.error}>Wrond verification code</p>}
          <input
            onChange={(ev) => setCode(ev.target.value)}
            value={code}
            className={styles.input}
            placeholder="XXXX"
          />
          <button
            onClick={async (ev) => {
              ev.preventDefault();
              const { data } = await user.verify(code);
              if (data?.verified) router.push("/");
            }}
            className={styles.button}
          >
            Submit
          </button>
          <button
            className={styles.button}
            onClick={async (ev) => {
              ev.preventDefault();
              await user.sendVerification();
            }}
          >
            Sand Again
          </button>
        </form>
      </div>
      <Footer />
    </Layout>
  );
};

export default VerifyPAGE;

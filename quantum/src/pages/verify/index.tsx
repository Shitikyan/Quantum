import { useState } from "react";
import { handleSubmitCode } from "@/src/utils/verify";
import { Layout } from "@/src/components/Layout";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const VerifyPAGE = () => {
  const [code, setCode] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const route = useRouter();
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
            onClick={() =>
              handleSubmitCode(code, setErr, () => {
                route.push("/", {
                  query: {
                    verified: true,
                  },
                });
              })
            }
            className={styles.button}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </Layout>
  );
};

export default VerifyPAGE;

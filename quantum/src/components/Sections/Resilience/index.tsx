import { DoubleImage } from "../../DoubleImage";
import { RunnigLine } from "../General/RunningLine";
import { Swipper } from "./Swipper";

import styles from "./styles.module.scss";

export const Resilience = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>WHY SHOULDN'T YOU BE AFRAID?</h3>
      <div className={styles.box}>
        <DoubleImage
          shadowColor="green"
          height={564}
          width={730}
          src="https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/sert.png"
        />
        <div className={styles.left}>
          <p className={styles.descr}>
            <span className={styles.line} />
            You can withdraw profits from your first deposit to any payment
            system or bank at any time. All QuantumAI transactions are only
            supported and processed through World Bank.
          </p>
          <p className={styles.descr}>
            <span className={styles.line} />
            You are not alone. The best manager will help you multiply your
            first deposit and solve any difficulties that may arise.
          </p>
          <p className={styles.descr}>
            <span className={styles.line} />
            QuantumAI users' data remains confidential. After 30 days of not
            using the platform, all data is automatically erased from our
            servers.
          </p>
        </div>
      </div>
      
    </section>
  );
};

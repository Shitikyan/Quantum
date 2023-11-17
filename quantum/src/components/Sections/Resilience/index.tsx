import { RunnigLine } from "../General/RunningLine";
import { Swipper } from "./Swipper";
import styles from "./styles.module.scss";

export const Resilience = () => {
  return (
    <section className={styles.container}>
      <h3>WHY SHOULDN'T YOU BE AFRAID?</h3>
      <div className={styles.top}>
        <div className={styles.double_image}></div>
        <div className={styles.top_left}>
          <p className={styles.top_descr}>
            You can withdraw profits from your first deposit to any payment
            system or bank at any time. All QuantumAI transactions are only
            supported and processed through World Bank.
          </p>
          <p className={styles.top_descr}>
            You are not alone. The best manager will help you multiply your
            first deposit and solve any difficulties that may arise.
          </p>
          <p className={styles.top_descr}>
            QuantumAI users' data remains confidential. After 30 days of not
            using the platform, all data is automatically erased from our
            servers.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_text}>
          <h4 className={styles.bottom_title}>Advisors</h4>
          <p className={styles.bottom_descr}>
            QuantumAI has wide support among investors. Among them are the
            brightest scientists, businessmen and
          </p>
        </div>
        <Swipper />
      </div>
      <RunnigLine />
    </section>
  );
};

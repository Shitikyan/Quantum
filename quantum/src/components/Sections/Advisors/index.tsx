import { RunnigLine } from "../General/RunningLine";
import { Swipper } from "../Resilience/Swipper";

import styles from "./styles.module.scss";

export const Advisors = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h4 className={styles.title}>Advisors</h4>
        <p className={styles.descr}>
          QuantumAI has wide support among investors. Among them are the
          brightest scientists, businessmen and
        </p>
      </div>
      <Swipper />
    </section>
  );
};

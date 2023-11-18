import { RunnigLine } from "../General/RunningLine";
import { Swipper } from "../Resilience/Swipper";

import styles from "./styles.module.scss";

export const Advisors = () => {
  return (
    <section>
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
      <RunnigLine children={[]} />
    </section>
  );
};

import { Promo } from "./Promo";
import { RunnigLine } from "./RunningLine";

import styles from "./styles.module.scss";

export const General = () => {
  return (
    <section className={styles.container}>
      <Promo />
      <RunnigLine />
    </section>
  );
};

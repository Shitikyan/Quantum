import { ProblemsBottom } from "./ProblemsBottom";
import { ProblemsTop } from "./ProblemsTop";
import styles from "./styles.module.scss";

export const Problems = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title_block}>
        <span className={styles.line} />
        <h2 className={styles.title}>PROBLEMS</h2>
        <span className={styles.line} />
      </div>
      <ProblemsTop />
      <ProblemsBottom />
    </section>
  );
};

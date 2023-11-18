import { IStepProps } from "./types";

import styles from "./styles.module.scss";

export const Step = ({ number, name, descr }: IStepProps) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.number}>{number}</h4>
      <h5 className={styles.name}>{name}</h5>
      <p className={styles.descr}>{descr}</p>
    </div>
  );
};

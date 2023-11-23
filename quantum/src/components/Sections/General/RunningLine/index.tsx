import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";

export const RunnigLine = ({
  repeatCount = 2,
  children,
  height = 135,
}: IRunningTextProps) => {
  const arr = new Array(repeatCount).fill(0);

  return (
    <div
      className={styles.container}
      style={{ height }}
    >
      {arr.map((_, i) => (
        <ul className={styles.list} key={i}>
          {children}
        </ul>
      ))}
    </div>
  );
};

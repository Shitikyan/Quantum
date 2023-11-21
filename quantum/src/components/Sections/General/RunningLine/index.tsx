import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";

export const RunnigLine = ({
  repeatCount = 2,
  children,
  height = 135,
}: IRunningTextProps) => {
  const arr = new Array(repeatCount).fill(0);
  console.log(arr.length);

  return (
    <div
      className={styles.container}
      style={{ position: "relative", height, width: "100%" }}
    >
      {arr.map((_, i) => (
        <ul className={styles.list} key={i}>{children}</ul>
      ))}
    </div>
  );
};

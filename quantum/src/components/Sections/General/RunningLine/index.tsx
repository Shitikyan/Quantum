import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";

export const RunnigLine = ({
  repeatCount = 2,
  children,
  height = 135,
}: IRunningTextProps) => {
  const arr = new Array(repeatCount).fill(0);
  return (
    <div style={{ position: "relative", height, width: "100%" }}>
      <ul className={styles.container}>
        {arr.map((_) => (
          <>{children}</>
        ))}
      </ul>
    </div>
  );
};

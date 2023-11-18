import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";

export const RunnigLine = ({ children, height = 135 }: IRunningTextProps) => {
  return (
    <div style={{ position: "relative", height, width: "100%" }}>
      <ul className={styles.container}>
        {children}
        {children}
      </ul>
    </div>
  );
};

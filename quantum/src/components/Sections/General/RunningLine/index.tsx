import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";

export const RunnigLine = ({ children }: IRunningTextProps) => {
  return (
    <div style={{ position: "relative", height: 135 }}>
      <ul className={styles.container}>
        {children}
        {children}
      </ul>
    </div>
  );
};

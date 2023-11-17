import { ILayoutProps } from "./types";

import styles from "./styles.module.scss";

export const Layout = ({ children }: ILayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};

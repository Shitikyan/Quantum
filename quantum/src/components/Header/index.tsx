import Logo from "@/public/images/logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo_box}>
        <Logo />
        <span className={styles.line} />
      </div>
      <button className={styles.button}>Sign up for free</button>
    </header>
  );
};

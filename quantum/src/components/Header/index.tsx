import Logo from "@/public/images/logo.svg";

import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo_box}>
        <Logo />
        <span className={styles.line} />
      </div>
      <button
        onClick={() => {
          window.scroll({ top: 0, behavior: "smooth" });
        }}
        className={styles.button}
      >
        Sign up for free
      </button>
    </header>
  );
};

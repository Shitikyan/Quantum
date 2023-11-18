import { useState } from "react";

import styles from "./styles.module.scss";

export const Form = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <form className={styles.container}>
      <h4 className={styles.title}>SIGN UP FOR FREE</h4>
      <input className={styles.input} placeholder="First name" type="text" />
      <input className={styles.input} placeholder="Last name" type="text" />
      <input className={styles.input} placeholder="Email" type="email" />
      <input className={styles.input} type="text" />
      <button className={styles.button}>REGISTER</button>
      <p className={styles.button_text}>
        Places left to register:<span className={styles.number}>16</span>
      </p>
    </form>
  );
};

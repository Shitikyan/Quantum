import { useState } from "react";

import styles from "./styles.module.scss";

export const Form = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <form className={styles.container}>
      <h4>SIGN UP FOR FREE</h4>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};

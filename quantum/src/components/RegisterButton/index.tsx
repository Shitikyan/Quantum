import { IButtonProps } from "./types";

import styles from "./styles.module.scss";

export const RegisterButton = ({ handleClick }: IButtonProps) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      REGISTER
    </button>
  );
};

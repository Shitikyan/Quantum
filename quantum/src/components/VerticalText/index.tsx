import { IVerticalTextProps } from "./types";

import styles from "./styles.module.scss";

export const VerticalText = ({ className, text }: IVerticalTextProps) => {
  return (
    <div className={styles.container}>
      {text.split("").map((letter, i) => (
        <div className={className} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
};

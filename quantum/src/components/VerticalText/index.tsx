import { IVerticalTextProps } from "./types";

import styles from "./styles.module.scss";

export const VerticalText = ({
  animation,
  className,
  text,
}: IVerticalTextProps) => {
  return (
    <div className={`${styles.container} ${animation}`}>
      {text.split("").map((letter, i) => (
        <div className={className} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
};

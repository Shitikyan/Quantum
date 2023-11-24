import { IRotatingText } from "./types";

import styles from "./styles.module.scss";

export const RotatingText = ({ text, diameter, children, className }: IRotatingText) => {
  return (
    <div
      style={{ width: 2 * diameter, height: 2 * diameter }}
      className={`${styles.container} ${className}`}
    >
      <div className={styles.child}>{children}</div>
      <div className={styles.rotate_box}>
        {text.split("").map((letter, i) => {
          const angle = (i / text.length) * 2 * Math.PI;
          const letterPosition = {
            top: Math.round(diameter + diameter * Math.sin(angle) - 8),
            left: Math.round(diameter + diameter * Math.cos(angle) - 8),
            transform: `rotate(${90 + i * 5.4}deg)`,
          };

          return (
            <span key={i} style={letterPosition} className={styles.letter}>
              {letter.toUpperCase()}
            </span>
          );
        })}
      </div>
    </div>
  );
};

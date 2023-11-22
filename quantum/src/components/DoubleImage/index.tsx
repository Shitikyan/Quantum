import styles from "./styles.module.scss";
import { IDoubleImageProps } from "./types";

export const DoubleImage = ({
  width,
  height,
  shadowColor,
  src,
  hasShadow = true,
  type = "big",
  rightShadow = false,
}: IDoubleImageProps) => {
  let containerStyles = {
    width,
    height,
    zIndex: 500,
  };

  if (!hasShadow) {
    containerStyles = Object.assign({ boxShadow: "none" }, containerStyles);
  }

  return (
    <div
      style={containerStyles}
      className={`${styles.container} ${rightShadow ? styles.right : ""} ${
        styles[shadowColor]
      } ${styles[type]}`}
    >
      <img src={src} className={styles.image} />
    </div>
  );
};

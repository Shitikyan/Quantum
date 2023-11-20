import styles from "./styles.module.scss";
import { IDoubleImageProps } from "./types";

export const DoubleImage = ({
  width,
  height,
  shadowColor,
  src,
  hasShadow = true,
  type = "big",
}: IDoubleImageProps) => {
  let containerStyles = {
    width,
    height,
  };

  if (!hasShadow) {
    containerStyles = Object.assign({ boxShadow: "none" }, containerStyles);
  }

  return (
    <div
      style={containerStyles}
      className={`${styles.container} ${styles[shadowColor]} ${styles[type]}`}
    >
      <img src={src} className={styles.image} />
    </div>
  );
};

import styles from "./styles.module.scss";
import { IDoubleImageProps } from "./types";

export const DoubleImage = ({
  width,
  height,
  shadowColor,
  src,
}: IDoubleImageProps) => {
  const containerStyles = {
    width,
    height,
  };
  return (
    <div style={containerStyles} className={`${styles.container} ${styles[shadowColor]}`}>
      <img src={src} className={styles.image} />
    </div>
  );
};

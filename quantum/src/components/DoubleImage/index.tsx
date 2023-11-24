import { CSSProperties, useEffect, useState } from "react";
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
  className = "",
}: IDoubleImageProps) => {
  const [containerStyles, setContainerStyles] = useState<CSSProperties>({});

  useEffect(() => {
    if (width) {
      setContainerStyles({ ...containerStyles, width });
    }
    if (height) {
      setContainerStyles({ ...containerStyles, height });
    }
    if (!hasShadow) {
      setContainerStyles({ ...containerStyles, boxShadow: "none" });
    }
  }, [width, height, hasShadow]);

  return (
    <div
      style={containerStyles}
      className={`${styles.container} ${rightShadow ? styles.right : ""} ${
        styles[shadowColor]
      } ${styles[type]} ${className}`}
    >
      <img src={src} className={styles.image} />
    </div>
  );
};

import { useMediaQuery } from "react-responsive";
import { useCallback, useEffect, useRef, useState } from "react";
import { DoubleImage } from "@/src/components/DoubleImage";
import { ICoupleProps, TAnimation, TImageSize } from "./types";
import { revealFn } from "@/src/utils/reveal";

import styles from "./styles.module.scss";
import animations from "./animation.module.scss";

export const Couple = ({ reversed, item }: ICoupleProps) => {
  const [imageSize, setImageSize] = useState<TImageSize>({
    height: 576,
    width: 385,
  });
  const isSmallDevice = useMediaQuery({ maxWidth: 1000 });

  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState<TAnimation>({
    couple: "",
  });

  const callBack = () => {
    setAnimated({
      couple: animations.couple,
    });
    window.removeEventListener("scroll", reveal);
  };

  const reveal = useCallback(() => revealFn(callBack, ref), []);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    if (isSmallDevice) setImageSize({ height: 200, width: 160 });
  }, [isSmallDevice]);

  return (
    <div
      ref={ref}
      style={{ flexDirection: reversed ? "row" : "row-reverse" }}
      className={`${styles.container} ${animated.couple}`}
    >
      <div className={styles.descr}>
        <span className={styles.underline}>{item.underlined}</span> {item.text1}
        <p className={styles.coloredText}>{item.text2}</p>
      </div>
      <DoubleImage
        height={imageSize.height}
        width={imageSize.width}
        shadowColor="green"
        src={item.src}
        rightShadow={!reversed}
      />
    </div>
  );
};

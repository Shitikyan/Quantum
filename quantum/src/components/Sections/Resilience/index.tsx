import { DoubleImage } from "../../DoubleImage";
import { useCallback, useEffect, useRef, useState } from "react";
import { IAnimation } from "./types";
import { revealFn } from "@/src/utils/reveal";
import { data } from "./fakeData";
import image from "@/public/images/sert.png";

import styles from "./styles.module.scss";
import animations from "./animation.module.scss";

export const Resilience = () => {
  const [animated, setAnimated] = useState<IAnimation>({
    left: "",
    right: "",
    title: " ",
  });

  const ref = useRef<HTMLDivElement>(null);

  const callBack = () => {
    setAnimated({
      title: animations.title,
      left: animations.left,
      right: animations.right,
    });
    window.removeEventListener("scroll", reveal);
  };

  const reveal = useCallback(() => revealFn(callBack, ref), []);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <section ref={ref} className={styles.container}>
      <h3 className={`${styles.title} ${animated.title}`}>
        WHY SHOULDN&#39;T YOU BE AFRAID?
      </h3>
      <div className={styles.box}>
        <DoubleImage
          className={`${styles.left} ${animated.left}`}
          shadowColor="green"
          src={image.src}
        />
        <div className={`${styles.right} ${animated.right}`}>
          {data.map((text: string, i) => (
            <p key={i} className={styles.descr}>
              <span className={styles.line} />
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

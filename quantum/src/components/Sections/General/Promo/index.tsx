import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "./Form";
import { RotatingText } from "./RotatingText";
import { useMediaQuery } from "react-responsive";
import { IAnimation } from "./types";
import { revealFn } from "@/src/utils/reveal";

import styles from "./styles.module.scss";
import animations from "./animation.module.scss";

export const Promo = () => {
  const [animated, setAnimated] = useState<IAnimation>({
    title: "",
    descr: "",
    form: "",
    video: "",
  });
  const [diameter, setDiameter] = useState(320);
  const isLaptop = useMediaQuery({ maxWidth: 1500 });
  const ref = useRef<HTMLDivElement>(null);
  const callBack = () => {
    setAnimated({
      descr: animations.descr,
      title: animations.title,
      form: animations.form,
      video: animations.video,
    });
    window.removeEventListener("scroll", reveal);
  };
  const reveal = useCallback(() => revealFn(callBack, ref), []);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    if (isLaptop) {
      setDiameter(220);
    }
  }, [isLaptop]);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.top_block}>
        <div id="signup" className={styles.left_block}>
          <h2 className={`${styles.title} ${animated.title}`}>
            Turning <span className={styles.price1}>$250</span> into{" "}
            <span className={styles.price2}>$9,500</span> in 3 days is
            impossible? With QuantumAI - you can do even more!
          </h2>
          <p className={`${styles.descr} ${animated.descr}`}>
            Best innovative investment platform from Elon Musk 2023 by the Forex
            Awards. Hurry up and register for free right now and get the chance
            to get rid of credits and financial difficulties! Your personal
            manager is already waiting for you!
          </p>
          <Form className={animated.form} />
        </div>
        <RotatingText
          className={animated.video}
          text="Play video Play video Play video Play video Play video Play video "
          diameter={diameter}
        >
          <div>
            <video controls autoPlay muted>
              <source src="/videos/video.mp4" />
            </video>
          </div>
        </RotatingText>
      </div>
    </div>
  );
};

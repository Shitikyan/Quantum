import { VerticalText } from "@/src/components/VerticalText";
import { Step } from "./Step";
import { steps } from "./fakeData";

import styles from "./styles.module.scss";
import animations from "./animation.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { IAnimation } from "./types";
import { revealFn } from "@/src/utils/reveal";

export const ProblemsBottom = () => {
  const [animated, setAnimated] = useState<IAnimation>({
    descr: "",
    line1: "",
    line2: "",
    subtitle: "",
    title: "",
    steps: "",
  });
  const ref = useRef<HTMLDivElement>(null);

  const callBack = () => {
    setAnimated({
      descr: animations.descr,
      line1: animations.line1,
      line2: animations.line2,
      subtitle: animations.subtitle,
      title: animations.title,
      steps: animations.steps,
    });
    window.removeEventListener("scroll", reveal);
  };

  const reveal = useCallback(() => revealFn(callBack, ref), []);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.top}>
        <VerticalText
          className={styles.title}
          text="SOLUTION"
          animation={animated.title}
        />
        <span className={`${styles.line} ${animated.line1}`} />
        <span className={`${styles.red_line} ${animated.line2}`} />

        <p className={`${styles.descr} ${animated.descr}`}>
          QuantumAI is the future of the money world, helping people and the
          World Bank in the fight against global poverty! The goals of the World
          Bank Group are to end extreme poverty and promote shared prosperity.
          Using the capabilities of quantum computing, a team with renowned
          partners and banks led by Elon Musk has succeeded. Every person on the
          platform can now forget about their fears, credits, low income,
          depression, and hunger. In Australia, with the help of QuantumAI, UN
          experts promise a 30% boost to the economy by 2027. Your second
          opportunity to become financially free in 2023 - if you didn&#39;t
          manage to do so on Bitcoin in 2018!
        </p>
      </div>
      <div className={styles.bottom}>
        <p className={`${styles.subtitle} ${animated.subtitle}`}>
          SO WHAT DO YOU NEED TO START?
        </p>
        <div className={`${styles.road_map} ${animated.steps}`}>
          {steps.map((step, i) => (
            <Step key={i} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

import { useCallback, useEffect, useRef, useState } from "react";
import { ProblemsBottom } from "./ProblemsBottom";
import { ProblemsTop } from "./ProblemsTop";
import { IAnimation } from "./types";
import { revealFn } from "@/src/utils/reveal";

import styles from "./styles.module.scss";
import animations from "./animations.module.scss";

export const Problems = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState<IAnimation>({
    line: "",
    title: "",
  });
  const callBack = () => {
    setAnimated({
      line: animations.line,
      title: animations.title,
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
      <div className={styles.title_block}>
        <span className={`${styles.line} ${styles.line1} ${animated.line}`} />
        <h2 className={`${styles.title} ${animated.title}`}>PROBLEMS</h2>
        <span className={`${styles.line} ${styles.line2} ${animated.line}`} />
      </div>
      <ProblemsTop />
      <ProblemsBottom />
    </section>
  );
};

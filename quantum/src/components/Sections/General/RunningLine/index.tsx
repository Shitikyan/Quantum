import { IRunningTextProps } from "./types";

import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";

export const RunnigLine = ({
  repeatCount = 2,
  children,
  height = 135,
}: IRunningTextProps) => {
  const [arr, setArr] = useState<number[]>([0, 0]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const count =
        window.screen.width / ref.current.clientWidth + 2 ?? repeatCount;
      setArr(new Array(Math.ceil(count) * 3).fill(0));
    }
  }, [ref]);

  return (
    <div ref={ref} className={styles.container} style={{ height }}>
      {arr.map((_, i) => (
        <ul className={styles.list} key={i}>
          {children}
        </ul>
      ))}
    </div>
  );
};

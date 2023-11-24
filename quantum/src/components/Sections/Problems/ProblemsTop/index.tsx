import { problemArr } from "./fakeData";
import { Couple } from "./Couple";

import styles from "./styles.module.scss";

export const ProblemsTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {problemArr.map((item, i) => {
          return (
            <Couple
              key={i}
              reversed={i % 2 === 0}
              item={{
                src: item.src,
                text1: item.text1,
                text2: item.text2,
                underlined: item.underlined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

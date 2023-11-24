import { Promo } from "./Promo";
import { RunnigLine } from "./RunningLine";
import { data } from "./fakeData";

import styles from "./styles.module.scss";
import { IGeneralRunningLine } from "./types";

export const General = () => {
  return (
    <section className={styles.container}>
      <Promo />
      <RunnigLine>
        {data.map((item: IGeneralRunningLine, i) => (
          <li key={i} className={styles.item}>
            <img src={item.src} className={styles.image}></img>
            <div className={styles.text_box}>
              <p className={styles.text}>
                <span className={styles.name}>{item.name}</span>
              </p>
              <p className={styles.text}>
                <span>Profit:</span>
                <span className={styles.profit}>${item.profit}</span>
              </p>
              <p className={styles.text}>
                <span className={styles.balance}>Current Balance:</span>
                <span>${item.balance}</span>
              </p>
            </div>
          </li>
        ))}
      </RunnigLine>
    </section>
  );
};

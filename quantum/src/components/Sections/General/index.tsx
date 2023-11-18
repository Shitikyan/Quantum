import { Promo } from "./Promo";
import { RunnigLine } from "./RunningLine";

import styles from "./styles.module.scss";
import { IGeneralRunningLine } from "./types";

const arr: IGeneralRunningLine[] = [
  {
    balance: 697,
    name: "Roberto",
    profit: 5.022,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/1.jpg",
  },
  {
    balance: 893,
    name: "Ian",
    profit: 8.792,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/2.jpg",
  },
  {
    balance: 788,
    name: "Fred",
    profit: 4.239,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/3.jpg",
  },
  {
    balance: 575,
    name: "Kristin",
    profit: 9.236,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/4.jpg",
  },
  {
    balance: 785,
    name: "Ray",
    profit: 6.493,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/5.jpg",
  },
  {
    balance: 620,
    name: "Brent",
    profit: 7.502,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/6.jpg",
  },
  {
    balance: 821,
    name: "Felicia",
    profit: 9.892,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/7.jpg",
  },
  {
    balance: 397,
    name: "Cody",
    profit: 4.424,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/10.jpg",
  },
  {
    balance: 770,
    name: "Brian",
    profit: 8.102,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/11.jpg",
  },
  {
    balance: 250,
    name: "Murray",
    profit: 9.12,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/12.jpg",
  },
  {
    balance: 327,
    name: "Tamara",
    profit: 5.554,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/13.jpg",
  },
  {
    balance: 725,
    name: "Ana",
    profit: 9.483,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/14.jpg",
  },
  {
    balance: 605,
    name: "Brayden",
    profit: 5.813,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/15.jpg",
  },
  {
    balance: 480,
    name: "Roberto",
    profit: 8.792,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/16.jpg",
  },
  {
    balance: 815,
    name: "Aiden",
    profit: 4.27,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/17.jpg",
  },
  {
    balance: 912,
    name: "Hector",
    profit: 4.915,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/18.jpg",
  },
  {
    balance: 779,
    name: "Jimmy",
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/19.jpg",
    profit: 1.62,
  },
  {
    balance: 585,
    name: "Vincent",
    profit: 3.82,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/20.jpg",
  },
  {
    balance: 609,
    name: "Jeffrey",
    profit: 5.813,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/21.jpg",
  },
  {
    balance: 919,
    name: "Cindy",
    profit: 6.552,
    src: "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/22.jpg",
  },
];

export const General = () => {
  return (
    <section className={styles.container}>
      <Promo />
      <RunnigLine>
        {arr.map((item: IGeneralRunningLine, i) => (
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

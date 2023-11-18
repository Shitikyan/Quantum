import { RunnigLine } from "../General/RunningLine";
import styles from "./styles.module.scss";

const companies: string[] = [
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa1.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa2.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa3.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa4.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa5.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa6.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa7.png",
  "https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/images/pa8.png",
];

export const Statistics = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>STATISTICS FOR TODAY:</h3>
      <div className={styles.top}>
        <div className={styles.left}>
          <p className={styles.text}>
            Average earnings of a registered user from a deposit of $250: 762$
          </p>
          <p className={styles.text}>Registrations on QuantumAI: 114</p>
          <p className={styles.text}>The Average Earnings Increase: 4x</p>
          <p className={styles.text}>Places left to register: 5</p>
        </div>
        <div className={styles.chart}></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottom_text}>
          REGISTER FOR FREE TODAY AND GRAB YOUR FIRST PROFIT! REGISTER FOR FREE
          TODAY AND GRAB YOUR FIRST PROFIT
        </p>
        <a href="#">REGISTER</a>
      </div>
      <RunnigLine height={235}>
        {companies.map((item, i) => (
          <div className={styles.company}>
            <img src={item} alt="alt" className={styles.company_image} />
          </div>
        ))}
      </RunnigLine>
    </section>
  );
};

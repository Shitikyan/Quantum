import { RegisterButton } from "../../RegisterButton";
import { RunnigLine } from "../General/RunningLine";
import { StatisticChart } from "./Chart";
import { companies } from "./fakeData";

import styles from "./styles.module.scss";

export const Statistics = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>STATISTICS FOR TODAY:</h3>
      <div className={styles.top}>
        <div className={styles.left}>
          <p className={styles.text}>
            Average earnings of a registered user from a deposit of $250:{" "}
            <span className={styles.green}>762$</span>
          </p>
          <p className={styles.text}>
            Registrations on QuantumAI:{" "}
            <span className={styles.green}>114</span>
          </p>
          <p className={styles.text}>
            The Average Earnings Increase:{" "}
            <span className={styles.green}>4x</span>
          </p>
          <p className={styles.text}>
            Places left to register: <span className={styles.red}>5 </span>
          </p>
        </div>
        <StatisticChart
          height={340}
          labels={["first", "second", "third"]}
          aspectRatio={0.7}
          data={[33, 66, 100]}
          color="#00faaa"
          categoryPercentage={0.95}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottom_text}>
          REGISTER FOR FREE TODAY AND GRAB YOUR FIRST PROFIT!
        </p>
        <RegisterButton
          handleClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        />
      </div>
      <RunnigLine repeatCount={3} height={235}>
        {companies.map((item, i) => (
          <div key={i} className={styles.company}>
            <img src={item} alt="company" className={styles.company_image} />
          </div>
        ))}
      </RunnigLine>
    </section>
  );
};

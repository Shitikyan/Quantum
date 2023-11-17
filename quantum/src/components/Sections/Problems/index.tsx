import styles from "./styles.module.scss";

export const Problems = () => {
  return (
    <section>
      <span className={styles.line}></span>
      <h2 className={styles.title}>PROBLEMS</h2>
      <div className={styles.top}>
        <div className={styles.box}>
          <div>
            <p className={styles.descr}>
              Poverty is a global problem that we strive to solve forever. The
              global extreme poverty rate has reached 9.3%, up from 8.4% in
              2022. The recent crises have further distanced the world from the
              Global goal of eradicating extreme poverty by 2030. In Australia,
              more than one in eight people (13.4%) and one in six children
              (16.6%) live below the poverty line after accounting for housing
              costs.
            </p>
            <div className={styles.image_box}></div>
          </div>
          <div>
            <p className={styles.descr}>
              Global suicide due to financial problems has increased by an
              average of 5% and continues to rise. The annual Suicide Prevention
              Australia report shows 70% of Australians are experiencing higher
              than normal stress levels compared to 2022 due to the cost of
              living, debts, and credits. Suicide rates in Australia are on the
              rise.
            </p>
            <div className={styles.image_box}></div>
          </div>
          <div>
            <p className={styles.descr}>
              Global inequality is in bad shape and is basically not improving.
              Today, the richest 10 percent receive 52 percent of all income.
              The poorest half - receive only 8.5 percent. Around 5% of
              Australians experience deep social isolation every year.
            </p>
            <div className={styles.image_box}></div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.bottom_title}>SOLUTION</h2>
        <p className={styles.bottom_descr}>
          QuantumAI is the future of the money world, helping people and the
          World Bank in the fight against global poverty! The goals of the World
          Bank Group are to end extreme poverty and promote shared prosperity.
          Using the capabilities of quantum computing, a team with renowned
          partners and banks led by Elon Musk has succeeded. Every person on the
          platform can now forget about their fears, credits, low income,
          depression, and hunger. In Australia, with the help of QuantumAI, UN
          experts promise a 30% boost to the economy by 2027. Your second
          opportunity to become financially free in 2023 - if you didn't manage
          to do so on Bitcoin in 2018!
        </p>
        <p className={styles.bottom_subtitle}>SO WHAT DO YOU NEED TO START?</p>
        <div className={styles.road_map}>
          <div className={styles.step}>
            <h4 className={styles.step_number}>1</h4>
            <h5 className={styles.step_name}>SIGN UP</h5>
            <p className={styles.step_descr}>REGISTER AN ACCOUNT FOR FREE</p>
          </div>
          <div className={styles.step}>
            <h4 className={styles.step_number}>2</h4>
            <h5 className={styles.step_name}>DEPOSIT</h5>
            <p className={styles.step_descr}>DEPOSIT 250 DOLLARS.</p>
          </div>
          <div className={styles.step}>
            <h4 className={styles.step_number}>3</h4>
            <h5 className={styles.step_name}>PICK</h5>
            <p className={styles.step_descr}>
              PICK THE TRADES QUANTUMAI RECOMMENDS
            </p>
          </div>
          <div className={styles.step}>
            <h4 className={styles.step_number}>4</h4>
            <h5 className={styles.step_name}>WITHDRAW</h5>
            <p className={styles.step_descr}>
              WITHDRAW ANY FUNDS IN MATTER OF HOURS!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

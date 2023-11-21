import { VerticalText } from "@/src/components/VerticalText";
import { Step } from "./Step";
import styles from "./styles.module.scss";

const steps = [
  { number: 1, name: "SIGN UP", descr: "REGISTER AN ACCOUNT FOR FREE" },
  { number: 2, name: "DEPOSIT", descr: "DEPOSIT 250 DOLLARS." },
  { number: 3, name: "PICK", descr: "PICK THE TRADES QUANTUMAI RECOMMENDS" },
  {
    number: 4,
    name: "WITHDRAW",
    descr: " WITHDRAW ANY FUNDS IN MATTER OF HOURS!",
  },
];

export const ProblemsBottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <VerticalText className={styles.title} text="SOLUTION" />
        <span className={styles.line} />
        <span className={styles.red_line} />

        <p className={styles.descr}>
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
        <p className={styles.subtitle}>SO WHAT DO YOU NEED TO START?</p>
        <div className={styles.road_map}>
          {steps.map((step, i) => (
            <Step key={i} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

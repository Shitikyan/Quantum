import { IMainProps } from "./types";

import styles from "./styles.module.scss";
import { General } from "../Sections/General";
import { Investing } from "../Sections/Investing";
import { Problems } from "../Sections/Problems";
import { Advisors } from "../Sections/Advisors";
import { Resilience } from "../Sections/Resilience";
import { Statistics } from "../Sections/Statistics";

export const Main = () => {
  return (
    <main className={styles.container}>
      <General />
      <Investing />
      <Problems />
      <Resilience />
      <Advisors />
      <Statistics />
    </main>
  );
};

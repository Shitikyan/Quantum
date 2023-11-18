import { Form } from "./Form";
import { RotatingText } from "./RotatingText";

import styles from "./styles.module.scss";

export const Promo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_block}>
        <div className={styles.left_block}>
          <h2 className={styles.title}>
            Turning <span className={styles.price1}>$250</span> into{" "}
            <span className={styles.price2}>$9,500</span> in 3 days is
            impossible? With QuantumAI - you can do even more!
          </h2>
          <p className={styles.descr}>
            Best innovative investment platform from Elon Musk 2023 by the Forex
            Awards. Hurry up and register for free right now and get the chance
            to get rid of credits and financial difficulties! Your personal
            manager is already waiting for you!
          </p>
          <Form />
        </div>
        <RotatingText
          text="Play video Play video Play video Play video Play video Play video "
          diameter={320}
        >
          <div className={styles.right_block}>
            <video autoPlay controls>
              <source src="https://gravetechno-jy.cloud/lander/quantum-ai4-en-eu-ca-au-gb-sg-hk/video.mp4" />
            </video>
          </div>
        </RotatingText>
      </div>
    </div>
  );
};

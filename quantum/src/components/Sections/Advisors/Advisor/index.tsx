import { DoubleImage } from "@/src/components/DoubleImage";
import { IAdvisorProps } from "./types";

import styles from "./styles.module.scss";

export const Advisor = ({ name, about, descr,src }: IAdvisorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <DoubleImage
          type="small"
          hasShadow={false}
          src={src}
          shadowColor="green"
          height={130}
          width={100}
        />
        <div className={styles.text_info}>
          <span className={styles.name}>{name}</span>
          <p className={styles.about}>{about}</p>
        </div>
      </div>
      <p className={styles.descr}>{descr}</p>
    </div>
  );
};

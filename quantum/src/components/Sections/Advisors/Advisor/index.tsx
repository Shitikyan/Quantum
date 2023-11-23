import { DoubleImage } from "@/src/components/DoubleImage";
import { IAdvisorProps } from "./types";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Advisor = ({ name, about, descr, src }: IAdvisorProps) => {
  const [height, setHeight] = useState(130);
  const isSmallDevice = useMediaQuery({ maxWidth: 1100 });
  const isSmallestDevice = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (isSmallDevice) {
      setHeight(110);
    } else if (isSmallestDevice) {
      setHeight(160);
    }
  }, [isSmallDevice, isSmallestDevice]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <DoubleImage
          type="small"
          hasShadow={false}
          src={src}
          shadowColor="green"
          height={height}
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

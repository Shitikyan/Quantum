import { DoubleImage } from "@/src/components/DoubleImage";
import { IAdvisorProps } from "./types";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Advisor = ({ name, about, descr, src }: IAdvisorProps) => {
  const [height, setHeight] = useState<number | "initial">(130);
  const [width, setWidth] = useState<number | "initial">(100);
  const isSmallDevice = useMediaQuery({ maxWidth: 1100 });
  const isSmallestDevice = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (isSmallDevice) {
      setHeight(110);
    } else if (isSmallestDevice) {
      setHeight("initial");
      setWidth("initial");
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
          width={width}
          className={styles.image}
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

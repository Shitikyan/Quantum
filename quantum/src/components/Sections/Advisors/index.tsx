import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Advisor } from "./Advisor";
import { advisors } from "./fakeData";

import styles from "./styles.module.scss";
import { revealFn } from "@/src/utils/reveal";

export const Advisors = () => {
  const [animated, setAnimated] = useState({
    slides: "",
  });

  const ref = useRef<HTMLDivElement>(null);
  const callBack = () => {
    setAnimated({
      slides: "swiper-animated",
    });
    window.removeEventListener("scroll", reveal);
  };
  const reveal = useCallback(() => revealFn(callBack, ref), []);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.container} swiper_container ${animated.slides}`}
    >
      <div className={styles.firstSlideMobile}>
        <div className={styles.text}>
          <h4 className={styles.title}>Advisors</h4>
          <p className={styles.descr}>
            QuantumAI has wide support among investors. Among them are the
            brightest scientists, businessmen and
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        initialSlide={1}
        centeredSlides={true}
        spaceBetween={30}
      >
        <SwiperSlide className={styles.firstSlide}>
          <div className={styles.text}>
            <h4 className={styles.title}>Advisors</h4>
            <p className={styles.descr}>
              QuantumAI has wide support among investors. Among them are the
              brightest scientists, businessmen and
            </p>
          </div>
        </SwiperSlide>
        {advisors.map((advisor, i) => (
          <SwiperSlide key={i}>
            <Advisor
              src={advisor.src}
              name={advisor.name}
              about={advisor.about}
              descr={advisor.descr}
            ></Advisor>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

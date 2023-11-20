import { Swiper, SwiperSlide } from "swiper/react";
import { Advisor } from "./Advisor";

import styles from "./styles.module.scss";

const advisors = [
  {
    src: "https://i.pinimg.com/736x/87/b3/13/87b313fa75c39e18cfa2e42343251ab7.jpg",
    name: "Jeff Bezos:",
    about: `Technology entrepreneur, investor, and philanthropist`,

    descr: `Quantum computing is the future. I’m not exaggerating when I say it
            will change everything. This is the early days of quantum computing;
            not many people know about it, which means very few are using it.
            The few that are, are making incredibly wise (and profitable)
            decisions.`,
  },
  {
    src: "data:image/jpeg;base64,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",
    name: "Keith Rupert Murdoch:",
    about: `Australian and American entrepreneur, media tycoon, and owner of media`,

    descr: `Today, people with access to the QuantumAI platform can safely and
            legally raise their income - beyond belief! If I had had the
            opportunity to do so in my years, I would not have even considered
            collaborating with the Quantum Machine!`,
  },
  {
    src: "https://assets-global.website-files.com/5de98c06bb83ab1e27fc1c95/616170db2ebb56e0ea3f969b_5de98c06bb83abc80bfc22bf_BillGates.jpg",
    name: "Bill Gates:",
    about: `Business magnate, investor, author, philanthropist, and humanitarian`,

    descr: `I know for a fact Elon has spent $3 billion of his own money to fund
            this program. Hats off to him for that – that’s $3 billion of his
            own money to fund a better future for everyone, and to help others
            make profits that’ll help him do so! It’s a win-win, and I’m very
            excited to see where it goes.`,
  },
];

export const Advisors = () => {
  return (
    <section className={`${styles.container} swiper_container`}>
      <Swiper
        slidesPerView={"auto"}
        initialSlide={1}
        centeredSlides={true}
        spaceBetween={30}
      >
        <SwiperSlide>
          <div className={styles.text}>
            <h4 className={styles.title}>Advisors</h4>
            <p className={styles.descr}>
              QuantumAI has wide support among investors. Among them are the
              brightest scientists, businessmen and
            </p>
          </div>
        </SwiperSlide>
        {advisors.map((advisor, i) => (
          <SwiperSlide>
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

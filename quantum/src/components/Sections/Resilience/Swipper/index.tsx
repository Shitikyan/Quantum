import stlyes from "./styles.module.scss";

export const Swipper = () => {
  return (
    <div className={stlyes.contaiener}>
      <ul className={stlyes.list}>
        <li className={stlyes.item}>
          <div className={stlyes.box}>
            <div className={stlyes.double_image}></div>
            <div className={stlyes.info}>
              <h6 className={stlyes.info_name}>Jeff Bezos:</h6>
              <p className={stlyes.info_descr}>
                Technology entrepreneur, investor, and philanthropist
              </p>
            </div>
          </div>
          <p className={stlyes.descr}>
            Quantum computing is the future. I’m not exaggerating when I say it
            will change everything. This is the early days of quantum computing;
            not many people know about it, which means very few are using it.
            The few that are, are making incredibly wise (and profitable)
            decisions.
          </p>
        </li>
        <li className={stlyes.item}>
          <div className={stlyes.box}>
            <div className={stlyes.double_image}></div>
            <div className={stlyes.info}>
              <h6 className={stlyes.info_name}>Keith Rupert Murdoch:</h6>
              <p className={stlyes.info_descr}>
                Australian and American entrepreneur, media tycoon, and owner of
                media
              </p>
            </div>
          </div>
          <p className={stlyes.descr}>
            Today, people with access to the QuantumAI platform can safely and
            legally raise their income - beyond belief! If I had had the
            opportunity to do so in my years, I would not have even considered
            collaborating with the Quantum Machine!
          </p>
        </li>
        <li className={stlyes.item}>
          <div className={stlyes.box}>
            <div className={stlyes.double_image}></div>
            <div className={stlyes.info}>
              <h6 className={stlyes.info_name}>Bill Gates:</h6>
              <p className={stlyes.info_descr}>
                Business magnate, investor, author, philanthropist, and
                humanitarian
              </p>
            </div>
          </div>
          <p className={stlyes.descr}>
            I know for a fact Elon has spent $3 billion of his own money to fund
            this program. Hats off to him for that – that’s $3 billion of his
            own money to fund a better future for everyone, and to help others
            make profits that’ll help him do so! It’s a win-win, and I’m very
            excited to see where it goes.
          </p>
        </li>
        <li className={stlyes.item}>
          <div className={stlyes.box}>
            <div className={stlyes.double_image}></div>
            <div className={stlyes.info}>
              <h6 className={stlyes.info_name}>Changpeng Zhao:</h6>
              <p className={stlyes.info_descr}>
                Co-founder and CEO of Binance, the world's largest
                cryptocurrency exchange
              </p>
            </div>
          </div>
          <p className={stlyes.descr}>
            QuantumAI is not our competitor! We want to achieve the common goal
            - the elimination of poverty in every country. On behalf of myself
            and the Binance team, I would like to thank Elon Musk and QuantumAI.
            Finally, there is a platform that is changing people's lives, not
            just in words - but in deeds!
          </p>
        </li>
      </ul>
    </div>
  );
};

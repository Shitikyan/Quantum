import poverty from "@/public/images/poverty.jpg";
import suicide from "@/public/images/suicide.jpg";
import inequality from "@/public/images/inequality.jpg";

export const problemArr = [
  {
    src: poverty.src,
    text1: `problem that we strive to solve forever. The global extreme poverty
            rate has reached 9.3%, up from 8.4% in 2022. The recent crises have
            further distanced the world from the Global goal of eradicating
            extreme poverty by 2030.`,
    text2: `In Australia, more than one in eight people (13.4%) and one in six
              children (16.6%) live below the poverty line after accounting for
              housing costs.`,
    underlined: "Poverty",
  },
  {
    src: suicide.src,
    text1: `due to financial problems has increased by an average
            of 5% and continues to rise.`,
    text2: `The annual Suicide Prevention Australia report shows 70% of Australians are experiencing higher than normal stress levels compared to 2022 due to the cost of living, debts, and credits. Suicide rates in Australia are on the rise.`,
    underlined: "Global suicide",
  },
  {
    src: inequality.src,
    text1: `is in bad shape and is basically not improving. Today, the richest 10 percent receive 52 percent of all income. The poorest half - receive only 8.5 percent.`,
    text2: `Around 5% of Australians experience deep social isolation every year.`,
    underlined: "Global inequality",
  },
];

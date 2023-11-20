import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import styles from "./styles.module.scss";
import { IChartProps } from "./types";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const StatisticChart = ({
  labels,
  aspectRatio,
  data,
  color,
  categoryPercentage,
  height = "initial",
}: IChartProps) => {
  const options = {
    aspectRatio,
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data,
        backgroundColor: color,
        borderRadius: 10,
        categoryPercentage,
      },
    ],
  };
  return (
    <div style={{ height }} className={styles.container}>
      <Bar options={options} data={chartData} />
    </div>
  );
};

export interface IChartProps {
  labels: Array<string>;
  aspectRatio: number;
  data: Array<number>;
  color: string;
  categoryPercentage: number;
  height?: number | "initial";
}

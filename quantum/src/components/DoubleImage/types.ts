export interface IDoubleImageProps {
  width: number;
  height: number;
  shadowColor: "red" | "green";
  src: string;
  hasShadow?: boolean;
  type?: "big" | "small";
}

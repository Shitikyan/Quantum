export interface IDoubleImageProps {
  width: number | "initial";
  height: number | "initial";
  shadowColor: "red" | "green";
  src: string;
  hasShadow?: boolean;
  type?: "big" | "small";
  rightShadow?: boolean;
}

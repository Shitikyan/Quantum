export interface IDoubleImageProps {
  width?: number | "initial";
  height?: number | "initial";
  className?: string;
  shadowColor: "red" | "green";
  src: string;
  hasShadow?: boolean;
  type?: "big" | "small";
  rightShadow?: boolean;
}

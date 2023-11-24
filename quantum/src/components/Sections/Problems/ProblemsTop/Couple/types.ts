export interface ICoupleProps {
  reversed: boolean;
  item: {
    src: string;
    text1: string;
    text2: string;
    underlined: string;
  };
}

export type TImageSize = {
  width: number | "initial";
  height: number | "initial";
};

export type TAnimation = {
  couple: string;
};

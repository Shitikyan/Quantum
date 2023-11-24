import { RefObject } from "react";

export const revealFn = (
  callBack: () => void,
  ref: RefObject<HTMLDivElement>
) => {
  const reveals = ref.current;
  if (reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals.getBoundingClientRect().top;
    const elementVisible = windowHeight/2;

    if (elementTop < windowHeight - elementVisible) {
      callBack();
    }
  }
};

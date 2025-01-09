import { HEADER } from "@constants/layout";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { RefObject, useState } from "react";

type ReturnType = {
  isOffset: boolean;
  scrollToTop: (viewRef?: RefObject<HTMLDivElement>) => void;
};

interface UseScrollOptions extends Omit<ScrollOptions, "container" | "target"> {
  container?: React.RefObject<HTMLElement>;
  target?: React.RefObject<HTMLElement>;
}

export default function useOffSetTop(
  top = 100,
  options?: UseScrollOptions
): ReturnType {
  const { scrollY } = useScroll(options);

  const [value, setValue] = useState(false);

  const scrollToTop = (viewRef?: RefObject<HTMLDivElement> | null) => {
    if (viewRef) {
      if (viewRef.current) {
        window.scrollTo(
          0,
          viewRef.current.offsetTop - HEADER.H_DASHBOARD_DESKTOP
        );
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  useMotionValueEvent(scrollY, "change", (scrollHeight) => {
    if (scrollHeight > top) {
      setValue(true);
    } else {
      setValue(false);
    }
  });

  return { isOffset: value, scrollToTop };
}

// Usage
// const offset = useOffSetTop(100);

// Or
// const offset = useOffSetTop(100, {
//   container: ref,
// });

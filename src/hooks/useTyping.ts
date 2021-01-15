import { ReactNodeArray, useEffect, useRef, useState } from "react";

const useTyping = (
  children: ReactNodeArray,
  interval: number = 200,
  delay: number = 0
): { list?: ReactNodeArray; typing: boolean } => {
  const timerRef = useRef<number>();
  const [list, setValue] = useState<ReactNodeArray>();
  useEffect(() => {
    setTimeout(() => {
      timerRef.current = window.setInterval(() => {
        setValue((val = []) => {
          if (val.length === children.length - 1) {
            clearTimeout(timerRef.current);
          }
          return children.slice(0, val.length + 1);
        });
      }, interval);
    }, delay);
    return () => clearInterval(timerRef.current);
  }, [children, interval, delay]);
  return { list, typing: list?.length !== children.length };
};

export default useTyping;

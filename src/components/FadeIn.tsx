import React, { CSSProperties, useEffect, useState } from "react";

const FadeIn: React.FC<{
  duration?: number;
  delay?: number;
  style?: CSSProperties;
}> = ({ children, duration = 2, delay = 0, style }) => {
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    setOpacity(1);
  }, []);
  return (
    <div
      style={{
        ...style,
        opacity: opacity,
        transition: `opacity ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

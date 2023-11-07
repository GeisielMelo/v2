import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [position, setPosition] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPosition(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return position;
};

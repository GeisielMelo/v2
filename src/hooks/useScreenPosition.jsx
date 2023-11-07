import { useState, useEffect } from "react";

export const useScreenPosition = () => {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

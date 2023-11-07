import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const HideMotion = ({ children, isVisible, delay = 0.2 }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5, delay: delay },
      });
    }
  }, [isVisible, controls, delay]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export const OpacityMotion = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const UpMotion = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

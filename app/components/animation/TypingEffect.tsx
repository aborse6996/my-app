"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TypingEffect = ({ text, delay }: { text: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <h1 ref={ref}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: delay + index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default TypingEffect;

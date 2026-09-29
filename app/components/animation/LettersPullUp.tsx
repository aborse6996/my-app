"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LettersPullUp = ({ text, delay=0 }: { text: string, delay:number }) => {
  const splittedText = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pullupvariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.05,
      },
    }),
  };

  return (
    <motion.div className="flex">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupvariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LettersPullUp;

"use client";

import React from "react";

import { motion } from "motion/react";

const Blurin = ({ children, delay }: { children: React.ReactNode, delay:number }) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default Blurin;

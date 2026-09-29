"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

const FadeDivUp = ({children, className="", delay} : {children:React.ReactNode, className:string, delay:number}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDivUp;

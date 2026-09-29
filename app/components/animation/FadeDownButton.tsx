"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeDownButton = ({
  image,
  className,
  delay,
  text = "",
}: {
  image: string;
  className: string;
  delay: number;
  text?: string;
}) => {
  return (
    <motion.button
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
    >
      <div className="flex gap-3">
        <Image src={image} alt="" className="w-5 h-5" />
        {text && <h1>{text}</h1>}
      </div>
    </motion.button>
  );
};

export default FadeDownButton;

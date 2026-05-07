import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RollingText = ({ text, delayOffset = 0, animateOnScroll = false }) => {
  const ref = useRef(null);
  // useInView with a root margin so it triggers before the text enters viewport
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  // For mount-based animation, always show. For scroll, wait for inView.
  const shouldAnimate = animateOnScroll ? inView : true;

  return (
    <span ref={ref} className="inline-flex overflow-hidden py-1 select-none">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "110%" }}
          animate={shouldAnimate ? { y: "0%" } : { y: "110%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: (index + delayOffset) * 0.03,
          }}
          className="relative inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default RollingText;

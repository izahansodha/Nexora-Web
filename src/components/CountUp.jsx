import { useState } from "react";
import { motion } from "motion/react";

export function CountUp({ end, duration = 2, suffix = "" }) {
  const styles = {
    ".stat strong": {
      fontFamily: "Space Grotesk",
      color: "#fff",
      fontSize: "80px",
      fontWeight: "700",
      lineHeight: "1",
    },
  }
  const [count, setCount] = useState(0);

  const startCounting = () => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={startCounting}
      className="count-up"
      style={styles[".stat strong"]}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

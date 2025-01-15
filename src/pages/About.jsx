import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        About
      </motion.div>
    </>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Animation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const About = () => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={Animation}
    >
      <h1>About Page</h1>
    </motion.div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Animation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const BackendTeam = () => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={Animation}
    >
      <h1>BackendTeam</h1>
    </motion.div>
  );
};

export default BackendTeam;

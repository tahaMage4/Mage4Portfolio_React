import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Animation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Member = () => {
  return (
    <>
      <motion.div
        animate="visible"
        initial="hidden"
        exit="hidden"
        variants={Animation}
      >
        <Link to="backend">
          <button> Backend</button>
        </Link>
        <br></br>
        <Link to="frontend">
          <button> Frontend</button>
        </Link>
      </motion.div>
    </>
  );
};

export default Member;

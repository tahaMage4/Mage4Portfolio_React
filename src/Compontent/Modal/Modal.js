import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal, filterdata }) => {
  console.log("datafilter", filterdata);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modal}
            animate="visible"
            initial="hidden"
          >
            {filterdata.map((filter) => (
              <div key={filter.id}>
                <motion.ul
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: 1.2,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <li>{filter.name}</li>
                  <li>{filter.title}</li>
                  <li>{filter.skill}</li>
                </motion.ul>
              </div>
            ))}

            <button onClick={() => setShowModal(false)}> X </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

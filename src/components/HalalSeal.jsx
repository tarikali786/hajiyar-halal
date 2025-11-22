import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HalalSeal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="position-fixed bottom-0 end-0 m-3 p-2 bg-success text-white rounded-circle shadow-lg"
        style={{ zIndex: 1050, cursor: "pointer" }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(true)}
      >
        <i className="bi bi-patch-check-fill fs-4"></i>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
            style={{ zIndex: 1060 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-4 p-4 text-center shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <i className="bi bi-patch-check-fill text-success fs-1 mb-3"></i>
              <h5 className="fw-bold text-success mb-2">
                100% Halal & Shariah Compliant
              </h5>
              <p className="text-muted small">
                All our ventures are verified by certified Islamic business
                advisors and operate under halal investment principles.
              </p>
              <button
                className="btn btn-success px-4 mt-3"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HalalSeal;

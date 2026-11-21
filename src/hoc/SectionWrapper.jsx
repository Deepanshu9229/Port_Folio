import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="sm:px-12 px-6 sm:py-12 py-8 max-w-6xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span> 
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;


// higher order section (hoc) -> sab ko equal padding ya center krna history(constant margin in page)

import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    console.log("Rendering Component with id:", idName); // Debugging log

    return (
      <motion.section
        variants={staggerContainer()} //animate
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* <span className="hash-span" id={idName}>
          &nbsp;
        </span> */} 
        {/* //for scroll button in center */}

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

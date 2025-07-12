import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero Text and Line */}
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5 mx-7 sm:mx-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-start">
          <h1 className={`${styles.heroHeadText} text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight`}>
            Hi, I'm <span className="text-[#915EFF]">Deepanshu Patel</span>
          </h1>
          <p className={`${styles.heroSubText} text-white text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 max-w-3xl`}>
            Aspiring Software Developer
          </p>
        </div>
      </div>

      {/* 3D Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="  absolute xs:bottom-10 bottom-25 w-full flex justify-center items-center ">
        <a className="opacity-50" href="#about">
          <div className=" bg-transparent w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary border-opacity-50 flex justify-center items-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=" bg-[#915EFF] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Hero Text and Line */}
      <div
        className={`absolute inset-0 top-[85px] sm:top-[100px] max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 sm:gap-5 z-10 pointer-events-none`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-3 mr-1 sm:mr-2">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-36 sm:h-64 violet-gradient" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-start pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white font-bold leading-tight`}>
            Hi, I'm <span className="text-[#915EFF]">Deepanshu Patel</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-1.5 sm:mt-2 max-w-2xl`}>
            Software Engineer <span className="text-secondary font-normal sm:inline block">| React, TypeScript &amp; Enterprise Platforms</span>
          </p>
          <p className="mt-1.5 sm:mt-2 text-gray-300 text-xs sm:text-[13.5px] max-w-xl leading-relaxed">
            Building scalable enterprise platforms with end-to-end focus on performance optimization, VAPT security, real-time SSE, and granular RBAC access control.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#7a44df] text-white font-medium py-1.5 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-1.5 text-xs sm:text-[13.5px]"
            >
              <span>View Resume</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <a
              href="https://github.com/Deepanshu9229"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-1.5 px-3.5 rounded-lg border border-secondary/30 transition-all text-xs sm:text-[13.5px]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/deepanshu-offi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-1.5 px-3.5 rounded-lg border border-secondary/30 transition-all text-xs sm:text-[13.5px]"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Deepanshu_018/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-1.5 px-3.5 rounded-lg border border-secondary/30 transition-all text-xs sm:text-[13.5px]"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* 3D Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-6 bottom-6 sm:bottom-8 w-full flex justify-center items-center z-10">
        <a className="opacity-60 hover:opacity-100 transition-opacity" href="#about">
          <div className="bg-transparent w-[26px] h-[46px] sm:w-[28px] sm:h-[50px] rounded-3xl border-2 border-secondary border-opacity-50 flex justify-center items-center p-1.5">
            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-[#915EFF] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Hero Text and Line */}
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-6 z-10 pointer-events-none`}
      >
        {/* Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5 mr-1 sm:mr-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-start pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white font-bold leading-tight`}>
            Hi, I'm <span className="text-[#915EFF]">Deepanshu Patel</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-2 sm:mt-3 max-w-3xl`}>
            Software Engineer <span className="text-secondary font-normal sm:inline block">| React, TypeScript &amp; Enterprise Platforms</span>
          </p>
          <p className="mt-2 text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Building scalable enterprise platforms with end-to-end focus on performance optimization, VAPT security, real-time SSE, and granular RBAC access control.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#7a44df] text-white font-medium py-2.5 px-5 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>View Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <a
              href="https://github.com/Deepanshu9229"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-2.5 px-4 rounded-xl border border-secondary/30 transition-all text-sm sm:text-base"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/deepanshu-offi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-2.5 px-4 rounded-xl border border-secondary/30 transition-all text-sm sm:text-base"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Deepanshu_018/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#28224b] text-white font-medium py-2.5 px-4 rounded-xl border border-secondary/30 transition-all text-sm sm:text-base"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* 3D Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-8 bottom-8 sm:bottom-10 w-full flex justify-center items-center z-10">
        <a className="opacity-60 hover:opacity-100 transition-opacity" href="#about">
          <div className="bg-transparent w-[30px] h-[52px] sm:w-[34px] sm:h-[60px] rounded-3xl border-4 border-secondary border-opacity-50 flex justify-center items-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-[#915EFF] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

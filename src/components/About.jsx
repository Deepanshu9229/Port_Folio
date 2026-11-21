import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full max-w-[260px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-6 px-5 min-h-[260px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-14 h-14 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[16px] sm:text-[17px] font-bold text-center leading-snug'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-400 text-[15px] sm:text-[16px] max-w-3xl leading-[26px]'
      >
        I am a Software Engineer (1+ year) building scalable enterprise web platforms with React, TypeScript, and modern backend architectures. Currently shipping performance, security (VAPT), real-time (SSE), and access-control (RBAC) features end to end at Leucine, from root-cause debugging to production.
        <br /><br />
        I specialize in frontend performance engineering (76% bundle size reduction, dynamic chunk splitting, runtime O(1) optimizations), architecting dynamic backend-driven permission engines, and deploying applied AI/LLM orchestration workflows with Docker and n8n.
      </motion.p>

      {/* 4 Cards in 1 Row on Desktop */}
      <div className='mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 justify-items-center w-full'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

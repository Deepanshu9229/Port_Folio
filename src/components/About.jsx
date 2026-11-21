import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[240px] sm:w-[250px]'>
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
        className='bg-tertiary rounded-[20px] py-6 px-10 min-h-[270px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] sm:text-[19px] font-bold text-center leading-snug'>
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
        className='mt-4 text-gray-400 text-[16px] sm:text-[17px] max-w-3xl leading-[28px]'
      >
        I am a Software Engineer (1+ year) building scalable enterprise web platforms with React, TypeScript, and modern backend architectures. Currently shipping performance, security (VAPT), real-time (SSE), and access-control (RBAC) features end to end at Leucine, from root-cause debugging to production.
        <br /><br />
        I specialize in frontend performance engineering (76% bundle size reduction, dynamic chunk splitting, runtime O(1) optimizations), architecting dynamic backend-driven permission engines, and deploying applied AI/LLM orchestration workflows with Docker and n8n.
      </motion.p>

      <div className='mt-16 flex flex-row gap-8 flex-wrap justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

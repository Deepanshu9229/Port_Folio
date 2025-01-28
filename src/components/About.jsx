import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[250px] '>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-purple-950 text-[20px] font-bold text-center'>
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
        className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate aspiring Software Development Engineer (SDE) and a Machine Learning enthusiast driven by a curiosity to solve real-world problems with efficient solutions. With a strong foundation in programming, data structures, and algorithms, I strive to build impactful applications that blend technology with innovation.

        I’m particularly interested in Full-Stack Development, AI and Data Science with a focus on creating systems that optimize performance and improve user experiences.
      </motion.p>

      <div className='mt-20 flex flex-row gap-10 flex-wrap '>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};
//using higher order component (component,id)
export default SectionWrapper(About, "about");
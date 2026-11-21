import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full flex flex-col justify-between min-h-[460px]'
      >
        <div>
          <div className='relative w-full h-[220px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
              {live_demo_link && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  title="Live Demo"
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                title="Source Code"
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[22px] leading-snug'>{name}</h3>
            <p className='mt-2.5 text-secondary text-[13.5px] leading-relaxed'>{description}</p>
          </div>
        </div>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-400 text-[16px] sm:text-[17px] max-w-3xl leading-[28px]'
        >
          The following projects showcase my skills through real-world systems engineering and full-stack development. Each project includes links to code repositories and live demonstrations.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap flex-row gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");

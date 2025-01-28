import {Reac, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {

const formRef = useRef()
const [form, setForm] = useState({name:'', email:'', message:''})
const [loading, setLoading] = useState(false)

const handleChange = (e) => {}

const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-8 xl:flex-row flex-col-reverse flex gap-2 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.7.5] w-full max-w-[600px] p-6 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Feel free to</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter your Name' className='bg-purple-950 py-4 px-5 placeholder:text-gray rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter your Email Id' className='bg-purple-950 py-4 px-5 placeholder:text-gray rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Anything want to say</span>
            <textarea rows="3" name='message' value={form.message} onChange={handleChange} placeholder='Enter your Message' className='bg-purple-950 py-4 px-5 placeholder:text-gray rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submmit' className='bg-white py-3 px-8 outline-none w-fit text-black font-bold shadow-ms shadow rounded-xl'>{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full'>
        <EarthCanvas />
      </motion.div>

      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
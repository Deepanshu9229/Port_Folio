import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_sab042u",
      "template_c7dkgog",
      {
        from_name: form.name,
        to_name: "Deepanshu Patel",
        from_email: form.email,
        to_email: 'deepanshupatel9229@gmail.com',
        message: form.message,
      },
      'LiykpwxAvl-w5cT79'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong, Email not sent.')
    })
  }

  return (
    <div className='xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)} 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Quick Contact & Social Cards */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-secondary">
          <div className="flex items-center gap-2 bg-tertiary px-3 py-1.5 rounded-lg">
            <span>📍</span> Bengaluru, India
          </div>
          <a href="mailto:deepanshupatel9229@gmail.com" className="flex items-center gap-2 bg-tertiary hover:bg-[#28224b] text-white px-3 py-1.5 rounded-lg transition-colors">
            <span>✉️</span> deepanshupatel9229@gmail.com
          </a>
          <a href="tel:+917974734229" className="flex items-center gap-2 bg-tertiary hover:bg-[#28224b] text-white px-3 py-1.5 rounded-lg transition-colors">
            <span>📞</span> +91 7974734229
          </a>
          <a href="https://www.linkedin.com/in/deepanshu-offi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#915EFF]/20 hover:bg-[#915EFF]/40 text-[#915EFF] border border-[#915EFF]/40 px-3 py-1.5 rounded-lg transition-colors font-medium">
            LinkedIn ↗
          </a>
          <a href="https://github.com/Deepanshu9229" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-tertiary hover:bg-[#28224b] text-white px-3 py-1.5 rounded-lg transition-colors">
            GitHub ↗
          </a>
          <a href="https://leetcode.com/u/Deepanshu_018/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-tertiary hover:bg-[#28224b] text-white px-3 py-1.5 rounded-lg transition-colors">
            LeetCode ↗
          </a>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-6' >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input 
              type="text" 
              name='name' 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?" 
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input 
              type="email" 
              name='email' 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email address?" 
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea 
              rows="4" 
              name='message' 
              value={form.message} 
              onChange={handleChange} 
              placeholder='What would you like to discuss?' 
              className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none' 
            />
          </label>
          <button 
            type='submit' 
            className='bg-[#915EFF] hover:bg-[#7a44df] py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl transition-all'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

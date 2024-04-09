import React from 'react'
import {motion} from "framer-motion"
import { useRef } from 'react'
import { Link } from 'react-scroll'
import Download from './Download'


const Hero = () => {
  
  
  return (
    <div>

        <section className="min-h-screen flex flex-col justify-center">

          <motion.div 
          // initial={{x:"-100vw"}}
          // animate={{x:0}}
          // transition={{delay:0.2, duration:0.8,type:'spring',stiffness:100}}
          // viewport={{
          //   once:true,
          // }} 
          className="text-center p-6">
            <h2 className="text-4xl py-2 text-slate-200 font-mono font-semibold sm:text-5xl md:text-5xl">Deen</h2>
            <h3 className="text-3xl py-2 font-semibold text-slate-200 text-center font-mono sm:text-4xl md:text-4xl">!Frontend Developer</h3>
            <p className="text-md py-6 leading-6 text-slate-400 md:text-lg max-w-4xl mx-auto font-mono">
                Hey! I'm Deen kumaran 👋, frontend developer,optimist and learner. I have a strong knowledge in HTML, CSS, JavaScript, and frameworks like React, Currently learning Next.js. Let's build something remarkable together.
            </p>
          </motion.div>


          <div className='flex justify-center gap-6 mt-16'>
            <div>
              <Download/>
            </div>

            <div>
              <Link to='contact' smooth = {true} duration={500} className='border-2 border-solid border-teal-500 border-opacity-30 px-3 py-2 font-mono text-md sm:text-xl rounded-sm text-slate-200 hover:border-teal-700 hover:ease-in-out duration-300 cursor-pointer'>Contact</Link>
            </div>
          </div>

        </section>
    </div>
  )
}

export default Hero
import React from 'react'
import {motion} from 'framer-motion'
import { skills } from './skillData'


const fadeAnimation = {
    initial:{
        opacity:0,
        y:100,
    },
    animate : (index) => ({
        opacity:1,
        y:0,
    transition:{
        delay: 0.05 * index,
    }
    })
}

const Skills = () => {

    const skillData = skills.map((skill,index) => 
    <motion.li className='text-md border-solid border-teal-500 border-opacity-30 border-2 font-mono px-4 py-1 sm:text-xl'
        key={index}
        variants={fadeAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
            once:true
        }}
        custom={index}
        >
            {skill}
    </motion.li>)

  return (
    <motion.div className='min-h-screen flex flex-col justify-center items-center gap-16'>
        <div>
            <h1 className='text-3xl sm:text-4xl font-mono font-semibold text-center text-slate-200 md:text-5xl'>My Skills</h1>
        </div>

        <motion.ul className='w-auto flex justify-center flex-wrap gap-4 text-slate-200 md:max-w-5xl'>
            {skillData}
        </motion.ul>
    </motion.div>
  )
}

export default Skills
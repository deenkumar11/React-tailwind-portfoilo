import React from 'react'
import {motion} from 'framer-motion'


const About = () => {

  return (
    <motion.div>

        <section className="min-h-screen flex flex-col justify-center p-6">
          <motion.div className='md:flex justify-center items-center gap-6'>
            <div className='md:w-1/2'>
            <h3 className="text-3xl py-10 text-center text-slate-200 font-mono font-semibold md:text-5xl">What I Do ?</h3>
            </div>
            <div className='md:w-1/2'>
            <p className="text-md font-mono text-slate-400 leading-6 mx-auto md:text-lg max-w-4xl text-center md:text-start mb-4">
              Hello! I'm Deen, a frontend maestro armed with a Bachelor's in Engineering in ECE.I weave wonders with HTML, CSS, JavaScript and React.js. Currently, I'm on a mystical journey into the realms of Next.js, seeking new spells to cast.Join me, and together, we'll weave spells of wonder! 🪄🌟🎩...
            </p>
            <p className='text-md font-mono text-slate-400 leading-6 mx-auto md:text-lg max-w-4xl text-center md:text-start mb-4'>
               I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
            </p>
            </div>
          </motion.div>
          
        </section>
    </motion.div>
  )
}

export default About
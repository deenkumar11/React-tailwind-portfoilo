import React from 'react'
import {motion} from 'framer-motion'


const Portfolio = () => {

  return (
    <motion.div>

    <section className="min-h-screen px-12 flex flex-col justify-center items-center">

    <div className="py-12">
    <h1 className="text-center text-3xl sm:text-4xl font-mono font-semibold text-slate-200 md:text-5xl">Portfolio</h1>
    </div>


    <div className="grid lg:grid-cols-2  gap-4 justify-center">

    <motion.div className="w-auto sm:w-[450px] md:w-[550px] h-auto rounded-md border-solid border-2 border-opacity-10 border-teal-300 overflow-hidden cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150">
        <div className="bg-[url('./assets/Image-search.jpg')] bg-cover h-[250px] w-auto rounded-md">
        </div>

        <div className="px-4 py-4">
        <h3 className="text-xl text-slate-200 font-semibold font-mono">Image Generator Powered by Unsplash</h3>
        <p className="text-md text-slate-400 mt-3 font-mono">
           A image generator fueled by the Unsplash API. Access a vast library of high-quality, royalty-free images instantly to enhance your projects. Search, customize, and integrate visuals seamlessly, transforming the way you incorporate images into your work.
        </p>
        <ul className='flex flex-wrap mt-2'>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">HTML</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">CSS</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">JavaScript</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">React JS</div>
          </li>
        </ul>
        </div>
    </motion.div>


    <motion.div className="w-auto sm:w-[450px] md:w-[550px] h-auto rounded-md border-solid border-2 border-opacity-10 border-teal-300 overflow-hidden cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150">
        <div className="bg-[url('./assets/job-application-unsplash.jpg')] bg-cover h-[250px] w-auto rounded-md">
        </div>

        <div className="px-4 py-4">
        <h3 className="text-xl text-slate-200 font-semibold font-mono">TrackIT</h3>
        <p className="text-md text-slate-400 mt-3 font-mono">
            Your Job Application Companion. With Next.js integration, effortlessly organize, monitor, and streamline your job hunt. Stay on top of applications, set reminders, and track progress—all in one intuitive platform. Simplify your job search journey with TrackIt.
        </p>
        <ul className='flex flex-wrap mt-2'>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">HTML</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">CSS</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">Next JS</div>
          </li>

          <li className='mr-2 mt-2'>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium font-mono leading-5 text-teal-300 ">React JS</div>
          </li>
        </ul>
        </div>
    </motion.div>

    </div>
    </section>

    </motion.div>
  )
}

export default Portfolio
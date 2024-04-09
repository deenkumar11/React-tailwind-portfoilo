import React, { useState , useRef } from "react"
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Footer from "./components/footer";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";



function App() {


return (


    <div>

    <div className='fixed w-full h-[60px]  bg-[#003049] overflow-hidden z-10 px-8 md:flex justify-between items-center'>


    <div className="">
      <Link to="hero" smooth = {true} duration={500}>
      <h1 className="font-mono text-3xl text-slate-200  cursor-pointer hover:text-slate-400 invisible md:visible md:text-4xl">DEEN</h1>
      </Link>
    </div>


    <motion.div>
    <ul className='flex justify-center gap-3 sm:gap-6 items-center'>

    <li className='text-md text-slate-200 font-mono uppercase cursor-pointer sm:text-xl hover:text-slate-400'>
      <Link to="hero" smooth = {true} duration={500}>
            Home
          </Link>
        </li>

        <li className='text-md text-slate-200 font-mono uppercase cursor-pointer sm:text-xl hover:text-slate-400'>
          <Link to="about" smooth = {true} duration={500}>
            About
          </Link>
        </li>

        <li className='text-md text-slate-200 font-mono uppercase cursor-pointer sm:text-xl  hover:text-slate-400'>
        <Link to="skills" smooth ={true} duration={500}>Skills</Link>
        </li>

        <li className='text-md text-slate-200 font-mono uppercase cursor-pointer sm:text-xl  hover:text-slate-400'>
        <Link to="portfolio" smooth ={true} duration={500}>PortFolio</Link>
        </li>

        <li className='text-md text-slate-200 font-mono uppercase cursor-pointer sm:text-xl  hover:text-slate-400'> 
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
    </ul>
    </motion.div>

    </div>

    <main className="flex flex-col justify-center items-center bg-[#023047]">

      {/* Hero section */}

      <div id="hero">
        <Hero/>
      </div>
      
      {/* What I do Section */}

      <div id="about">
        <About/>
      </div>

      {/* Skills section */}

      <div id="skills">
        <Skills/>
      </div>

      {/* PortFolio Section */}

      <div id="portfolio">
      <Portfolio/>
      </div>

      {/* Contact Section */}

      <div id="contact" className="w-[300px] sm:w-1/4 md:w-1/2">
      <Contact/>
      </div>

      <div>
        <Footer/>
      </div>
      

    </main>
    </div>

  )

}

export default App
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';


const Contact = () => {

  const [successMessage,setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage("Thanks for leaving a message");
    reset();
  };

  return (

        <section className="min-h-screen flex flex-col justify-center items-center gap-8">

        <div className="">
        <h1 className="text-center text-3xl font-mono font-semibold text-slate-200 sm:text-4xl md:text-5xl">Contact</h1>
        </div>

        <div className="flex flex-col justify-between items-center">

        <div className="">
          <div className='flex flex-col gap-4'>
            <h2 className="text-xl font-mono pb-2 text-slate-200 text-center sm:text-2xl md:text-3xl">Let's work together 👋</h2>
            <p className="text-md font-mono text-slate-400 text-center px-2 md:text-xl ">Got questions or want to connect? I'm just an email away!</p>
            <a href="#" className='text-xl font-mono text-slate-400 text-center px-2'>deenkumar11@gmail.com</a>
          </div>


        <div className='flex py-6 gap-4 items-center justify-center'>
          <motion.span
          whileHover={{scale:1.2}}
          transition={{type:'spring',stiffness:200}}
          > <a href="https://twitter.com/DeenKumaran" target='_blank'>
            <AiFillTwitterCircle className="text-cyan-500 text-3xl md:text-4xl"/>
          </a>
          </motion.span>

        <motion.span
        whileHover={{scale:1.2}}
        transition={{type:'spring',stiffness:200}}
        > <a href="https://github.com/deenkumar11" target='_blank'>
          <AiFillGithub className="text-cyan-500 text-3xl md:text-4xl"/>
        </a>
        </motion.span>

        <motion.span
        whileHover={{scale:1.2}}
        transition={{type:'spring',stiffness:200}}
        > <a href="https://www.linkedin.com/in/deenkumar11/" target='_blank'>
          <AiFillLinkedin className="text-cyan-500 text-3xl md:text-4xl"/>
        </a>
        </motion.span>
        </div>
      </div>
{/* 
        <div className="">
        <form action="" className="flex flex-col justify-center items-center w-[300px] py-5 rounded-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
            <label className="block text-xl  font-mono pb-2 text-slate-200" htmlFor="name">Name</label>
            <input type="text" name="name" id="" placeholder="Enter your name" {...register("name",{
              required:true,
            })} className="text-xl px-2 py-1 font-mono border-solid border-2 border-teal-500 rounded-md"/>
                    {errors.name && errors.name.type === "required" && (
                    <p className="errorMsg text-red-500 font-mono">Name is required.</p>
          )}
            </div>

            <div className="pb-4">
            <label className="block text-xl  font-mono pb-2 text-slate-200" htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder="Enter your email" {...register("email",{
              required:true,
              pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })} className="text-xl px-2 py-1 font-mono border-solid border-2 border-teal-500 rounded-md"/>
            {errors.email && errors.email.type === "required" && (
              <p className='errorMsg text-red-500 font-mono'>Email is required</p>
            )}
             {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-red-500 font-mono">Email is not valid.</p>
          )}
            </div>

            <div className="pb-4">
            <label className="block text-xl  font-mono pb-2 text-slate-200" htmlFor="Message">Leave your message</label>
            <input type="text" name="message" id="" placeholder="Message" {...register("message")} className="text-xl px-2 py-1 pb-10 font-mono border-solid border-2 border-teal-500 rounded-md"/>
            </div>

            <div>
              <button type='submit' className="bg-cyan-500 text-xl font-mono px-10 py-1 w-[255px] rounded-sm text-slate-200 uppercase">Submit</button>
            </div>

          {successMessage && <p className='text-lg text-teal-500 font-mono py-4'>{successMessage}</p>}

        </form>
        </div> */}
        </div>
        </section>
        
  )
}

export default Contact
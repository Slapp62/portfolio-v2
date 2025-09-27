import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Social from "./Social";

export const Hero = () => {
  return (
    <div 
      className="
        lg:sticky top-0 lg:mt-0 mt-10
        hero overflow-hidden 
        flex lg:flex-row flex-col justify-center 
        lg:h-screen lg:w-[40%] w-[90%] lg:mx-0 mx-auto
        items-center gap-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    
          opacity: { duration: 2.5} 
        }} 
        className="lg:h-[90%] border-1 border-slate-500 flex flex-col items-center justify-between p-5 text-white rounded-lg lg:gap-0 gap-10"
      >
        <div className="flex flex-col lg:w-[90%] w-full gap-4"> 
          <h1 className="lg:text-5xl text-center text-lg font-bold ">Simcha Lapp</h1>
          <h2 className="lg:text-xl text-lg text-center text-indigo-300 font-semibold">Full Stack Web Developer</h2>
          <ul className="w-full leading-7 lg:text-sm text-xs">
            <li className="">I am a junior full stack web developer who enjoys solving problems and and pushing my limits. I focus on building useful applications with inutitve and beautiful frontends and scalable backends.</li> 
            <li>I have recently completed a Full Stack Web Development course at HackerU and am progressively broadening my horizons with bigger challenges. I began with landing pages in HTML and CSS, moved on to simple Javascript apps, and now completed a MERN stack website.</li>
            <li>My next project is going to be a functional full stack website that can be launched to the public and provide real value to users.</li> 
            <li>My current skills include: HTML, CSS, Javascript, Typescript, React, MantineUI, Tailwind, Node.js, Express, MongoDB, and Mongoose</li>
          </ul>
        </div>

        <Button asChild
          className="button-outline px-20 py-5 w-fit mx-auto text-lg">
            <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank" >View Resume</a>
        </Button>

        <Social/>
      </motion.div>
    </div>
  );
};
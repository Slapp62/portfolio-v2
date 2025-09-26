import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Social from "./Social";

export const Hero = () => {
  return (
    <div 
      className="hero overflow-hidden flex md:flex-row flex-col justify-center md:h-full h-fit w-full items-center gap-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    
          opacity: { duration: 2.5} 
        }} 
        className="bg-image hero-content flex flex-col items-center justify-evenly md:h-[90%] md:w-[90%] w-[100%] p-5  text-white md:gap-20 gap-10 rounded-lg"
      >
        <div className="flex flex-col md:w-[90%] w-full gap-4"> 
          <h1 className="md:text-5xl text-md font-bold ">Simcha Lapp</h1>
          <h2 className="md:text-xl text-md text-indigo-300 font-semibold">Full Stack Web Developer</h2>
          <ul className="w-full md:text-[16px] leading-7 text-sm list-disc">
            <li className="">I am a junior full stack web developer who enjoys solving problems and and pushing my limits. I focus on building useful applications with inutitve and beautiful frontends and scalable backends.</li> 
            <li>I have recently completed a Full Stack Web Development course at HackerU and am progressively broadening my horizons with bigger challenges. I began with landing pages in HTML and CSS, moved on to simple Javascript apps, and now completed a MERN stack website.</li>
            <li>My next project is going to be a functional full stack website that can be launched to the public and provide real value to users.</li> 
            <li>My current skills include: HTML, CSS, Javascript, Typescript, React, MantineUI, Tailwind, Node.js, Express, MongoDB, and Mongoose</li>
          </ul>

          <Button asChild
            className="mt-5 button-outline px-10 py-5 w-full mx-auto text-lg">
              <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank" >View Resume</a>
          </Button>

          <Social/>
        </div> 
        
        
      </motion.div>

      
    </div>
  );
};
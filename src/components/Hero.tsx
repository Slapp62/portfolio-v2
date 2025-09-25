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
        <div className="flex flex-col md:w-3/4 w-full gap-4"> 
          <h1 className="md:text-5xl text-md font-bold ">Simcha Lapp</h1>
          <h2 className="md:text-xl text-md text-amber-700">Full Stack Web Developer</h2>
          <p className="w-full md:text-lg text-sm">
            I am a junior full stack web developer who loves a challenge and expanding my knowledge.<br/> 
            I continually push myself to gain deeper knowledge of the things I already know, while also broadening my horizons and learning new technologies.<br/> 
            I focus not just on clean, organized code, but also on proper architecture and scalable systems.
          </p>

          <Button asChild
            className="mt-5 button-outline px-10 py-5 w-full mx-auto">
              <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank" >View Resume</a>
          </Button>

          <Social/>
        </div> 
        
        
      </motion.div>

      
    </div>
  );
};
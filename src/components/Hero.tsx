import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div 
      className="hero overflow-hidden flex md:flex-row flex-col justify-center md:h-[600px] h-fit w-full items-center gap-10 my-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    
          opacity: { duration: 2.5} 
        }} 
        className="hero-content flex md:flex-row flex-col items-center justify-center md:h-[80%] md:w-3/4 w-[100%] md:mt-0 p-5 md:border border-y md:border-white -amber-100 md:rounded-lg text-white text-center md:gap-20 gap-10"
      >
        <div className="flex flex-col justify-center md:w-2/4 w-full text-center"> 
          <h1 className="md:text-5xl text-3xl font-bold">Simcha Lapp</h1>
          <h2 className="md:text-2xl text-xl p-5 text-amber-700">Full Stack Web Developer</h2>
          <p className="md:w-3/4 md:text-lg text-sm mx-auto">
            I am a junior full stack web developer who loves a challenge and expanding my knowledge. I continually push myself to gain deeper knowledge of the things I already know, while also broadening my horizons and learning new technologies. I focus not just on clean, organized code, but also on proper architecture and scalable systems.
          </p>

          <Button asChild
            className="mt-5 button-outline px-10 py-5 w-3/8 mx-auto">
              <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank" >View Resume</a>
          </Button>
        </div> 
          
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    
          opacity: { duration: 4, delay: 1} 
        }} 
        className="hero-image flex flex-col items-center justify-center text-white md:h-[80%]" >
          <img loading="lazy" src="./profile pic.jpg" alt="profile" className="rounded-2xl object-cover object-center" />
        </motion.div>
      </motion.div>

      
    </div>
  );
};
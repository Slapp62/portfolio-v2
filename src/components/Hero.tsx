import { motion } from "motion/react"

export const Hero = () => {
  return (
    <div 
      className="hero overflow-hidden flex md:flex-row flex-col justify-center md:h-[600px] h-fit w-full items-center gap-10 my-10">

      <motion.div
        initial={{ x: -1000, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: { duration: 1.5, delay: 0 },     
          opacity: { duration: 2.5, delay: 1 } 
        }} 
        className="hero-content flex flex-col items-center justify-center md:h-[80%] md:w-[50%] w-[100%] md:mt-0 p-5 md:border border-y md:border-white -amber-100 md:rounded-lg text-white text-center"
      >

        <h1 className="md:text-5xl text-3xl font-bold ">Simcha Lapp</h1>
        <h2 className="md:text-2xl text-xl p-5">Full Stack Web Developer</h2>
        <p className="w-3/4 md:text-lg text-sm">
          I am a full stack web developer with a passion for creating beautiful, intuitive, and dynamic web applications. As an analytical problem solver, quick learner, and team player, I am always looking for new challenges and opportunities to learn and broaden my skillset. 
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    
          opacity: { duration: 4, delay: 1} 
        }} 
        className="hero-image flex flex-col items-center justify-center text-white md:h-[80%]">
        <img src="./profile pic.jpg" alt="profile" className="rounded-2xl object-cover object-center" />

        <button 
          className="mt-10 button-outline px-10 py-3 w-full">
            <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank" >View Resume</a>
        </button>
        
      </motion.div>
    </div>
  );
};
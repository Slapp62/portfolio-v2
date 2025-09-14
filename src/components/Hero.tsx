import { motion } from "motion/react"

export const Hero = () => {
  return (
    <div className="hero overflow-hidden  flex justify-center h-[600px] w-full items-center gap-5">
      <motion.div
        initial={{ x: -1000, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: { duration: 1.5, delay: 0 },     // Slide starts immediately
          opacity: { duration: 2.5, delay: 1 }  // Fade starts after slide begins
        }} 
        className="hero-content flex flex-col items-center justify-center h-[80%] w-[50%] p-5 border border-white rounded-lg text-white text-center">
        <h1 className="text-5xl font-bold ">Simcha Lapp</h1>
        <h2 className="text-2xl p-5">Full Stack Web Developer</h2>
        <p className="w-3/4">I am a full stack web developer with a passion for creating dynamic and user-friendly web applications.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{    // Slide starts immediately
          opacity: { duration: 4, delay: 1}  // Fade starts after slide begins
        }} 
        className="hero-content flex flex-col items-center justify-center h-[80%] w-[30%] p-5 text-white">
        <img src="./profile pic.jpg" alt="profile" className="rounded-2xl object-cover object-center" />
        <button className="mt-10 bg-green-800 rounded-2xl px-10 py-5">Download Resume/CV</button>
        
      </motion.div>
    </div>
  );
};
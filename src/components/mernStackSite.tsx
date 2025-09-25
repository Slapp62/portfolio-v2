import { motion } from "motion/react";
import type { TProjectDescription } from "../Types";

export const MERNStackSite = (props : {projectDescription : TProjectDescription}) => {
  const { projectDescription } = props;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{opacity: {duration: 2.5, delay: 0.2}}}
      className="project h-[650px] w-full flex flex-col align-center items-center justify-center gap-5 mx-auto text-white">
      <div 
        className="flex flex-col items-center text-center justify-center mx-auto w-full gap-5">
        <h2 className="md:text-2xl font-bold">{projectDescription.title}</h2>
        <p className="md:text-lg text-center">{projectDescription.description}</p>
        <ul className="flex gap-3 ">{projectDescription.tech.map((tech) => 
          <li key={tech.name}>
            {<tech.icon size={40}/>}
          </li>)}
        </ul>
      </div>

      <div 
        className="project-body relative gap-3 w-full h-full mx-auto md:border border-y border-white md:rounded-lg text-center p-3 text-white">
        <motion.img 
          src='./mernStackSite.png' alt='homepage' 
          className='w-full h-full object-cover object-center rounded-lg'
        />

        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-1 backdrop-blur-sm rounded-lg bg-black/70 flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-col gap-4 w-[70%]">
            <h2 className="md:text-2xl text-xl font-bold">MERN Stack Site</h2>
            <ul className="md:text-xl text-md">
              <li>A complete full stack site built with React, MantineUI, Redux, Node.js, Express, and MongoDB.</li> 
              <li>Regular users can create a list of favorite businesses, business owners can list their company, and admin users can manage the site.</li>
            </ul>
            
            <button className="w-[80%] mx-auto button-outline px-10 py-3"><a href="https://mernstackproject-client.onrender.com/" target="_blank" >Visit Site</a></button>
            <button className="w-[80%] mx-auto button-outline px-10 py-3"><a href="https://github.com/Slapp62/mernStackProject" target="_blank"> View Code</a></button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MERNStackSite
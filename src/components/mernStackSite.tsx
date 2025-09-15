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
      className="project text-white h-[600px] w-full flex align-center justify-center gap-5 mx-auto">
      <div 
        className="flex flex-col items-center justify-center gap-5 w-[20%]">
        <h2 className="text-2xl font-bold">{projectDescription.title}</h2>
        <p className="text-lg text-center">{projectDescription.description}</p>
        <ul className="flex gap-3 ">{projectDescription.tech.map((tech) => 
          <li key={tech.name}>
            {<tech.icon size={40}/>}
          </li>)}
        </ul>
      </div>

      <div 
        className="project-body relative gap-3 w-[60%] border border-white rounded-lg text-center  p-4 text-white">
        <motion.img 
          src='./mernStackSite.png' alt='homepage' 
          className='w-full h-full object-cover object-center rounded-lg'
        />

        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-4 backdrop-blur-sm rounded-lg bg-black/70 flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-col gap-4 w-[70%]">
            <h2 className="text-2xl font-bold">MERN Stack Site</h2>
            <ul className="text-xl">
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
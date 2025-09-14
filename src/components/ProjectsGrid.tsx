import { motion } from "motion/react";
import type { TProject } from "../Types";

type TProjectDescription = { 
  title: string,
  description: string,
  tech: string[]
}

export const ProjectsGrid = (props : {projectData : TProject[], projectDescription : TProjectDescription}) => {
  const { projectData, projectDescription } = props
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{opacity: {duration: 2.5, delay: 0.2}}}
      className="project h-[650px] w-[90%] flex align-center justify-center gap-5 mx-auto text-white">
      <div 
        className="flex flex-col items-center justify-evenly w-[20%]">
        <h2>{projectDescription.title}</h2>
        <p>{projectDescription.description}</p>
        <ul>{projectDescription.tech.map((tech : string) => <li key={tech}>{tech}</li>)}</ul>
      </div>

      <div
        className="project-body overflow-hidden grid grid-cols-3 grid-rows-3 gap-3 w-[60%] border border-white rounded-2xl text-center  p-4 text-white"
      >
        {projectData.map((project : TProject) => (
          <motion.div 
            key={project.id} 
            className="project-card relative aspect-auto cursor-pointer"
          >
            <motion.img 
              whileHover={{ opacity: 0 }}
              loading="lazy" 
              src={project.image} 
              alt={project.imageAlt} 
              className='w-full h-full object-cover object-center'
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black flex flex-col items-center justify-center p-2 gap-3">
              
              <h4>{project.title}</h4>
              <p className="text-sm">{project.description}</p>
              <button
                className="bg-green-800 rounded-2xl px-4 py-2"
              ><a href={project.link}>View Project</a></button>

            </motion.div>
          </motion.div>))}
      </div>
    </motion.div>
  );
}

export default ProjectsGrid
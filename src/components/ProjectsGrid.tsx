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
        <ul>{projectDescription.tech.map((tech : string) => <li>{tech}</li>)}</ul>
      </div>
      <div 
        className="project-body overflow-hidden grid grid-cols-3 grid-rows-3 gap-3 w-[60%] border border-white rounded-2xl text-center  p-4 text-white">
        {projectData.map((project : TProject) => (
          <div key={project.id} className="project-card aspect-auto">
            <img loading="lazy" src={project.image} alt={project.imageAlt} className='w-full h-full object-cover object-center '/>
          </div>
        ))}        
      </div>
    </motion.div>
  );
}

export default ProjectsGrid
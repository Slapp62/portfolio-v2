import { motion } from "motion/react";
import type { TProject, TProjectDescription } from "../Types";

export const ProjectsGrid = (props : {projectData : TProject[], projectDescription : TProjectDescription}) => {
  const { projectData, projectDescription } = props
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{opacity: {duration: 2.5, delay: 0.2}}}
      className="project h-[650px] w-full flex md:flex-row flex-col align-center items-center justify-center gap-5 mx-auto text-white">
      <div 
        className="flex flex-col items-center justify-center gap-5 md:w-[20%] w-[90%]">
        <h2 className="text-2xl font-bold">{projectDescription.title}</h2>
        <p className="text-lg text-center">{projectDescription.description}</p>
        <ul className="flex gap-3 ">{projectDescription.tech.map((tech) => 
          <li key={tech.name}>
            {<tech.icon size={40}/>}
          </li>)}
        </ul>
      </div>

      <div
        className="project-body overflow-hidden grid grid-cols-3 grid-rows-3 gap-3 md:w-[60%] h-[650px] w-full md:border border-y border-white md:rounded-md text-center p-3 text-white"
      >
        {projectData.map((project : TProject) => (
          <div 
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
              className="absolute inset-0 bg-black flex flex-col items-center justify-center p-1 gap-3">
              
              <h4 className="md:text-lg text-sm">{project.title}</h4>
              <p className="md:text-sm md:flex hidden text-xs">{project.description}</p>
              <ul className="gap-2 md:flex hidden">{projectDescription.tech.map((tech) => 
                <li key={tech.name}>
                  {<tech.icon/>}
                </li>)}
              </ul>
              <button
                onClick={() => window.open(project.link, '_blank')}
                className="button-hover rounded-xl md:px-5 px-3 md:py-2 py-1 md:text-md text-sm"
              >
                View Project
              </button>

            </motion.div>
          </div>))}
      </div>
    </motion.div>
  );
}

export default ProjectsGrid
import { motion } from "motion/react";
import type { TProject, TProjectDescription } from "../Types";

export const ProjectCard = (props : {projectData : TProject[], projectDescription : TProjectDescription}) => {
  const { projectData, projectDescription } = props
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{opacity: {duration: 2.5, delay: 0.2}}}
      className="project h-full w-full flex flex-col align-center justify-center gap-5 mx-auto text-white">
        <div 
          className="flex flex-col items-center mx-auto justify-center gap-5 w-full">
          <h2 className="text-indigo-300 text-2xl font-bold">{projectDescription.title}</h2>
          <p className="text-lg text-center">{projectDescription.description}</p>
        </div>

      <div
        className="project-body flex flex-col gap-5 h-full w-full mx-auto text-center text-white"
      >
        {projectData.map((project : TProject) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{opacity: {duration: 1.5, delay: 0.1}}} 
            className="project-card lg:h-fit flex lg:flex-row flex-col items-center justify-between border-slate-500 border-1 rounded-2xl gap-3 p-2"
          >
            
              <img 
                loading="lazy" 
                src={project.image} 
                alt={project.imageAlt} 
                className='lg:w-1/4 lg:h-full w-full h-[200px]  object-cover object-center rounded-2xl'
              />
              <div className="flex flex-col text-center max-w-full items-center p-1 gap-3">
                <h4 className="md:text-lg text-sm">{project.title}</h4>
                <p className="md:text-sm text-xs md:flex max-w-[90%]">{project.description}</p>
                <ul className="gap-2 flex">{projectDescription.tech.map((tech) => 
                  <li key={tech.name}>
                    {<tech.icon/>}
                  </li>)}
                </ul>
              </div>

              <button
                onClick={() => window.open(project.link, '_blank')}
                className="button-outline rounded-xl px-5 py-2 lg:text-md text-sm"
              >
                View Project
              </button>
            
          </motion.div>))}
      </div>
    </motion.div>
  );
}

export default ProjectCard
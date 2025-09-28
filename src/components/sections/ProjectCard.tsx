import { motion } from 'motion/react';
import type { TProject, TProjectDescription } from '@/Types';
import { Badge } from '../ui/badge';
import { IconExternalLink } from '@tabler/icons-react';

export const ProjectCard = (props: {
  projectData: TProject[];
  projectDescription: TProjectDescription;
}) => {
  const { projectData, projectDescription } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ opacity: { duration: 2.5, delay: 0.2 } }}
      className="project align-center mx-auto flex h-full w-full flex-col justify-center gap-5 text-white"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold text-indigo-300">
          {projectDescription.title}
        </h2>
        <p className="text-center text-lg">{projectDescription.description}</p>
        <ul className="flex flex-row gap-3">
          {projectDescription.tech.map((tech, index) => (
          <li key={index}>
            <tech.icon/>
          </li>))}
        </ul>
      </div>

      {projectData.map((project: TProject) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ backgroundColor: 'rgba(150, 150, 150, 0.1)' }}
          viewport={{ once: true }}
          transition={{ opacity: { duration: 1.5, delay: 0.1 } }}
          className="project-card flex h-full w-full flex-col text-center text-white items-center  gap-3 rounded-2xl border-1 border-slate-500 p-2 lg:h-fit lg:flex-row"
        >
          <img
            loading="lazy"
            src={project.image}
            alt={project.imageAlt}
            className="h-[150px] w-full rounded-lg lg:mr-auto object-cover object-center lg:h-full lg:w-[200px]"
          />

          <div className="flex max-w-full lg:mr-auto flex-col items-center gap-2 p-1 text-center">
            <h4 className="text-sm md:text-lg font-semibold">{project.title}</h4>
            <p className="max-w-[90%] text-xs md:flex md:text-sm">
              {project.description} 
            </p>
            
            <div className="flex gap-2 py-2 flex-wrap justify-center">
              {project.tech.map(tech => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <a
            onClick={() => window.open(project.link, '_blank')}
            className="flex gap-2 items-center cursor-pointer font-bold text-emerald-200 hover:text-emerald-500 duration-300 lg:text-md rounded-xl text-sm">
              View Project {<IconExternalLink/>}
            </a>

            {project.github && 
            <a
            onClick={() => window.open(project.github, '_blank')}
            className="flex gap-2 items-center cursor-pointer font-bold text-emerald-200 hover:text-emerald-500 duration-300 lg:text-md rounded-xl text-sm">
              GitHub {<IconExternalLink/>}
            </a>}
          </div>

          
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;

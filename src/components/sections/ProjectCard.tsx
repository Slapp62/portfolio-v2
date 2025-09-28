import { motion } from 'motion/react';
import type { TProject, TProjectDescription } from '@/Types';

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
      </div>

      <div className="project-body mx-auto flex h-full w-full flex-col gap-5 text-center text-white">
        {projectData.map((project: TProject) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ opacity: { duration: 1.5, delay: 0.1 } }}
            className="project-card flex flex-col items-center justify-between gap-3 rounded-2xl border-1 border-slate-500 p-2 lg:h-fit lg:flex-row"
          >
            <img
              loading="lazy"
              src={project.image}
              alt={project.imageAlt}
              className="h-[200px] w-full rounded-2xl object-cover object-center lg:h-full lg:w-1/4"
            />
            <div className="flex max-w-full flex-col items-center gap-3 p-1 text-center">
              <h4 className="text-sm md:text-lg">{project.title}</h4>
              <p className="max-w-[90%] text-xs md:flex md:text-sm">
                {project.description}
              </p>
              <ul className="flex gap-2">
                {projectDescription.tech.map(tech => (
                  <li key={tech.name}>{<tech.icon />}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.open(project.link, '_blank')}
              className="button-outline lg:text-md rounded-xl px-5 py-2 text-sm"
            >
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

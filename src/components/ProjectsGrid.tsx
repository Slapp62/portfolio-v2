import type { TProject } from "../Types";

export const ProjectsGrid = (props : {projectData : TProject[]}) => {
  const { projectData } = props
  
  return (
    <div className="project h-[650px] w-full flex align-center justify-center gap-5 mx-auto">
      <div className="project-body grid grid-cols-3 grid-rows-3 gap-3 w-[60%] border border-white rounded-2xl text-center  p-4 text-white">
        {projectData.map((project : TProject) => (
          <div key={project.id} className="project-card aspect-auto">
            <img src={project.image} alt={project.imageAlt} className='w-full h-full object-cover object-center '/>
          </div>
        ))}        
      </div>
    </div>
  );
}

export default ProjectsGrid
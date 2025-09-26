import { htmlDescription, htmlProjects } from "../../data/htmlCssData";
import { javascriptDescription, jsProjects } from "../../data/javascriptData";
import ProjectCard from "../ProjectsCards";
import { fullStackDescription, fullStackProjects } from "../../data/mernStackData";


const ProjectSection = () => {
  return (
    <div id="projects" className="project-section flex flex-col w-full ml-10 gap-10">
      
      <ProjectCard projectData={fullStackProjects} projectDescription={fullStackDescription}/>
      
      <ProjectCard projectData={jsProjects} projectDescription={javascriptDescription} /> 
  
      <ProjectCard projectData={htmlProjects} projectDescription={htmlDescription} />
    </div>
  );
};

export default ProjectSection;
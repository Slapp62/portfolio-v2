import { htmlDescription, htmlProjects } from "../../data/htmlCssData";
import { javascriptDescription, jsProjects } from "../../data/javascriptData";
import ProjectsGrid from "../ProjectsGrid";
import MERNStackSite from "../mernStackSite";
import { mernSiteDescription } from "../../data/mernSiteData";


const ProjectSection = () => {
  return (
    <div id="projects" className="project-section flex flex-col w-full gap-10 px-10 py-5 ml-auto">
      
      <h1 className="text-4xl font-bold text-center text-white">Full Stack Projects</h1>
      <MERNStackSite projectDescription={mernSiteDescription}/>
      
      <h2 className="text-3xl font-bold text-center text-white">Assorted Early Projects</h2>
      <ProjectsGrid projectData={jsProjects} projectDescription={javascriptDescription} /> 
  
      <ProjectsGrid projectData={htmlProjects} projectDescription={htmlDescription} />
    </div>
  );
};

export default ProjectSection;
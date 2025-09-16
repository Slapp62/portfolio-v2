import { htmlDescription, htmlProjects } from "../../data/htmlCssData";
import { javascriptDescription, jsProjects } from "../../data/javascriptData";
import ProjectsGrid from "../ProjectsGrid";
import MERNStackSite from "../mernStackSite";
import { mernSiteDescription } from "../../data/mernSiteData";


const CardSection = () => {
  return (
    <div id="projects" className="project-section flex flex-col w-full gap-10">
      <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
      <MERNStackSite projectDescription={mernSiteDescription}/>

      <ProjectsGrid projectData={jsProjects} projectDescription={javascriptDescription} /> 
      
      <ProjectsGrid projectData={htmlProjects} projectDescription={htmlDescription} />
    </div>
  );
};

export default CardSection;
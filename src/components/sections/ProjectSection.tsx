import { htmlDescription, htmlProjects } from "../../data/htmlCssData";
import { javascriptDescription, jsProjects } from "../../data/javascriptData";
import ProjectsGrid from "../ProjectsGrid";
import MERNStackSite from "../mernStackSite";
import { mernSiteDescription } from "../../data/mernSiteData";


const CardSection = () => {
  return (
    <div id="projects" className="project-section flex flex-col w-[90%] gap-10 mx-auto border-y border-zinc-600 py-5">
      
      <h1 className="text-4xl font-bold text-center text-white">Full Stack Projects</h1>
      <MERNStackSite projectDescription={mernSiteDescription}/>
      
      <h1 className="text-4xl font-bold text-center text-white">Javascript Projects</h1>
      <ProjectsGrid projectData={jsProjects} projectDescription={javascriptDescription} /> 
       
      <h1 className="text-4xl font-bold text-center text-white">HTML & CSS Landing Pages</h1>
      <ProjectsGrid projectData={htmlProjects} projectDescription={htmlDescription} />
    </div>
  );
};

export default CardSection;
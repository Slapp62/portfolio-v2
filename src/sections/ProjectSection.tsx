import { htmlDescription, htmlProjects } from "../projectData/htmlCssData";
import { javascriptDescription, jsProjects } from "../projectData/javascriptData";
import ProjectsGrid from "../components/ProjectsGrid";
import MERNStackSite from "../components/mernStackSite";
import { mernSiteDescription } from "../projectData/mernSiteData";


const CardSection = () => {
  return (
    <div className="project-section flex flex-col w-full gap-10">
      <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
      <MERNStackSite projectDescription={mernSiteDescription}/>

      <ProjectsGrid projectData={htmlProjects} projectDescription={htmlDescription} />

      <ProjectsGrid projectData={jsProjects} projectDescription={javascriptDescription} />
    </div>
  );
};

export default CardSection;
import { htmlDescription, htmlProjects } from "../projectData/htmlCssData";
import { javascriptDescription, jsProjects } from "../projectData/javascriptData";
import ProjectsGrid from "../components/ProjectsGrid";
import MERNStackSite from "../components/mernStackSite";


const CardSection = () => {
  return (
    <div className="project-section flex flex-col w-full gap-5">
      <h2 className="text-3xl font-bold text-white text-center">Full Stack Website</h2>
      <MERNStackSite/>

      <h2 className="text-3xl font-bold text-white text-center">HTML & CSS Projects</h2>
      <ProjectsGrid projectData={htmlProjects} projectDescription={htmlDescription} />

      <h2 className="text-3xl font-bold text-white text-center">Javascript Projects</h2>
      <ProjectsGrid projectData={jsProjects} projectDescription={javascriptDescription} />
    </div>
  );
};

export default CardSection;
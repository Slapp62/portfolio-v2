import { htmlProjects } from "../projectData/htmlCssData";
import { jsProjects } from "../projectData/javascriptData";
import ProjectsGrid from "../components/ProjectsGrid";
import MERNStackSite from "../components/mernStackSite";

const CardSection = () => {
  return (
    <div className="project-section flex flex-col w-full gap-5">
      <h2 className="text-3xl font-bold text-white text-center">Full Stack Website</h2>
      <MERNStackSite/>

      <h2 className="text-3xl font-bold text-white text-center">HTML & CSS Projects</h2>
      <ProjectsGrid projectData={htmlProjects} />

      <h2 className="text-3xl font-bold text-white text-center">Javascript Projects</h2>
      <ProjectsGrid projectData={jsProjects} />
    </div>
  );
};

export default CardSection;
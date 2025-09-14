import { htmlProjects } from "../projectData/htmlCssData";
import { jsProjects } from "../projectData/javascriptData";
import ProjectsGrid from "../components/ProjectsGrid";
import MERNStackSite from "../components/mernStackSite";

const htmlDescription = {
  title: "HTML & CSS Projects",
  description: "A collection of projects built using HTML, CSS, and Bootstrap.",
  tech: ["HTML", "CSS", "Bootstrap"]
}

const javascriptDescription = {
  title: "Javascript Projects",
  description: "A collection of projects built using HTML, CSS, and Javascript.",
  tech: ["HTML", "CSS", "Javascript"]
}

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
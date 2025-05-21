import { Project } from "../app/data/projects";
import { ProjectDetail } from "./ProjectDetail";

interface ProjectPageProps {
  project: Project;
}

const imageMap: Record<string, string> = {
  "product-booster": "/assets/ProductBooster.png",
  newsletter: "/assets/AubNewslatter.png",
  "exit-interview": "/assets/ExitInterviewBoat.png",
  rag: "/assets/cardImg.png",
};

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <ProjectDetail
      title={project.title}
      description={project.subtitle}
      imageSrc={imageMap[project.id] || "/assets/cardImg.png"}
      link={project.websiteLink}
      techStack={project.techStack}
      capabilities={project.capabilities}
      extendedApplications={project.extendedApplications}
      estimatedCosting={project.estimatedCosting}
      demoRecording={project.demoRecording}
      fullDescription={project.description}
    />
  );
}

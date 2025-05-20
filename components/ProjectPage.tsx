import { Project } from "../app/data/projects";
import { ProjectDetail } from "./ProjectDetail";

interface ProjectPageProps {
  projectId: string;
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <ProjectDetail
      title={project.title}
      description={project.subtitle}
      imageSrc="/assets/cardImg.png"
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

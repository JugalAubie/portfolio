"use client";

import { ProjectPage } from "../../../components/ProjectPage";
import { projects } from "../../data/projects";

export default function ExitInterviewProject() {
  return (
    <ProjectPage
      projectId="exit-interview"
      project={projects["exit-interview"]}
    />
  );
}

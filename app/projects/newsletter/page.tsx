"use client";

import { ProjectPage } from "../../../components/ProjectPage";
import { projects } from "../../data/projects";

export default function NewsletterProject() {
  return <ProjectPage projectId="newsletter" project={projects.newsletter} />;
}

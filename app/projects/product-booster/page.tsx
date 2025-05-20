"use client";

import { ProjectPage } from "../../../components/ProjectPage";
import { projects } from "../../data/projects";

export default function ProductBoosterProject() {
  return (
    <ProjectPage
      projectId="product-booster"
      project={projects["product-booster"]}
    />
  );
}

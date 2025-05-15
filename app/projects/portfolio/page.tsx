"use client";

import { ProjectDetail } from "../../../components/ProjectDetail";

export default function PortfolioProject() {
  return (
    <ProjectDetail
      title="Portfolio Website"
      description="Modern portfolio website showcasing projects with Next.js and shadcn UI"
      imageSrc="/assets/cardImg.png"
      link="https://www.aubergine.co/portfolio"
    />
  );
}

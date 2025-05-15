"use client";
import { Header } from "../components/Header";
import { SimpleProjectCard } from "../components/SimpleProjectCard";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <Banner />

          <div
            id="projects"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <SimpleProjectCard
              title="RAG"
              description="Welcome to the Samsung Appliance Support Portal"
              content="Built a support portal for Samsung appliances"
              imageSrc="/assets/cardImg.png"
              link="/projects/rag"
            />

            <SimpleProjectCard
              title="Portfolio Website"
              description="Portfolio Website"
              content="Created a portfolio website using Next.js and shadcn UI components."
              link="/projects/portfolio"
            />
          </div>
        </div>
      </main>
    </>
  );
}

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
              title="Product Booster AI Agent"
              description="AI-powered competitive intelligence for product teams"
              content="Provides real-time competitive intelligence and actionable recommendations to accelerate growth"
              imageSrc="/assets/ProductBooster.png"
              link="/projects/product-booster"
            />

            <SimpleProjectCard
              title="Newsletter Generation AI Agent"
              description="Automates creation and delivery of customized newsletters"
              content="Searches the web, scrapes relevant content, and generates concise summaries for newsletters"
              imageSrc="/assets/AubNewslatter.png"
              link="/projects/newsletter"
            />

            <SimpleProjectCard
              title="Voice AI Agent for Exit Interviews"
              description="Conducts real-time, voice-based exit interviews"
              content="Engages in natural conversations with departing employees using AI-powered speech capabilities"
              imageSrc="/assets/ExitInterviewBoat.png"
              link="/projects/exit-interview"
            />
          </div>
        </div>
      </main>
    </>
  );
}

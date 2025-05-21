"use client";
import { Header } from "../components/Header";
import { SimpleProjectCard } from "../components/SimpleProjectCard";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="w-full py-16 px-4 text-center bg-gradient-to-r from-indigo-50 via-white to-blue-100">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500 mb-4 drop-shadow-lg">
            Aubergine AI Portfolio
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our latest AI-powered solutions for product, growth, HR, and
            content automation. Each project leverages state-of-the-art
            technology and beautiful design.
          </p>
        </section>

        <div className="z-10 w-full max-w-6xl px-4 mt-10">
          <Banner />

          {/* Projects Section Title */}
          <div className="flex items-center justify-between mb-8 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500">
              Projects
            </h2>
            <span className="hidden md:inline-block text-indigo-500 font-semibold tracking-wide uppercase text-sm bg-indigo-50 rounded-full px-4 py-1 shadow-sm">
              AI Solutions
            </span>
          </div>

          {/* Projects Grid */}
          <div
            id="projects"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
              imageSrc="/assets/AubNewsLatter.png"
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

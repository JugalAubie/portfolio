import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./Header";

interface ProjectDetailProps {
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
  techStack?: {
    name: string;
    description: string;
  }[];
  capabilities?: string[];
  extendedApplications?: string[];
  estimatedCosting?: string;
  demoRecording?: string;
  fullDescription?: string;
}

export function ProjectDetail({
  title,
  description,
  imageSrc = "/assets/cardImg.png",
  link,
  techStack = [],
  capabilities = [],
  extendedApplications = [],
  estimatedCosting = "To be determined",
  demoRecording,
  fullDescription = "",
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />

      <div className="container mx-auto py-12 px-4 max-w-7xl">
        {/* Header with title and visit button in a 3D card */}
        <div className="mb-12 perspective-1000">
          <div className="relative bg-white border shadow-sm border-gray-100 rounded-xl  overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0  transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {title}
                  </h1>
                </div>
                <p className="text-gray-500 mt-2 md:max-w-xl">
                  Explore this project&apos;s details, capabilities, and
                  technical specifications
                </p>
              </div>
              {link && (
                <div className="mt-4 md:mt-0 transform-gpu transition-transform duration-300 group-hover:scale-105">
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2 transition-all duration-300 shadow-[0_4px_14px_0_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                      <span>Visit Website</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          </div>
        </div>

        {/* Main content with image and overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Image */}
          <div className="aspect-video w-full relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Right side - Overview */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {description}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {fullDescription ||
                "This project showcases our expertise in creating innovative solutions that address real-world challenges. The application combines cutting-edge technology with intuitive user experience design."}
            </p>
            {link && (
              <div className="hidden md:block">
                <Link
                  href="#website-link"
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group"
                >
                  <span>Learn more about this project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Detailed sections */}
        <div className="space-y-16">
          {/* Description */}
          <section
            id="description"
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                1
              </span>
              Description
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {fullDescription ||
                `${title} is a comprehensive solution designed to streamline processes and enhance user experience. It addresses key challenges in the industry by implementing innovative approaches to data management and user interaction. The platform offers intuitive navigation, responsive design, and powerful functionality to meet the diverse needs of its users.`}
            </p>
          </section>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <section
              id="tech-stack"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                  2
                </span>
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Capabilities */}
          {capabilities.length > 0 && (
            <section
              id="capabilities"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                  3
                </span>
                Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-purple-50 rounded-lg"
                  >
                    <svg
                      className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Other Applications */}
          {extendedApplications.length > 0 && (
            <section
              id="other-applications"
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                  4
                </span>
                Other Applications
              </h2>
              <p className="text-gray-700 mb-6">
                The technology and approach used in this project can be adapted
                for various other applications:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {extendedApplications.map((app, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-green-200 rounded-full p-2 mr-3">
                        <svg
                          className="h-4 w-4 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{app}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Estimated Costings */}
          <section
            id="estimated-costings"
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                5
              </span>
              Estimated Costings
            </h2>
            <div className="p-6 bg-amber-50 rounded-xl">
              <p className="text-gray-700 text-lg">{estimatedCosting}</p>
            </div>
          </section>

          {/* Recording */}
          <section
            id="recording"
            className="relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
            <div className="relative z-10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                  6
                </span>
                Recording
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center w-full md:w-1/3">
                  <div className="relative group w-full">
                    {/* Embed Google Drive video if present */}
                    {demoRecording &&
                    demoRecording.includes("drive.google.com") ? (
                      <iframe
                        src={demoRecording.replace("/view", "/preview")}
                        width="320"
                        height="180"
                        allow="autoplay"
                        className="rounded-lg w-full h-48 md:h-56"
                        title="Demo Recording"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-indigo-600/20 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-10 w-10 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute -inset-1 bg-indigo-600/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  {demoRecording &&
                  demoRecording.includes("drive.google.com") ? (
                    <p className="text-gray-300 mb-6 text-lg">
                      Watch our demonstration video to see the {title} in
                      action.
                    </p>
                  ) : demoRecording === "Pending" ? (
                    <p className="text-gray-300 mb-6 text-lg">
                      A demonstration video of this project is coming soon.
                      Please check back later or contact our team for more
                      information.
                    </p>
                  ) : demoRecording ? (
                    <p className="text-gray-300 mb-6 text-lg">
                      Watch our demonstration video to see the {title} in
                      action.
                    </p>
                  ) : (
                    <p className="text-gray-300 mb-6 text-lg">
                      A demonstration video of the project is available upon
                      request. Please contact our team to schedule a
                      personalized walkthrough.
                    </p>
                  )}

                  {demoRecording &&
                  demoRecording.includes(
                    "drive.google.com"
                  ) ? null : demoRecording && demoRecording !== "Pending" ? (
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      Watch Demo
                    </Button>
                  ) : (
                    <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      Request Demo Recording
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Website Link */}
          <section
            id="website-link"
            className="relative overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 z-0"></div>
            <div className="relative z-10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-mono">
                  7
                </span>
                Website Link
              </h2>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <p className="text-white mb-6 text-lg">
                  Visit the live website to explore the project in detail and
                  experience its features firsthand.
                </p>
                {link ? (
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white hover:bg-gray-100 text-indigo-700 rounded-full px-8 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                      <span>Visit {title}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Button>
                  </Link>
                ) : (
                  <p className="text-amber-300 font-medium">
                    Website link coming soon!
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

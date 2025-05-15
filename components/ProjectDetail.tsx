import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./Header";

interface ProjectDetailProps {
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

export function ProjectDetail({
  title,
  description,
  imageSrc = "/assets/cardImg.png",
  link,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {/* Header with title and visit button */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Visit Website
              </Button>
            </Link>
          )}
        </div>

        {/* Main content with image and overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left side - Image */}
          <div className="aspect-video w-full relative rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{description}</h2>
            <p className="text-gray-700 mb-6">
              This project showcases our expertise in creating innovative
              solutions that address real-world challenges. The application
              combines cutting-edge technology with intuitive user experience
              design.
            </p>
          </div>
        </div>

        {/* Detailed sections */}
        <div className="space-y-10">
          {/* Description */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              1-Description
            </h2>
            <p className="text-gray-700">
              {title} is a comprehensive solution designed to streamline
              processes and enhance user experience. It addresses key challenges
              in the industry by implementing innovative approaches to data
              management and user interaction. The platform offers intuitive
              navigation, responsive design, and powerful functionality to meet
              the diverse needs of its users.
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              2-Tech Stack
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Frontend: React.js with Next.js framework</li>
              <li>UI Components: Custom design system built with shadcn/ui</li>
              <li>Styling: Tailwind CSS for responsive layouts</li>
              <li>Backend: Node.js with Express</li>
              <li>Database: MongoDB for flexible data storage</li>
              <li>
                AI Integration: TensorFlow.js for machine learning capabilities
              </li>
              <li>Deployment: Vercel for frontend, AWS for backend services</li>
            </ul>
          </section>

          {/* Capabilities */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              3-Capabilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Advanced search functionality with natural language processing
              </li>
              <li>Real-time data synchronization across devices</li>
              <li>Personalized user experiences based on behavior analysis</li>
              <li>Automated reporting and analytics dashboard</li>
              <li>Integration with third-party services and APIs</li>
              <li>Mobile-responsive design for cross-platform accessibility</li>
              <li>
                Security features including encryption and role-based access
                control
              </li>
            </ul>
          </section>

          {/* Other Applications */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              4-Other Applications
            </h2>
            <p className="text-gray-700 mb-4">
              The technology and approach used in this project can be adapted
              for various other applications:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Enterprise knowledge management systems</li>
              <li>Customer support and service platforms</li>
              <li>Educational and e-learning environments</li>
              <li>Healthcare information systems</li>
              <li>Financial services and fintech solutions</li>
              <li>E-commerce and retail management</li>
            </ul>
          </section>

          {/* Estimated Costings */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              5-Estimated Costings
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Component
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Development Hours
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estimated Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Research & Planning
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">40-60 hours</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $4,000-$6,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      UX/UI Design
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      80-120 hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $8,000-$12,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Frontend Development
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      160-200 hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $16,000-$20,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Backend Development
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      120-180 hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $12,000-$18,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Testing & QA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">60-80 hours</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $6,000-$8,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Deployment & DevOps
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">40-60 hours</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      $4,000-$6,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-bold">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">
                      500-700 hours
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">
                      $50,000-$70,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Costs are approximate and may vary based on specific
              requirements, team composition, and market rates.
            </p>
          </section>

          {/* Recording */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              6-Recording
            </h2>
            <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 h-16 text-gray-400 mb-4"
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
              <p className="text-gray-700 mb-4">
                A demonstration video of the project is available upon request.
                Please contact our team to schedule a personalized walkthrough.
              </p>
              <Button className="bg-gray-800 hover:bg-black text-white">
                Request Demo Recording
              </Button>
            </div>
          </section>

          {/* Website Link */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              7-Website Link
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Visit the live website to explore the project in detail and
                experience its features firsthand.
              </p>
              {link ? (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Visit {title}
                  </Button>
                </Link>
              ) : (
                <p className="text-amber-600">Website link coming soon!</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

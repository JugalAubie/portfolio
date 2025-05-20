export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  techStack: {
    name: string;
    description: string;
  }[];
  capabilities: string[];
  extendedApplications: string[];
  estimatedCosting: string;
  demoRecording?: string;
  websiteLink?: string;
};

export const projects: Record<string, Project> = {
  rag: {
    id: "rag",
    title: "RAG - Samsung Appliance Support Portal",
    subtitle: "Welcome to the Samsung Appliance Support Portal",
    description:
      "This project implements a Retrieval Augmented Generation (RAG) system for Samsung's appliance support. The portal helps customers quickly find answers to their questions about Samsung appliances by leveraging advanced AI technology that retrieves relevant information from Samsung's documentation and combines it with generative AI to provide accurate and helpful responses.",
    shortDescription: "Built a support portal for Samsung appliances",
    techStack: [
      { name: "Frontend", description: "React.js with Next.js framework" },
      {
        name: "UI Components",
        description: "Custom design system built with shadcn/ui",
      },
      { name: "Styling", description: "Tailwind CSS for responsive layouts" },
      { name: "Backend", description: "Node.js with Express" },
      { name: "Database", description: "MongoDB for flexible data storage" },
      {
        name: "AI Integration",
        description: "TensorFlow.js for machine learning capabilities",
      },
      {
        name: "Deployment",
        description: "Vercel for frontend, AWS for backend services",
      },
    ],
    capabilities: [
      "Advanced search functionality with natural language processing",
      "Real-time data synchronization across devices",
      "Personalized user experiences based on behavior analysis",
      "Automated reporting and analytics dashboard",
      "Integration with third-party services and APIs",
      "Mobile-responsive design for cross-platform accessibility",
      "Security features including encryption and role-based access control",
    ],
    extendedApplications: [
      "Enterprise knowledge management systems",
      "Customer support and service platforms",
      "Educational and e-learning environments",
      "Healthcare information systems",
      "Financial services and fintech solutions",
      "E-commerce and retail management",
    ],
    estimatedCosting: "To be determined",
    websiteLink: "https://rag.aubergine.co/",
  },
  "product-booster": {
    id: "product-booster",
    title: "Product Booster AI Agent",
    subtitle: "AI-powered competitive intelligence for product teams",
    description:
      "Product Booster is an AI-powered agent designed to provide product and growth teams with real-time competitive intelligence and actionable recommendations. It automates the collection and analysis of competitor data, market trends, and user feedback through an intuitive conversational interface. The agent helps teams identify product improvement opportunities, track competitor movements, and make data-driven decisions that accelerate growth and market positioning.",
    shortDescription:
      "Provides real-time competitive intelligence and actionable recommendations to accelerate growth",
    techStack: [
      {
        name: "Google ADK",
        description:
          "Core development kit for building AI agents with support for session management and conversational memory",
      },
      {
        name: "FastAPI",
        description:
          "Backend API framework handling business logic, orchestration, and integration with AI models and external services",
      },
      {
        name: "Gemini 2.5",
        description:
          "Google's advanced multimodal model powering insight generation and contextual understanding",
      },
      {
        name: "Tavily API",
        description:
          "Web search and information extraction API to augment data retrieval",
      },
      {
        name: "Frontend",
        description:
          "JavaScript / HTML / CSS for user interface and embedded dashboards",
      },
      {
        name: "Infrastructure",
        description:
          "AWS EC2 for scalable cloud infrastructure for hosting backend services and agents",
      },
      {
        name: "Deployment",
        description: "Docker for containerization and consistent deployment",
      },
    ],
    capabilities: [
      "Competitor Monitoring: Tracks competitor products, feature updates, and market positioning in real-time",
      "Feedback Analysis: Aggregates and analyzes customer feedback across multiple channels",
      "Feature Prioritization: Recommends feature development priorities based on competitive landscape",
      "Growth Insights: Identifies market gaps and opportunities through comprehensive data analysis",
      "Strategic Reporting: Generates executive-ready reports with actionable recommendations",
    ],
    extendedApplications: [
      "Product Growth Planning – Data-informed roadmap decisions based on competitor movements",
      "Investor/Stakeholder Briefings – Generates summaries for market and competitor briefings",
      "Launch Monitoring – Tracks user sentiment and impact post-product releases",
      "Market Expansion Analysis – Recommends regions or segments for potential growth",
    ],
    estimatedCosting: "To be determined",
    demoRecording: "Pending",
    websiteLink: "https://productbooster.aubergine.co/",
  },
  newsletter: {
    id: "newsletter",
    title: "Newsletter Generation AI Agent",
    subtitle: "Automates creation and delivery of customized newsletters",
    description:
      "This AI Agent automates the creation and delivery of customized newsletters. Users can specify topics of interest and relevant sources, and the agent will search the web, scrape relevant blog content, and generate concise summaries to populate a newsletter. Designed with scheduling and editorial control in mind, the system stores newsletters in markdown format, allowing users to review, edit, and approve them before distribution.",
    shortDescription:
      "Searches the web, scrapes relevant content, and generates concise summaries for newsletters",
    techStack: [
      {
        name: "n8n",
        description:
          "Orchestrates modular workflows for topic monitoring, web scraping, summarization, and newsletter dispatch",
      },
      {
        name: "FastAPI",
        description:
          "Backend service managing APIs, user sessions, newsletter state transitions, and integration with external services",
      },
      {
        name: "Celery + Redis",
        description:
          "Handles background job execution and manages scheduling logic to trigger workflows at predefined times",
      },
      {
        name: "SERP API",
        description:
          "Used to perform web searches and retrieve topic-relevant news content from search engine results",
      },
      {
        name: "React",
        description:
          "Powers the interactive frontend dashboard for setting newsletter preferences, editing drafts, managing schedules, and approving content",
      },
      {
        name: "OpenAI (GPT-4o mini)",
        description:
          "Powers blog summarization and helps generate newsletter sections that maintain the user's brand tone and clarity",
      },
      {
        name: "PostgreSQL",
        description:
          "Stores newsletters, user preferences, topics, and recipient information",
      },
    ],
    capabilities: [
      "Internet Research for News: Automatically searches the web for the most relevant and recent news articles",
      "Blog Summarization in Brand Voice: Scrapes and summarizes blog content while preserving the organization's tone",
      "Workflow-Driven Automation: Built using n8n, the entire process is modular, reliable, and easily maintainable",
      "Newsletter Compilation: Combines curated news and summaries into a structured, reader-friendly newsletter format",
    ],
    extendedApplications: [
      "Content Digest Delivery – Automated daily or weekly content curation for specific industries",
      "Internal Company Updates – Curating project updates, achievements, and announcements",
      "Investor Research – Aggregating financial news, market trends, and company developments",
      "Legal Case Research – Fetching relevant case laws, judgments, and regulatory updates",
      "Grant and Funding Opportunity Finder – Monitoring for new grants or funding programs",
    ],
    estimatedCosting: "To be determined",
    demoRecording: "Pending",
    websiteLink: "https://newsletter.aubergine.co/",
  },
  "exit-interview": {
    id: "exit-interview",
    title: "Voice AI Agent for Exit Interviews",
    subtitle: "Conducts real-time, voice-based exit interviews",
    description:
      "This Voice AI Agent is designed to conduct real-time, voice-based exit interviews with employees who are leaving the organization. Upon joining the call, the agent engages in a natural conversation, guided by a set of pre-defined HR questions. It actively listens, understands, and responds to the employee using AI-powered speech and language capabilities.",
    shortDescription:
      "Engages in natural conversations with departing employees using AI-powered speech capabilities",
    techStack: [
      {
        name: "LiveKit",
        description:
          "Enables real-time audio communication between the agent and the employee",
      },
      {
        name: "OpenAI (GPT-4o mini)",
        description:
          "Powers the conversational intelligence and contextual understanding",
      },
      {
        name: "Deepgram",
        description:
          "Converts employee speech into accurate text using real-time Speech-to-Text (STT)",
      },
      {
        name: "Cartesia",
        description:
          "Delivers natural-sounding responses via Text-to-Speech (TTS) synthesis",
      },
      {
        name: "Next.js",
        description:
          "Frontend framework for building the interactive HR dashboard and user interface",
      },
      {
        name: "FastAPI",
        description:
          "Backend service handling API orchestration, session management, and integration with AI services",
      },
      {
        name: "MongoDB",
        description:
          "Used for storing interview transcripts, sentiment analysis data, and user/session metadata",
      },
    ],
    capabilities: [
      "Real-time Conversation: Seamless voice interaction with employees using natural, human-like speech",
      "HR-Guided Dialogue: Follows customizable exit interview flows designed by the HR team",
      "Response Analysis: Captures and analyzes the conversation to extract sentiments and key points",
      "Summary Generation: Automatically generates a structured summary and sentiment report for HR review",
      "Dashboard Integration: Displays analytics and trends from exit interviews conducted over time",
    ],
    extendedApplications: [
      "Customer Support Automation – Handling common customer queries and escalating complex ones",
      "Screening Interviews – Conducting first-round interviews to shortlist candidates",
      "Survey Automation – Gathering voice feedback from customers or employees",
      "Healthcare Intake – Collecting initial patient symptoms and history before a consultation",
      "Sales Qualification Calls – Qualifying leads through dynamic conversations",
    ],
    estimatedCosting: "To be determined",
    demoRecording: "Pending",
    websiteLink: "https://exitinterview.aubergine.co/",
  },
};

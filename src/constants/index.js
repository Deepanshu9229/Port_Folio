import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  leucine,
  nitrr,
  aiims,
  ecommerce,
  llm_server,
  chatapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Enterprise Web Platforms",
    icon: web,
  },
  {
    title: "Backend & API Architecture",
    icon: backend,
  },
  {
    title: "Performance & Security (VAPT)",
    icon: creator,
  },
  {
    title: "Applied AI & Automation",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Leucine",
    icon: leucine,
    iconBg: "#0B132B",
    date: "OCT 2025 – Present",
    points: [
      "Cut initial bundle size by 76% (1.89 MB to 445 KB) by code-splitting the app into pre-login and post-login chunks with dynamic imports and React Suspense, closing a VAPT finding by reducing exposed API endpoints from 360 to 20.",
      "Replaced hardcoded role checks with a dynamic, backend-driven RBAC permission engine supporting 450+ granular permissions, letting admins change access control without code deployments.",
      "Architected a real-time deadline alert system using React, TypeScript, and Server-Sent Events (SSE), implementing exponential reconnect re-sync and event deduplication on a shared useSSE hook.",
      "Fixed race conditions between redux-persist rehydration, idle-timeout middleware, and saga-driven permission loading that left users on white screens after idle timeouts; re-login now resumes in place.",
      "Improved runtime performance on heavily used screens: replaced wildcard LIKE searches with exact-match identifier filters, eliminated duplicate list fetches on Jobs tabs, and moved permission checks to O(1) Set lookups.",
      "Engineered client-side 3-level licensing enforcement module (payment banners, feature gating, session re-verification) and implemented parent-child inheritance in the platform object model.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "NIT Raipur",
    icon: nitrr,
    iconBg: "#1f2937",
    date: "June 2024 – July 2024",
    points: [
      "Developed a Smart Farm Management System for efficient water usage and real-time farm sensor & telemetry management.",
      "Implemented real-time pump controls, automated timer adjustments, and multi-pump management dashboards.",
      "Optimized water usage and enhanced resource management through automated scheduling algorithms.",
    ],
  },
  {
    title: "Summer Research Intern",
    company_name: "AIIMS Raipur",
    icon: aiims,
    iconBg: "#E6DEDD",
    date: "June 2023 – July 2023",
    points: [
      "Analyzed biomedical signals and biological systems using Python, NumPy, and Pandas data pipelines.",
      "Simulated and processed waveforms in Google Colab for physiological signal analysis and feature extraction.",
    ],
  },
];

const projects = [
  {
    name: "E-Commerce Business Platform",
    description:
      "Full-stack e-commerce system featuring a responsive customer storefront and separate dedicated administrative CMS. Engineered stateless JWT auth with RBAC, Razorpay checkout with server-side verification, and a Multer/Cloudinary media CDN pipeline.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Razorpay",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Deepanshu9229/Perfume_42",
    live_demo_link: "https://perfume-frontend-dusky.vercel.app/",
  },
  {
    name: "Self-Hosted LLM & Automation Server",
    description:
      "Deployed and self-hosted Ollama (Llama 3.1 8B) on an Oracle Cloud Ubuntu VM, configuring swap memory and network ports to connect local AI inference APIs with containerized Docker and n8n automation workflows, with cron keep-alive scripts for 99.9% uptime.",
    tags: [
      {
        name: "Oracle Cloud",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama",
        color: "green-text-gradient",
      },
      {
        name: "n8n",
        color: "pink-text-gradient",
      },
      {
        name: "Llama 3.1",
        color: "blue-text-gradient",
      },
    ],
    image: llm_server,
    source_code_link: "https://github.com/Deepanshu9229",
  },
  {
    name: "Real-Time Chat Platform",
    description:
      "Full-stack real-time messaging application implementing stateless JWT authentication, low-latency live communication via Socket.IO, and a React frontend with Redux for state management and cookie-based sessions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://chatapp-one-ashen.vercel.app/",
  },
];

export { services, technologies, experiences, projects };

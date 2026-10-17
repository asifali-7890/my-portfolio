import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Develop modern web applications using file-based routing, layouts, server and client components, and API integration.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Build component-based user interfaces with reusable components, hooks, state management, and maintainable frontend architecture.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "TypeScript",
    description:
      "Write more maintainable JavaScript applications using static typing, interfaces, and type-safe component development.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Build interactive web applications using modern JavaScript, asynchronous operations, and browser APIs.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML5",
    description:
      "Create semantic, accessible page structures using modern HTML elements and web standards.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description:
      "Create responsive layouts and polished interfaces using modern CSS styling techniques.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Ant Design",
    description:
      "Build consistent enterprise application interfaces using reusable components, forms, tables, and modals.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "TanStack Query",
    description:
      "Manage asynchronous server state, API requests, caching, and data synchronization in React applications.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Axios",
    description:
      "Integrate frontend applications with HTTP APIs and handle requests and responses.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "REST API Integration",
    description:
      "Connect frontend interfaces to backend services and implement API-driven application workflows.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "NextAuth.js",
    description:
      "Work with authentication flows and session-related functionality in Next.js applications.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "Tailwind CSS",
    description:
      "Develop responsive interfaces using utility-first styling and reusable design patterns.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Git",
    description:
      "Manage source code, track changes, and collaborate through version control workflows.",
    rating: 4,
    icon: Icons.gitHub,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);

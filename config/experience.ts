import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "element-zero-labs",
    position: "Software Developer - Next.js",
    company: "Element Zero Labs",
    location: "Remote",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-10-01"),
    description: [
      "Contributed to the frontend development of Nexus Portal, an enterprise management platform built with Next.js, React, and TypeScript.",
      "Integrated REST APIs to support member management, organization management, authentication, and account security workflows.",
      "Built reusable UI components and responsive interfaces using Ant Design and modern frontend technologies.",
      "Worked within an existing enterprise codebase to develop credential history, credential revocation, and account recovery functionality.",
      "Contributed to frontend workflows involving password management, passkeys, recovery information, and two-factor authentication.",
    ],
    achievements: [
      "Implemented member management workflows, including organization membership changes and member removal.",
      "Developed credential history and revocation interfaces.",
      "Implemented magic-link history functionality and related credential management interfaces.",
      "Contributed to authentication and account security features.",
      "Refactored team member profile interfaces for consistency across multiple profile views.",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Javascript",
      "Docker",
      "Git",
    ],
  },
  {
    id: "techspheresoft",
    position: "Software Developer - React.js",
    company: "Techspheresoft Private Limited",
    location: "Kolkata, West Bengal, India",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Developed and maintained web application interfaces using React.js and modern JavaScript.",
      "Built responsive user interfaces and reusable components for maintainable frontend applications.",
      "Integrated APIs to connect frontend functionality with backend services.",
      "Applied modern frontend development practices while collaborating with team members on application features.",
    ],
    achievements: [
      "Developed and maintained React.js application interfaces.",
      "Built responsive layouts and reusable frontend components.",
      "Worked on API integration and application functionality.",
      "Strengthened practical experience with JavaScript and React.js in a professional development environment.",
    ],
    skills: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Git",
    ],
  },
];

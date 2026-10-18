import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asif Ali Quraishi | Software Engineer",
    short_name: "Asif Ali",
    description:
      "Asif Ali Quraishi - Software Engineer specializing in frontend development, full-stack applications, React, Next.js, TypeScript, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "web development",
      "frontend development",
      "full-stack development",
      "developer",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}

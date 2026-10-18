import {
  ValidCategory,
  ValidExpType,
  ValidSkills,
} from "./constants";


interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  videoSrc?: string;
  title?: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  playbackRate?: number;
}

export const PROJECT_VIDEOS = {
  "nexusportal":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792332062/nexus-portal-demo.mp4",

  "hospital-management":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792329974/Medvista-97MB.mp4",

  "asif-ecommerce":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330841/ecommerce2025-demo-video.mp4",

  "business-website":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330841/business-website-demo-video.mp4",

  "tomato-food-app":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330839/tomato-food-delivery-demo-video.mp4",

  "e-commerce":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330836/eccomerce2024-demo-video.mp4",

  "bluenext-technologies":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330835/company-website-demo-video.mp4",

  "airbnb-clone":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330833/airbnb-demo-video.mp4",

  "netflix-gpt":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330830/netflix.mp4",

  "bookstore":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330827/bookstore-demo-video.mp4",

  "hotel-booking":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330827/hotelbooking-demo-video.mp4",

  "note-zipper":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330826/notezipper-demo-video.mp4",

  "raju-chicken":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330823/rajuchicken-demo-video.mp4",

  "realtime-chat":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330818/realtime-demo-video.mp4",

  "sahand-estate":
    "https://res.cloudinary.com/dqyo06eyy/video/upload/v1792330817/realestate-demo-video.mp4",
} as const;

export const Projects: ProjectInterface[] = [
  // 1. PROFESSIONAL EXPERIENCE — MOST IMPORTANT PROJECT
  {
    id: "nexus-portal",
    companyName: "Nexus Portal — Enterprise Management Platform",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    videoSrc: PROJECT_VIDEOS["nexusportal"],
    title: "Nexus Portal full platform walkthrough",
    playbackRate: 2,

    shortDescription:
      "Enterprise management platform featuring authentication, user and organization management, and security workflows. Contributed to the frontend using Next.js, React, and TypeScript.",

    websiteLink: "https://nexusportal.work/",

    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "Node.js",
      "express.js",
      "MongoDB",
      "GraphQL",
      "Docker",
      "Git",
    ],

    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-09-30"),

    companyLogoImg: "/projects/nexus-portal/nexus-landing.png",

    pagesInfoArr: [
      {
        title: "Platform Overview",
        description:
          "Explore the Nexus Portal landing page and main dashboard, providing an overview of the enterprise platform and its management capabilities.",
        imgArr: [
          "/projects/nexus-portal/nexus-landing.png",
          "/projects/nexus-portal/nexus-dashboard.png",
        ],
      },

      {
        title: "Team Management",
        description:
          "Manage team members and departments through organized lists and dedicated workflows for creating departments and managing team information.",
        imgArr: [
          "/projects/nexus-portal/nexus-team-list.png",
          "/projects/nexus-portal/nexus-department-list.png",
          "/projects/nexus-portal/nexus-create-new-department.png",
        ],
      },

      {
        title: "Client Management",
        description:
          "Browse client records and manage client-related product information through dedicated client and product listing interfaces.",
        imgArr: [
          "/projects/nexus-portal/nexus-client-list.png",
          "/projects/nexus-portal/nexus-client-products.png",
        ],
      },

      {
        title: "Workspace Management",
        description:
          "Organize workspaces and manage workspace membership through workspace listings and workflows for creating workspaces and adding members.",
        imgArr: [
          "/projects/nexus-portal/nexus-workspace-list.png",
          "/projects/nexus-portal/nexus-create-new-workspace.png",
          "/projects/nexus-portal/nexus-add-member-to-workspace.png",
        ],
      },

      {
        title: "Product Management",
        description:
          "Manage products and organize product availability across groups and agencies using dedicated product management interfaces.",
        imgArr: [
          "/projects/nexus-portal/nexus-add-product.png",
          "/projects/nexus-portal/nexus-add-group-products.png",
          "/projects/nexus-portal/nexus-agency-products.png",
        ],
      },

      {
        title: "Member Profiles and Security",
        description:
          "View member profile information and security settings through dedicated profile interfaces for account and security management.",
        imgArr: [
          "/projects/nexus-portal/nexus-profile-member.png",
          "/projects/nexus-portal/nexus-profile-security.png",
        ],
      },

      {
        title: "Organization Management",
        description:
          "View and manage organization records through a dedicated organization listing interface.",
        imgArr: [
          "/projects/nexus-portal/nexus-org-list.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Nexus Portal is an enterprise management platform built around a microservices-based architecture. I worked at this company as a dedicated frontend engineer, fully responsible for building the entire frontend of the project over 1.2 years. During this time, I handled all the complexity of developing a robust, maintainable user interface using Next.js, React, and TypeScript.",

        "I managed everything from frontend architecture and integration with backend APIs, to complex state management and asynchronous coding. My work included implementing authentication, user management, organization management, and various security-related workflows. I was also responsible for reusable components, workflow orchestration, handling edge cases, and ensuring scalability, maintainability, and responsiveness throughout the application, etc.",
      ],

      bullets: [
        "Solely developed, maintained, and scaled the entire frontend for Nexus Portal over 1.2 years.",
        "Designed frontend architecture, managed complex state, and implemented asynchronous programming patterns.",
        "Built frontend features and custom UIs using Next.js, React, and TypeScript.",
        "Integrated REST APIs and handled application data with robust async handling.",
        "Implemented user, organization, and workspace management interfaces.",
        "Worked extensively on authentication, password management, passkeys, account recovery, and two-factor authentication flows.",
        "Developed credential history and revocation management features.",
        "Created and maintained reusable components and ensured a responsive UI.",
        "Addressed all frontend complexities, error handling, workflow logic, code quality, and worked closely with backend teams, etc.",
      ],
    },
  },

  // 2. HOSPITAL MANAGEMENT WEBSITE
  {
    id: "hospital-management",
    companyName: "MedVista — Hospital Management System",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A hospital management web application featuring patient records, doctor reports, appointment scheduling, medicine management, and personalized diet planning through an organized, user-friendly interface.",
    websiteLink: "https://medvista.ardent-start.com/",
    techStack: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2024-10-14"),
    endDate: new Date("2025-09-30"),
    companyLogoImg: "/projects/medvista/medvista-login-form.jpg",
    videoSrc: PROJECT_VIDEOS["hospital-management"],
    title: "MedVista Hospital Management System walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "A centralized dashboard that provides an overview of hospital information and helps users navigate the application's main features.",
        imgArr: [
          "/projects/medvista/medvista-dashboard.jpg",
          "/projects/medvista/medvista-dashboard-list.jpg",
        ],
      },
      {
        title: "Patient Management",
        description:
          "Patient management interfaces for viewing patient records, reviewing details, and adding patient information.",
        imgArr: [
          "/projects/medvista/medvista-patient-list.jpg",
          "/projects/medvista/medvista-patient-list-2.jpg",
          "/projects/medvista/medvista-add-patient-detail.jpg",
        ],
      },
      {
        title: "Appointment Management",
        description:
          "Appointment interfaces for scheduling appointments and reviewing appointment records.",
        imgArr: [
          "/projects/medvista/medvista-appointment-list.jpg",
          "/projects/medvista/medvista-appoinment-list.jpg",
          "/projects/medvista/medvista-book-appointment-form.jpg",
        ],
      },
      {
        title: "Doctor Reports",
        description:
          "Doctor report interfaces for presenting medical reporting information in a structured format.",
        imgArr: [
          "/projects/medvista/medvista-docters-report.jpg",
          "/projects/medvista/medvista-docters-reports.jpg",
          "/projects/medvista/medvista-docters-reportss.jpg",
        ],
      },
      {
        title: "Medicine Management",
        description:
          "A medicine management interface with a form for entering and organizing medicine information.",
        imgArr: [
          "/projects/medvista/medvista-add-medicine-form.jpg",
        ],
      },
      {
        title: "Diet Planning",
        description:
          "Diet planning interfaces for presenting weekly diet plans and organizing dietary information.",
        imgArr: [
          "/projects/medvista/medvista-dietplan-table.jpg",
          "/projects/medvista/medvista-weekly-dietplan.jpg",
        ],
      },
      {
        title: "Possible Causes",
        description:
          "An interface for entering and presenting possible causes associated with a patient's condition.",
        imgArr: [
          "/projects/medvista/medvista-add-possible-cause.jpg",
        ],
      },
      {
        title: "Login and Profile",
        description:
          "Account interfaces for accessing the application and viewing profile information.",
        imgArr: [
          "/projects/medvista/medvista-login-form.jpg",
          "/projects/medvista/medvista-profile-page.jpg",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "MedVista is a hospital management web application designed to bring common healthcare administration workflows together in one interface. It includes features for patient records, appointment scheduling, doctor reports, medicine management, and diet planning.",
        "The project focuses on organizing healthcare-related information into dedicated screens and forms, with an emphasis on clear navigation, usability, and a responsive user interface.",
      ],
      bullets: [
        "Developed a hospital management interface using React and JavaScript.",
        "Created patient listing and patient information forms.",
        "Built appointment listing and appointment booking interfaces.",
        "Designed interfaces for doctor reports and possible causes.",
        "Added medicine management and diet planning screens.",
        "Created login and user profile interfaces.",
        "Organized application features into dedicated sections for easier navigation.",
        "Focused on readable layouts, consistent UI patterns, and usability.",
      ],
    },
  },

  // REAL-TIME CHAT APPLICATION
  // REAL-TIME CHAT APPLICATION
  {
    id: "realtime-chat",
    companyName: "Real-Time Chat Application",
    type: "Personal",
    category: ["Web Dev", "Frontend", "Full Stack"],
    shortDescription:
      "A real-time chat application featuring user authentication, new chat creation, and conversation interfaces for seamless messaging.",
    githubLink:
      "https://github.com/asifali-7890/Realtime-Chat-Application",

    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Node.js",
      "express.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
    ],

    // Replace with your actual project dates.
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),

    companyLogoImg: "/projects/realtime/realtime-login.png",

    videoSrc: PROJECT_VIDEOS["realtime-chat"],
    title: "Real-Time Chat Application walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "User Authentication",
        description:
          "A login interface that provides users with access to the chat application.",
        imgArr: ["/projects/realtime/realtime-login.png"],
      },
      {
        title: "New Chat",
        description:
          "An interface for initiating new conversations.",
        imgArr: ["/projects/realtime/realtime-new-chat.png"],
      },
      {
        title: "Real-Time Conversations",
        description:
          "The conversation interface for viewing and participating in chat sessions.",
        imgArr: [
          "/projects/realtime/realtime-chat-conversation-happning.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "The Real-Time Chat Application is a communication-focused web project featuring user authentication, conversation creation, and a dedicated messaging interface.",
        "The project organizes the main messaging workflows into a straightforward interface, focusing on usability and a smooth conversation experience.",
      ],
      bullets: [
        "Created a login interface for user access.",
        "Developed an interface for starting new conversations.",
        "Built a dedicated conversation interface.",
        "Organized the application around authentication and messaging workflows.",
        "Focused on a clear and user-friendly chat experience.",
      ],
    },
  },

  // 3. RAJU CHICKEN — POULTRY E-COMMERCE
  {
    id: "raju-chicken",
    companyName: "Raju Chicken — Poultry E-Commerce",
    type: "Personal",
    category: ["Web Dev", "Frontend", "Full Stack"],
    shortDescription:
      "A poultry e-commerce website featuring product details, user authentication, checkout, and customer contact pages.",
    websiteLink: "https://raju-chicken.onrender.com/",
    githubLink: "https://github.com/asifali-7890/Raju-chicken",

    techStack: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],

    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),

    companyLogoImg: "/projects/rajuchicken/rajuchicken-dashboard.png",

    videoSrc: PROJECT_VIDEOS["raju-chicken"],
    title: "Raju Chicken — Poultry E-Commerce Walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The main interface for navigating the poultry e-commerce application and exploring its features.",
        imgArr: [
          "/projects/rajuchicken/rajuchicken-dashboard.png",
        ],
      },
      {
        title: "Product Details",
        description:
          "A product details page presenting poultry product information and available purchasing options.",
        imgArr: [
          "/projects/rajuchicken/rajuchicken-singleproduct-page.png",
        ],
      },
      {
        title: "Checkout",
        description:
          "The checkout interface for proceeding with a purchase.",
        imgArr: [
          "/projects/rajuchicken/rajuchicken-checkout-page.png",
        ],
      },
      {
        title: "User Authentication",
        description:
          "The login interface for users accessing the application.",
        imgArr: [
          "/projects/rajuchicken/rajuchicken-login-page.png",
        ],
      },
      {
        title: "Contact Us",
        description:
          "A contact page that allows customers to get in touch with the business.",
        imgArr: [
          "/projects/rajuchicken/rajuchicken-contactus-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Raju Chicken is a poultry e-commerce web application designed to present products and support an online shopping experience through a dedicated product page, authentication interface, and checkout workflow.",
        "The project brings together product browsing, purchasing-related interfaces, and customer contact information in a single web application, with an emphasis on usability and straightforward navigation.",
      ],
      bullets: [
        "Developed a poultry e-commerce user interface.",
        "Created a dashboard for navigating the application.",
        "Built a product details page for displaying product information.",
        "Implemented user login interface.",
        "Created a checkout page for the purchasing workflow.",
        "Developed a contact page for customer inquiries.",
        "Organized the application into clear, accessible sections.",
        "Focused on consistent UI patterns and user-friendly navigation.",
      ],
    },
  },

  // 4. ASIF ECOMMERCE
  {
    id: "asif-ecommerce",
    companyName: "Asif Ecommerce — Full-Stack E-Commerce App",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],

    shortDescription:
      "A MERN-stack e-commerce application featuring product management, product browsing, shopping checkout, order management, and user profile functionality.",

    websiteLink: "https://ecommerce-2025-jdli.onrender.com/",
    githubLink: "https://github.com/asifali-7890/Ecommerce-2025",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg: "/projects/ecommerce2025/ecommerce2025-dashboard-page.png",

    videoSrc: PROJECT_VIDEOS["asif-ecommerce"],
    title: "Asif Ecommerce — Full-Stack E-Commerce Walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The main dashboard providing an overview of the e-commerce application.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-dashboard-page.png",
        ],
      },
      {
        title: "Product Listings",
        description:
          "Product listing interfaces for browsing and managing products within the application.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-all-product-page.png",
          "/projects/ecommerce2025/ecommerce2025-all-products-page.png",
        ],
      },
      {
        title: "Product Details",
        description:
          "A product details page presenting information about an individual product.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-product-details-page.png",
        ],
      },
      {
        title: "Create New Product",
        description:
          "The interface for adding new products to the e-commerce application.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-create-new-product-page.png",
        ],
      },
      {
        title: "Checkout",
        description:
          "The checkout interface for progressing through the shopping workflow.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-checkout-page.png",
        ],
      },
      {
        title: "Order Management",
        description:
          "An interface for viewing and managing customer orders.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-all-orders-page.png",
        ],
      },
      {
        title: "User Authentication",
        description:
          "The login interface for users accessing the application.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-login-page.png",
        ],
      },
      {
        title: "User Profile",
        description:
          "The profile interface for displaying user account information.",
        imgArr: [
          "/projects/ecommerce2025/ecommerce2025-profile-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Asif Ecommerce is a full-stack e-commerce application built using the MERN stack. It demonstrates the integration of a React frontend with backend services and database-driven application data to support an online shopping experience.",
        "The application includes product browsing, product management, checkout, order management, authentication, and user profile interfaces. It brings these features together in an organized shopping application with a focus on usability and maintainable code.",
      ],

      bullets: [
        "Built an e-commerce application using the MERN stack.",
        "Developed product listing and product details interfaces.",
        "Created interfaces for adding and managing products.",
        "Implemented a checkout interface for the shopping workflow.",
        "Developed an order management page.",
        "Created login and user profile interfaces.",
        "Integrated frontend features with backend APIs and database-driven data.",
        "Focused on consistent UI patterns and a user-friendly shopping experience.",
      ],
    },
  },

  // 5. NETFLIXGPT
  {
    id: "netflix-gpt",
    companyName: "NetflixGPT — AI-Powered Movie Discovery App",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A Netflix-inspired movie discovery application featuring movie browsing, search functionality, and an AI-oriented discovery experience.",

    websiteLink: "https://netflixgpt-47c21.web.app/",
    githubLink: "https://github.com/asifali-7890/netflix-gpt",

    techStack: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "Firebase",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg: "/projects/netflixgpt/netflix-dashboard-page.png",

    videoSrc: PROJECT_VIDEOS["netflix-gpt"],
    title: "NetflixGPT — Movie Discovery App Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Movie Dashboard",
        description:
          "The main interface for exploring movies through a Netflix-inspired browsing experience.",
        imgArr: [
          "/projects/netflixgpt/netflix-dashboard-page.png",
        ],
      },
      {
        title: "Movie Collections",
        description:
          "A movie browsing section presenting available titles in an organized visual layout.",
        imgArr: [
          "/projects/netflixgpt/netflix-all-movies-section.png",
        ],
      },
      {
        title: "AI-Oriented Movie Search",
        description:
          "The search interface designed to help users discover movies more conveniently.",
        imgArr: [
          "/projects/netflixgpt/netflix-search-bar-page.png",
        ],
      },
      {
        title: "Movie Playback",
        description:
          "The movie playback interface for viewing a selected title.",
        imgArr: [
          "/projects/netflixgpt/netflix-single-movie-playback.png",
        ],
      },
      {
        title: "Login",
        description:
          "The login interface for user authentication.",
        imgArr: [
          "/projects/netflixgpt/netflix-login-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "NetflixGPT is a Netflix-inspired movie discovery application that combines a streaming-platform-style interface with movie search functionality. It provides users with a visual way to browse titles, explore available movies, and access individual movie experiences.",
        "The project demonstrates frontend development with React and Tailwind CSS, along with Firebase integration for supporting application services. Its interface is organized around movie discovery, search, authentication, and playback-related screens.",
      ],

      bullets: [
        "Developed a Netflix-inspired movie discovery interface using React.",
        "Created reusable components for organizing the application's UI.",
        "Built movie browsing sections to present available titles.",
        "Developed a movie search interface for discovering content.",
        "Created login and movie playback-related interfaces.",
        "Integrated Firebase for supporting application services.",
        "Used Tailwind CSS to style the application interface.",
        "Focused on responsive layouts and intuitive navigation.",
      ],
    },
  },

  // 6. TOMATO / FOOD DELIVERY APP
  {
    id: "tomato-food-app",
    companyName: "Tomato — Food Delivery App",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A food delivery application featuring dish browsing, popular food sections, and a checkout interface for a streamlined ordering experience.",

    websiteLink: "https://food-del-c58f2.web.app/",
    githubLink: "https://github.com/asifali-7890/Foody-Zone",

    techStack: ["React", "Javascript", "CSS 3"],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"), // Replace with actual end date

    companyLogoImg:
      "/projects/tomato-food-delivery/tomato-food-delivery-dashboard.png",

    videoSrc:
      PROJECT_VIDEOS["tomato-food-app"],
    title: "Tomato — Food Delivery App Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Food Delivery Dashboard",
        description:
          "The main interface for exploring the food delivery application and discovering available dishes.",
        imgArr: [
          "/projects/tomato-food-delivery/tomato-food-delivery-dashboard.png",
        ],
      },
      {
        title: "Top Dishes",
        description:
          "A dedicated section showcasing popular dishes to help users discover food options.",
        imgArr: [
          "/projects/tomato-food-delivery/tomato-food-delivery-top-dishes-section.png",
        ],
      },
      {
        title: "All Dishes",
        description:
          "A food browsing section displaying the available dishes in an organized layout.",
        imgArr: [
          "/projects/tomato-food-delivery/tomato-food-delivery-all-dishes-section.png",
        ],
      },
      {
        title: "Checkout",
        description:
          "The checkout interface for reviewing an order and proceeding through the ordering workflow.",
        imgArr: [
          "/projects/tomato-food-delivery/tomato-food-delivery-checkout-section..png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Tomato is a food delivery web application designed to provide a convenient interface for browsing dishes and navigating the food ordering experience. It includes a main dashboard, popular dish listings, a complete food browsing section, and a checkout interface.",
        "The project demonstrates frontend development with React and CSS, with an emphasis on reusable UI components, organized content, and straightforward navigation across the food discovery and ordering screens.",
      ],
      bullets: [
        "Developed a food delivery interface using React and JavaScript.",
        "Created a dashboard for browsing food offerings.",
        "Built sections for highlighting popular dishes and displaying available food items.",
        "Designed a checkout interface for the ordering workflow.",
        "Organized the interface into reusable components.",
        "Used CSS to style the application and maintain consistent layouts.",
        "Focused on intuitive navigation and a user-friendly browsing experience.",
      ],
    },
  },

  // 7. BOOKSTORE
  {
    id: "bookstore",
    companyName: "BookStore — Online Book Platform",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "An online bookstore web application featuring a dashboard, book-related content, and dedicated pages for exploring the platform.",

    websiteLink: "https://book-store-six-beta.vercel.app/",
    githubLink: "https://github.com/asifali-7890/BookStore",

    techStack: ["React", "Javascript", "Tailwind CSS"],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"), // Replace with actual end date

    companyLogoImg:
      "/projects/bookstore/bookstore-dashboard-section.png",

    videoSrc: PROJECT_VIDEOS["bookstore"],
    title: "BookStore — Online Book Platform Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "BookStore Dashboard",
        description:
          "The main interface introducing the bookstore platform and its content.",
        imgArr: [
          "/projects/bookstore/bookstore-dashboard-section.png",
        ],
      },
      {
        title: "Courses Section",
        description:
          "A dedicated section presenting the platform's available course-related content.",
        imgArr: [
          "/projects/bookstore/bookstore-courses-section.png",
        ],
      },
      {
        title: "About Us",
        description:
          "An informational page introducing the platform and its purpose.",
        imgArr: [
          "/projects/bookstore/bookstore-aboutus-section.png",
        ],
      },
      {
        title: "User Registration",
        description:
          "The signup interface for users registering with the platform.",
        imgArr: [
          "/projects/bookstore/bookstore-signup-section.png",
        ],
      },
      {
        title: "Contact Us",
        description:
          "A contact page providing an interface for users to get in touch.",
        imgArr: [
          "/projects/bookstore/bookstore-contactus-section.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "BookStore is a web application designed to present book-related content through an organized and accessible interface. It includes a dashboard alongside dedicated sections for courses, platform information, user registration, and contact details.",
        "The project demonstrates frontend development with React and Tailwind CSS, emphasizing reusable components, consistent styling, responsive layouts, and straightforward navigation.",
      ],
      bullets: [
        "Developed a bookstore-themed web interface using React and JavaScript.",
        "Created a dashboard to introduce the platform and its content.",
        "Built dedicated sections for courses, About Us, and Contact Us.",
        "Implemented a signup page interface for user registration.",
        "Organized the application into reusable React components.",
        "Used Tailwind CSS for consistent styling and responsive layouts.",
        "Focused on clear navigation and a user-friendly interface.",
      ],
    },
  },

  // 8. BLUENEXT TECHNOLOGIES
  {
    id: "bluenext-technologies",
    companyName: "BlueNext Technologies — Business Website",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],

    shortDescription:
      "A business website presenting software development services through a professional, responsive web interface.",

    websiteLink: "https://company-website-aqsj.onrender.com/",
    githubLink: "https://github.com/asifali-7890/company-website",

    techStack: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/company-website/company-website-dashboard.png",

    videoSrc:
      PROJECT_VIDEOS["bluenext-technologies"],
    title: "BlueNext Technologies — Business Website Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Website Dashboard",
        description:
          "The main landing page introducing BlueNext Technologies and its business offerings.",
        imgArr: [
          "/projects/company-website/company-website-dashboard.png",
        ],
      },
      {
        title: "Services",
        description:
          "A dedicated section presenting the company's software development services.",
        imgArr: [
          "/projects/company-website/company-website-services.png",
        ],
      },
      {
        title: "Pricing",
        description:
          "A pricing section displaying service plans or pricing information.",
        imgArr: [
          "/projects/company-website/company-website-pricing.png",
        ],
      },
      {
        title: "About Us",
        description:
          "An informational section introducing the company and its business.",
        imgArr: [
          "/projects/company-website/company-website-about.png",
        ],
      },
      {
        title: "Contact Form",
        description:
          "A contact interface allowing visitors to submit inquiries to the business.",
        imgArr: [
          "/projects/company-website/company-website-contact-form.png",
        ],
      },
      {
        title: "Apply Now",
        description:
          "An application interface for visitors interested in available opportunities.",
        imgArr: [
          "/projects/company-website/company-website-apply-now.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "BlueNext Technologies is a business website designed to present software development services and establish a professional online presence. It organizes company information, service offerings, pricing, and contact options into a structured browsing experience.",
        "The project demonstrates frontend development with React, JavaScript, HTML, and CSS, with an emphasis on reusable UI components, responsive layouts, and straightforward navigation.",
      ],
      bullets: [
        "Developed a business website using React and JavaScript.",
        "Created a landing page to introduce the company and its offerings.",
        "Built dedicated sections for services, pricing, and company information.",
        "Designed a contact form interface for customer inquiries.",
        "Created an Apply Now section for application-related interactions.",
        "Organized the interface into reusable components.",
        "Used HTML and CSS to structure and style the website.",
        "Focused on responsive layouts and clear navigation.",
      ],
    },
  },

  // 9. NOTE ZIPPER
  {
    id: "note-zipper",
    companyName: "Note Zipper — Note Management App",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],

    shortDescription:
      "A note-management web application that allows users to create, edit, organize, and manage their personal notes.",

    websiteLink: "https://note-zipper-hts5.onrender.com/",
    githubLink: "https://github.com/asifali-7890/Note-Zipper",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg: "/projects/notezipper/notezipper-dashboard.png",

    videoSrc: PROJECT_VIDEOS["note-zipper"],
    title: "Note Zipper — Note Management App Walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The main dashboard provides an interface for accessing and managing notes.",
        imgArr: [
          "/projects/notezipper/notezipper-dashboard.png",
        ],
      },
      {
        title: "Create Note",
        description:
          "The note creation interface allows users to write and save new notes.",
        imgArr: [
          "/projects/notezipper/notezipper-create-note.png",
        ],
      },
      {
        title: "Edit Note",
        description:
          "The editing interface allows users to update existing notes.",
        imgArr: [
          "/projects/notezipper/notezipper-edit-note.png",
        ],
      },
      {
        title: "User Login",
        description:
          "The login page provides an interface for registered users to access their accounts.",
        imgArr: [
          "/projects/notezipper/notezipper-login.png",
        ],
      },
      {
        title: "User Registration",
        description:
          "The registration page provides an interface for creating a new user account.",
        imgArr: [
          "/projects/notezipper/notezipper-register.png",
        ],
      },
      {
        title: "User Profile",
        description:
          "The profile page displays the user's account information.",
        imgArr: [
          "/projects/notezipper/notezipper-profile-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Note Zipper is a note-management web application designed to provide users with a straightforward way to create, edit, and manage personal notes. Its interface includes a dashboard, note creation and editing screens, and user account pages.",
        "The project demonstrates full-stack web development using React on the frontend and Node.js, Express.js, and MongoDB on the backend. It brings together note management and user account interfaces in a single application.",
      ],
      bullets: [
        "Developed a note-management application using React and JavaScript.",
        "Created a dashboard for accessing and managing notes.",
        "Built interfaces for creating and editing notes.",
        "Implemented login and registration page interfaces.",
        "Created a user profile page.",
        "Used Node.js and Express.js for backend application functionality.",
        "Used MongoDB for data storage.",
        "Focused on a clear interface and straightforward user experience.",
      ],
    },
  },

  // 10. E-COMMERCE PROJECT
  {
    id: "e-commerce",
    companyName: "E-Commerce — Online Shopping Project",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],

    shortDescription:
      "A full-stack e-commerce application featuring product listings, product management, user authentication, and profile management.",

    websiteLink: "https://e-commerce-foyt.onrender.com/",
    githubLink: "https://github.com/asifali-7890/E-commerce",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/ecommerce2024/ecommerce2024-productlist.png",

    videoSrc:
      PROJECT_VIDEOS["e-commerce"],
    title: "E-Commerce — Online Shopping Project Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Product Listing",
        description:
          "The product listing page presents available products in an organized layout for browsing.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-productlist.png",
        ],
      },
      {
        title: "Add New Product",
        description:
          "The product creation interface allows users to enter information when adding a product.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-add-new-product.png",
        ],
      },
      {
        title: "Update Product",
        description:
          "The product editing interface allows users to modify existing product information.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-update-product.png",
        ],
      },
      {
        title: "User Login",
        description:
          "The login page provides an interface for registered users to access their accounts.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-login.png",
        ],
      },
      {
        title: "User Registration",
        description:
          "The registration page provides an interface for creating a user account.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-register.png",
        ],
      },
      {
        title: "User Profile",
        description:
          "The profile page displays the user's account information.",
        imgArr: [
          "/projects/ecommerce2024/ecommerce2024-profile-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This e-commerce project is a web application built around common online shopping and product management workflows. It includes a product listing page, interfaces for adding and updating products, and user account screens for login, registration, and profile management.",
        "The project demonstrates full-stack web development using React on the frontend and Node.js, Express.js, and MongoDB on the backend, with an emphasis on organizing the application into clear interfaces and reusable components.",
      ],

      bullets: [
        "Developed an e-commerce application using React and JavaScript.",
        "Created a product listing interface for browsing available products.",
        "Built interfaces for adding new products and updating existing product information.",
        "Created login and registration page interfaces.",
        "Developed a user profile page.",
        "Used Node.js and Express.js for backend application functionality.",
        "Used MongoDB for data storage.",
        "Focused on clear navigation and a consistent user interface.",
      ],
    },
  },

  // 11. BUSINESS WEBSITE
  {
    id: "business-website",
    companyName: "Business Website",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],

    shortDescription:
      "A modern business website featuring a professional landing page, service highlights, and a clean, responsive user interface.",

    websiteLink: "https://business-website-fml2.vercel.app/",
    githubLink: "https://github.com/asifali-7890/Business-Website",

    techStack: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/business-website/business-website-dashboard.png",

    videoSrc:
      PROJECT_VIDEOS["business-website"],
    title: "Business Website — Project Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Website Dashboard",
        description:
          "The main landing page introduces the website with a professional layout and organized content sections.",
        imgArr: [
          "/projects/business-website/business-website-dashboard.png",
        ],
      },
      {
        title: "Feature Section 1",
        description:
          "Highlights key website features using a structured layout designed to make information easy to explore.",
        imgArr: [
          "/projects/business-website/business-website-feature-section-1.png",
        ],
      },
      {
        title: "Feature Section 2",
        description:
          "Continues the website's feature presentation with a consistent design and clear content hierarchy.",
        imgArr: [
          "/projects/business-website/business-website-feature-section-2.png",
        ],
      },
      {
        title: "Feature Section 3",
        description:
          "Presents additional website content while maintaining a consistent visual style across sections.",
        imgArr: [
          "/projects/business-website/business-website-feature-section-3.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This project focuses on building a professional business website that presents information through a clean layout and clearly organized sections. The landing page and feature sections help visitors explore the website's content.",
        "Built with React, JavaScript, HTML, and CSS, the project emphasizes reusable UI elements, responsive layouts, straightforward navigation, and a consistent visual experience.",
      ],

      bullets: [
        "Developed a business-focused website using React and JavaScript.",
        "Created a landing page with a professional layout.",
        "Organized website content into dedicated feature sections.",
        "Used reusable interface elements to maintain design consistency.",
        "Focused on responsive layouts and user-friendly navigation.",
        "Applied HTML and CSS to structure and style the interface.",
      ],
    },
  },

  // 13. SAHAND ESTATE — REAL ESTATE PLATFORM
  {
    id: "sahand-estate",
    companyName: "Sahand Estate — Real Estate Platform",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],

    shortDescription:
      "A full-stack real estate application featuring property listings, search, listing management, user authentication, and profile updates.",

    websiteLink: "https://asif-estate-qc2n.onrender.com/",
    githubLink: "https://github.com/asifali-7890/Sahand-Estate",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/realestate/realestate-dashboard.png",

    videoSrc:
      PROJECT_VIDEOS["sahand-estate"],
    title: "Sahand Estate — Real Estate Platform Walkthrough",
    playbackRate: 1,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The main dashboard introduces the real estate application and provides an entry point for exploring property listings.",
        imgArr: [
          "/projects/realestate/realestate-dashboard.png",
        ],
      },
      {
        title: "All Property Listings",
        description:
          "The listings page presents available properties in an organized layout, helping users browse real estate options.",
        imgArr: [
          "/projects/realestate/realestate-all-listings.png",
        ],
      },
      {
        title: "Search Listings",
        description:
          "The search interface helps users find properties based on available listing search and filtering options.",
        imgArr: [
          "/projects/realestate/realestate-search-listings.png",
        ],
      },
      {
        title: "Property Details",
        description:
          "The property details page displays information about an individual listing to help users explore a property.",
        imgArr: [
          "/projects/realestate/realestate-single-listing-detail-page.png",
        ],
      },
      {
        title: "Create Property Listing",
        description:
          "The listing creation interface allows users to enter property information and publish a new listing.",
        imgArr: [
          "/projects/realestate/realestate-create-listings.png",
        ],
      },
      {
        title: "Update Property Listing",
        description:
          "The listing management interface allows users to edit information for an existing property.",
        imgArr: [
          "/projects/realestate/realestate-update-listings.png",
        ],
      },
      {
        title: "User Login",
        description:
          "The login page provides an interface for users to access their accounts.",
        imgArr: [
          "/projects/realestate/realestate-login-page.png",
        ],
      },
      {
        title: "Google Authentication",
        description:
          "The authentication screen includes a Google sign-in option for users.",
        imgArr: [
          "/projects/realestate/realestate-login-with-google.png",
        ],
      },
      {
        title: "Update User Profile",
        description:
          "The profile management page allows users to update their account information.",
        imgArr: [
          "/projects/realestate/realestate-update-profile;.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Sahand Estate is a real estate web application designed to make property discovery and listing management accessible through a single interface. Users can explore property listings, search for properties, view individual listing details, and manage listing information.",
        "The application demonstrates full-stack web development using React on the frontend and Node.js, Express.js, and MongoDB for backend functionality and data storage. It also includes user authentication, Google sign-in, and profile management interfaces.",
      ],

      bullets: [
        "Developed a real estate application using React and JavaScript.",
        "Created interfaces for browsing and searching property listings.",
        "Built a detailed view for individual property listings.",
        "Implemented interfaces for creating and updating property listings.",
        "Included user login and Google sign-in functionality.",
        "Created a profile management interface for updating user information.",
        "Used Node.js and Express.js for backend application functionality.",
        "Used MongoDB for data storage.",
        "Focused on organized property information and a user-friendly interface.",
      ],
    },
  },

  // 14. AIRBNB CLONE — BOOKING PLATFORM
  {
    id: "airbnb-clone",
    companyName: "Airbnb Clone — Booking Platform",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],

    shortDescription:
      "A full-stack accommodation booking application featuring property listings, booking details, checkout, and user authentication.",

    websiteLink: "https://airbnb-client-ntyq.vercel.app/",
    githubLink: "https://github.com/asifali-7890/AirBnb-Client-Server",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/airbnb/airbnb-dashboard-page.png",

    videoSrc: PROJECT_VIDEOS["airbnb-clone"],
    title: "Airbnb Clone — Booking Platform Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The main page introduces the accommodation booking platform and provides an entry point for exploring available places.",
        imgArr: [
          "/projects/airbnb/airbnb-dashboard-page.png",
        ],
      },
      {
        title: "Available Booking Places",
        description:
          "The listings page presents available places in an organized layout, allowing users to browse accommodation options.",
        imgArr: [
          "/projects/airbnb/airbnb-all-booking-places.png",
        ],
      },
      {
        title: "Booking Details",
        description:
          "The booking details page displays information about a selected accommodation to help users review their booking.",
        imgArr: [
          "/projects/airbnb/airbnb-single-booking-page.png",
        ],
      },
      {
        title: "Booking Checkout",
        description:
          "The checkout page provides an interface for reviewing and proceeding with an accommodation booking.",
        imgArr: [
          "/projects/airbnb/airbnb-checkout-booking-page.png",
        ],
      },
      {
        title: "User Login",
        description:
          "The login page provides registered users with an interface to access their accounts.",
        imgArr: [
          "/projects/airbnb/airbnb-login-page.png",
        ],
      },
      {
        title: "User Registration",
        description:
          "The registration page provides an interface for new users to create an account.",
        imgArr: [
          "/projects/airbnb/airbnb-register-page.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "The Airbnb Clone is a web application inspired by accommodation booking platforms. It provides interfaces for exploring available places, viewing individual booking details, and proceeding through the checkout workflow.",
        "The project demonstrates full-stack web development with React on the frontend and Node.js, Express.js, and MongoDB for backend functionality and data storage. It also includes user authentication interfaces and a structured booking experience.",
      ],

      bullets: [
        "Developed an accommodation booking application using React and JavaScript.",
        "Created interfaces for browsing available accommodation listings.",
        "Built a page for viewing individual booking details.",
        "Developed a checkout interface for the booking workflow.",
        "Created login and registration interfaces.",
        "Used Node.js and Express.js for backend application functionality.",
        "Used MongoDB for data storage.",
        "Focused on clear navigation and a user-friendly booking experience.",
      ],
    },
  },

  // 15. HOTEL BOOKING — MERN ESTATE
  {
    id: "hotel-booking",
    companyName: "Hotel Booking — Accommodation Platform",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],

    shortDescription:
      "A hotel booking web application featuring a booking-focused dashboard and subscription section, built with the MERN stack.",

    githubLink: "https://github.com/asifali-7890/Booking_App",

    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "express.js",
    ],

    startDate: new Date("2024-01-01"), // Replace with actual start date
    endDate: new Date("2024-12-31"),   // Replace with actual end date

    companyLogoImg:
      "/projects/hotelbooking/hotelbooking-dashboard-section.png",

    videoSrc: PROJECT_VIDEOS["hotel-booking"],
    title: "Hotel Booking — Project Walkthrough",
    playbackRate: 2,

    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "The dashboard introduces the hotel booking application and presents its main interface for visitors.",
        imgArr: [
          "/projects/hotelbooking/hotelbooking-dashboard-section.png",
        ],
      },
      {
        title: "Subscription Section",
        description:
          "The subscription section presents subscription-related information through a dedicated interface.",
        imgArr: [
          "/projects/hotelbooking/hotelbooking-subsribe-section.png",
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This project explores the development of a web application for accommodation-related services, with a focus on presenting information through a clear and accessible interface.",
        "The project uses the MERN stack, combining React on the frontend with Node.js, Express.js, and MongoDB for full-stack application development. The included screenshots highlight the dashboard and subscription section.",
      ],

      bullets: [
        "Developed a web application using React and JavaScript.",
        "Created a dashboard interface for presenting the application.",
        "Built a dedicated subscription section.",
        "Used Node.js and Express.js for backend development.",
        "Used MongoDB for data storage.",
        "Focused on organized layouts and a consistent user interface.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Realtime-Chat-Application",
    contibutionDescription:
      "Real-time chat application featuring user authentication, new chat creation, and seamless messaging using React, Node.js, Express.js, MongoDB, and Socket.io.",
    repoOwner: "asifali-7890",
    link: "https://github.com/asifali-7890/Realtime-Chat-Application",
  },
  {
    repo: "Booking_App",
    contibutionDescription:
      "Hotel booking application built with the MERN stack, featuring an accommodation-focused dashboard and a dedicated subscription section.",
    repoOwner: "asifali-7890",
    link: "https://github.com/asifali-7890/Booking_App",
  },
  {
    repo: "Sahand-Estate",
    contibutionDescription:
      "Full-stack real estate platform featuring property listings, search, listing management, Google authentication, and profile updates using React, Node.js, Express.js, and MongoDB.",
    repoOwner: "asifali-7890",
    link: "https://github.com/asifali-7890/Sahand-Estate",
  },
  {
    repo: "Note-Zipper",
    contibutionDescription:
      "Full-stack note management application featuring note creation, editing, user authentication, and profile management using React, Node.js, Express.js, and MongoDB.",
    repoOwner: "asifali-7890",
    link: "https://github.com/asifali-7890/Note-Zipper",
  },
  {
    repo: "Ecommerce-2025",
    contibutionDescription:
      "Full-stack MERN e-commerce application featuring product browsing, product management, checkout, order management, authentication, and user profiles.",
    repoOwner: "asifali-7890",
    link: "https://github.com/asifali-7890/Ecommerce-2025",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted;

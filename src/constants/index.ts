import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  akira,
  cognizant,
  ghs,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Akira Software Solutions Inc.",
    icon: akira,
    iconBg: "#383E56",
    date: "January 2017 - September 2021",
    points: [
      "Developed and maintained full stack applications using Node.js, React , MongoDB and TypeScript ensuring high performance and responsiveness.",
      "Implemented best practices in coding standards, code reviews, and version control using Git.",
      "Designed and managed MongoDB databases, ensuring data integrity and efficiency for applications.",
      "Implemented communication protocols and service discovery mechanisms for seamless integration.",
      "Managed backlog tickets and stories, prioritizing tasks based on business objectives and requirements",
      "Maintained comprehensive documentation of application architecture, codebase, and development processes.",
    ],
  },
  {
    title: "Programmer",
    companyName: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "September 2021 - December 2022",
    points: [
      "Revamped User Interface in React, Elevated User Experience, Boosting Engagement by 20%.",
      "Implemented Cross-Browser Compatibility Solutions, Ensuring Application Functionality Across Various Platforms",
      "Architected and implemented microservices-based solutions, leveraging best practices for scalability and maintainability.",
      "Troubleshooted and optimized MongoDB performance issues, including query optimization and index tuning.",
      "Coordinated with development, support, database, and middleware teams to ensure smooth application operations.",
      "Identified, triaged, and troubleshooted bugs reported through Jira board, ensuring timely resolution.",
    ],
  },
  {
    title: "Global Health Solutions",
    companyName: "Full Stack Developer",
    icon: ghs,
    iconBg: "#383E56",
    date: "February 2023 - June 2024",
    points: [
      "Utilized extensive experience in Node.js, JavaScript, MongoDB and TypeScript to develop robust and scalable applications.",
      "Actively participated in Agile ceremonies including sprint planning, estimation, grooming sessions, and retrospectives to ensure project alignment and progress.",
      "Utilized Jira boards to triage bugs and tickets, prioritizing tasks based on impact and urgency to maintain project momentum.",
      "Apply hands-on experience in MongoDB to design, implement, and optimize database schemas and queries.",
      "Collaborated with cross-functional teams to deliver high-quality software within sprint cycles.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

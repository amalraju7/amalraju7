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
  akira,
  cognizant,
  ghs,
  cli,
  threejs,
  ai,
  studio,
  game,
  hectare,
  ghsv,
  prime,
  akirav,
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
    "testimonial": "Amal delivered an outstanding website for our company, perfectly reflecting our brand and values. The attention to detail and design was exceptional.",
    "name": "Rajesh Kumar",
    "designation": "CEO",
    "company": "Hectare Builders",
    "image": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "testimonial": "Working with Amal was a fantastic experience. Their expertise in modern web technologies ensured our site was not only beautiful but also highly functional.",
    "name": "Preeti Sharma",
    "designation": "Marketing Manager",
    "company": "Prime Glass And Railings Inc.",
    "image": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "testimonial": "Amal's innovative approach and dedication transformed our online presence. The new website has significantly improved user engagement and client satisfaction.",
    "name": "John Smith",
    "designation": "Project Manager",
    "company": "Global Health Solutions",
    "image": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "testimonial": "Amal's technical skills and creativity were instrumental in revamping our website. The result exceeded our expectations and has received great feedback from our users.",
    "name": "Ayesha Khan",
    "designation": "Lead Developer",
    "company": "Akira Software Solutions",
    "image": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "testimonial": "Amal's expertise in full stack development was evident in every aspect of the project. Their ability to handle complex challenges was impressive.",
    "name": "Sandeep Patel",
    "designation": "Senior Developer",
    "company": "Cognizant",
    "image": "https://randomuser.me/api/portraits/men/15.jpg"
  },

];

const projects: TProject[] = [
  {
    name: "CLI - Code Editor With TypeScript",
    description:
      "This project is a browser-based platform designed to provide a user-friendly space for writing, executing, and experimenting with React Typescript code directly in your browser.",
        tags: [
          {
            "name": "react",
            "color": "blue-text-gradient"
          },
          {
            "name": "mongodb",
            "color": "green-text-gradient"
          },
          {
            "name": "typescript",
            "color": "blue-light-text-gradient"
          },
          {
            "name": "axios",
            "color": "orange-text-gradient"
          },
          {
            "name": "prettier",
            "color": "orange-dark-text-gradient"
          },

          {
            "name": "monaco-editor",
            "color": "purple-light-text-gradient"
          },
          {
            "name": "redux",
            "color": "red-text-gradient"
          },
          {
            "name": "redux-thunk",
            "color": "orange-red-text-gradient"
          }
        ]
,        
        
    image: cli,
    websiteLink: "https://github.com/amalraju7/CLI",
    sourceCodeLink: "https://github.com/amalraju7/CLI",
  },
  {
    name: "Game Hub",
    description:
      "A video game discovery web app that helps you find new and interesting games to play. Search for games by platform, genre, and more to easily discover your next favorite game. Simplify your gaming experience with GameHub's intuitive search and recommendation features",   
       tags: [
        {
          "name": "react",
          "color": "blue-text-gradient"
        },
        {
          "name": "react-dom",
          "color": "blue-text-gradient"
        },
        {
          "name": "axios",
          "color": "orange-text-gradient"
        },
        {
          "name": "framer-motion",
          "color": "pink-text-gradient"
        },
        {
          "name": "chakra-ui",
          "color": "green-text-gradient"
        },
        {
          "name": "react-icons",
          "color": "blue-cyan-text-gradient"
        },
        {
          "name": "vite",
          "color": "red-text-gradient"
        },
        {
          "name": "typescript",
          "color": "blue-light-text-gradient"
        }
      ]
,      
    image: game,
    websiteLink: "https://gamers-world-theta.vercel.app/",
    sourceCodeLink: "https://github.com/amalraju7/game-hub",
  },
  {
    name: "AI Powered Twitter Bio Generator",
    description:
      "Utilizing cutting-edge AI technology, this tool crafts personalized, engaging, and creative Twitter bios in seconds. Tailored to reflect unique styles and interests, it helps users stand out and connect with their audience effortlessly.",  
        tags: [
          {
            name: "typescript",
            color: "blue-light-text-gradient",
          },
          {
            name: "nextjs",
            color: "red-text-gradient",
          },
          {
            name: "postcss",
            color: "purple-text-gradient",
          },
          {
            name: "radix",
            color: "orange-text-gradient",
          },
          {
            name: "zod",
            color: "teal-text-gradient",
          },
          {
            name: "ai-sdk",
            color: "gray-dark-text-gradient",
          },
          {
            name: "groq",
            color: "orange-dark-text-gradient",
          },
          {
            name: "graphql",
            color: "purple-light-text-gradient",
          },
          {
            name: "docker",
            color: "blue-cyan-text-gradient",
          },
          {
            name: "git",
            color: "orange-red-text-gradient",
          },
          {
            name: "firebase",
            color: "orange-dark-text-gradient",
          }
        ],
    image: ai,
    websiteLink: "https://ai-powered-twitter-bio-generator-woad.vercel.app/",
    sourceCodeLink: "https://github.com/amalraju7/AI-Powered-Twitter-Bio-Generator",
  },
  {
    name: "Stunning Fashion Studio Website",
    description:
      "This project utilizes Locomotive Scroll, GSAP, and Framer Motion to create a visually captivating and smooth user experience. Oak Studio showcases the latest fashion trends with dynamic animations and seamless interactions, making it a standout online presence for any fashion brand.", 
         tags: [
          {
            "name": "react",
            "color": "blue-text-gradient"
          },
          {
            "name": "react-dom",
            "color": "blue-text-gradient"
          },
          {
            "name": "framer-motion",
            "color": "pink-text-gradient"
          },
          {
            "name": "gsap",
            "color": "green-text-gradient"
          },
          {
            "name": "locomotive-scroll",
            "color": "red-text-gradient"
          },
          {
            "name": "styled-components",
            "color": "purple-text-gradient"
          },
          {
            "name": "react-router-dom",
            "color": "blue-cyan-text-gradient"
          },
          {
            "name": "normalize.css",
            "color": "gray-dark-text-gradient"
          }
        ]
        ,
    image: studio,
    websiteLink: "https://oak-studio.vercel.app/",
    sourceCodeLink: "https://github.com/amalraju7/oak-studio",
  },
   
];

const professional_projects: TProject[] = [
  {
    name: "Hectare Builders",
    description:
      "I fully built the Hectare Builders website for a client in India. This project involved creating a modern, user-friendly site that showcases Hectare Builders' construction projects, services, and expertise. The website features an intuitive design, easy navigation, and detailed information to attract and engage potential clients.",
              tags: [
                {
                  "name": "react",
                  "color": "blue-light-text-gradient"
                },
                {
                  "name": "next",
                  "color": "gray-dark-text-gradient"
                },
                {
                  "name": "firebase",
                  "color": "orange-dark-text-gradient"
                },
                {
                  "name": "sass",
                  "color": "purple-light-text-gradient"
                },
                {
                  "name": "bootstrap",
                  "color": "blue-cyan-text-gradient"
                },
                {
                  "name": "swiper",
                  "color": "orange-text-gradient"
                },
                {
                  "name": "eslint",
                  "color": "red-text-gradient"
                }
              ]
,              
    image: hectare,
    websiteLink: "https://hectarebuilders.in/",
    sourceCodeLink: "https://github.com/amalraju7/hectare-builders",
  },
  {
    name: "Global Health Solutions",
    description:
      "I built the website for Global Health Solutions, a healthcare company in Canada, during my tenure there. This project involved creating a comprehensive, user-friendly site that highlights the company's healthcare services, including COVID vaccination and flu shot services. The website features an intuitive design, easy navigation, and detailed information to engage and inform patients and clients.",  
        tags: [
          {
            "name": "nextjs",
            "color": "gray-dark-text-gradient"
          },
          {
            "name": "bootstrap",
            "color": "blue-cyan-text-gradient"
          },
          {
            "name": "firebase",
            "color": "orange-dark-text-gradient"
          },
          {
            "name": "sass",
            "color": "purple-light-text-gradient"
          },
          {
            "name": "disqus",
            "color": "teal-text-gradient"
          },
          {
            "name": "react",
            "color": "blue-light-text-gradient"
          },
          {
            "name": "tailwind",
            "color": "pink-text-gradient"
          }
        ]
,        
    image: ghsv,
    websiteLink: "https://www.globalhs.com/",
    sourceCodeLink: "",
  },
  {
    name: "Prime Glass And Railings",
    description:
      "I built the website for Prime Glass And Railings Inc., a client in Canada. This project involved creating a visually appealing and informative site that highlights their custom glass and railing products. The website is designed to be user-friendly, with clear navigation and comprehensive product details to engage and attract customers.", 
         tags: [
          {
            "name": "nextjs",
            "color": "gray-dark-text-gradient"
          },
          {
            "name": "bootstrap",
            "color": "blue-cyan-text-gradient"
          },
          {
            "name": "mongodb",
            "color": "green-text-gradient"
          },
          {
            "name": "sass",
            "color": "purple-light-text-gradient"
          },
          {
            "name": "react",
            "color": "blue-light-text-gradient"
          },
          {
            "name": "tailwind",
            "color": "pink-text-gradient"
          },
          {
            "name": "react-icons",
            "color": "blue-cyan-text-gradient"
          },
          {
            "name": "react-bootstrap",
            "color": "blue-cyan-text-gradient"
          }
        ]
        ,
    image: prime,
    websiteLink: "https://primeglassandrailings.ca//",
    sourceCodeLink: "",
  },
  {
    name: "Akira Software Solutions",
    description:
      "I modified the website for Akira Software Solutions, during my time working there. The project focused on enhancing the site's design and functionality to better showcase their software solutions. Improvements included streamlined navigation, updated content, and a refreshed visual layout to improve user engagement and effectively communicate the company's offerings.",   
       tags: [
        {
          "name": "nextjs",
          "color": "gray-dark-text-gradient"
        },
        {
          "name": "bootstrap",
          "color": "blue-cyan-text-gradient"
        },
        {
          "name": "sass",
          "color": "purple-light-text-gradient"
        },
        {
          "name": "react",
          "color": "blue-light-text-gradient"
        },
        {
          "name": "tailwind",
          "color": "pink-text-gradient"
        },
        {
          "name": "graphql",
          "color": "purple-light-text-gradient"
        },
        {
          "name": "postgresql",
          "color": "orange-dark-text-gradient"
        }
      ]
,      
    image: akirav,
    websiteLink: "https://www.akiraplc.com/",
    sourceCodeLink: "",
  },
   
];

export { services, technologies, experiences, testimonials, projects , professional_projects };

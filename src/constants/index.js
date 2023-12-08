import {
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  vue,
  github,
  material,
  sass,
  next,
  // bullz,
  contact_manager,
  // wom,
  makers,
  makersImg,
  genshin_clone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "react",
    icon: reactjs,
  },
  {
    name: "reduxtoolkit",
    icon: redux,
  },
  {
    name: "node",
    icon: nodejs,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },

  {
    name: "material",
    icon: material,
  },
  {
    name: "sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Makers",
    icon: makersImg,
    iconBg: "#333333",
    date: "June 2023 - September 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Makers",
    description: "Platform for online learning programming.",
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
    image: makers,
    demo: "https://github.com/zholbolduev/school-app",
  },

  {
    id: "project-2",
    name: "Contact-Manager",
    description:
      "Developed a contact manager with features for adding, editing, and deleting contacts, as well as searching and detailed contact viewing.",
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
    image: contact_manager,
    demo: "https://github.com/zholbolduev/contact-manager",
  },
  {
    id: "project-3",
    name: "Genshin clone",
    description:
      "The Genshin Clone is a web project inspired by the popular game Genshin Impact.",
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
    image: genshin_clone,
    demo: "https://github.com/zholbolduev/genshin-clone",
  },
  // {
  //   id: "project-4",
  //   name: "Bullz",
  //   description:
  //     "BULLZ is a social app, focused on video recommendations for all things web3, crypto and blockchain.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: bullz,
  //   demo: "https://www.bullz.com/",
  // },
  // {
  //   id: "project-5",
  //   name: "WOM",
  //   description: `The WOM Protocol is a brand new user-generated marketing channel that leverages the most effective form of marketing: honest word-of-mouth recommendations.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: wom,
  //   demo: "https://www.womprotocol.io/",
  // },
];

export { services, technologies, experiences, projects };

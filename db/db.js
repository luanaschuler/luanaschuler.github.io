export const bio = [
  "Hello there &#128075;",
  "As a Software Developer, I am continuously developing my expertise and learning new techonologies, demonstrating my commitment to professional growth. I'm a "
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "ReactJS, NodeJS, Redux",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, Styled Components",
    color: "4",
    percentage: "80",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Insomnia, Docker",
    color: "3",
    percentage: "70",
  },
  {
    title: "UX",
    skillName: "UX, UI",
    color: "5",
    percentage: "60",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "Travel Companion Application",
      image: "images/TravelApp.png",
      summary:
        "Developed a fullstack application that provides the location of restaurants, Attractions and Hotels around you.",
      preview: "https://travel-advisor-2022.netlify.app/",
      techStack: [
        "Javascript",
        "rapidApi",
        "google-maps-api",
        "snazzy maps",
        "Netlify",
      ],
    },
  ],
  softwareProjects: [
    {
      projectName: "Feedback Widget",
      image: "images/FeedbackWidget.png",
      summary: "Created a simple widget that displays feedback from users",
      preview: "https://github.com/luanaschuler/FeedbackWidget",
      techStack: ["ReactJS", "NodeJS", "JavaScript", "Typescript"],
    },
  ],
  androidProjects: [
    {
      projectName: "Podcastr",
      image: "images/podcastr.png",
      summary:
        "A platform built to broadcast a specific podcast for developers",
      preview: "https://github.com/luanaschuler/podcastr-nextjs",
      techStack: ["Typescript", "NextJS", "React"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "LetMeAsk",
      image: "images/letmeask.png",
      summary:
        "Let viewers decide which questions the host should answer during a livestream.",
      preview: "https://github.com/luanaschuler/letmeask-nwl",
      techStack: ["ReactJS", "Typescript", "Firebase", "Styled Components"],
    },
  ],
  ecommerce: [
    {
      projectName: "E-commerce",
      image: "images/Desktop.png",
      summary:
        "Developed a simple e-commerce website using an API for star wars products",
      preview: "https://github.com/luanaschuler/e_commerce_star_wars",
      techStack: ["ReactJS", "Javascript", "Material-UI"],
    },
  ],
  mobileproject: [
    {
      projectName: "PlantManager",
      image: "images/Capa.png",
      summary:
        "Mobile app to help you remember to take care of your plants easily",
      preview: "https://github.com/luanaschuler/plant-manager",
      techStack: ["React Native", "Expo", "Typescript"],
    },
  ],
};

export const experience = [
  {
    title: "Dropsmart Digital Solutions",
    duration: "September 2021 - January 2023",
    subtitle: "Frontend Developer",
    details: [
      "Previously worked on the Frontend of a digital marketing and e-commerce application that serves thousands of users, using ReactJS, Redux, and Material-UI. I participated in creating the system from scratch, designing components and functionalities to meet project needs, as well as providing assistance in system maintenance and bug resolution."
    ],
    tags: ["JavaScript", "ReactJS", "CSS", "Nodejs", "Redux", "Material-UI", "Styled Components",],
    icon: "qrcode",
  },
  {
    title: "CERTI Foundation",
    duration: "October 2020 - September 2021",
    subtitle: "Software Developer",
    details: [
      "I worked on a water quality indicator analysis project using satellite imagery, contributing to the creation of software using ReactJS, Python, and Postgres. My responsibilities included designing components that adhered to UX design principles, integrating the Frontend with the Backend and Database, implementing software testing, and developing additional software features. This project culminated in an article published in 2022 titled QDA-System: A Cloud-Based System for Monitoring Water Qual"
    ],
    tags: ["JavaScript", "React", "Styled Componentes", "Postgres", "Python", "Jenkins"],
    icon: "qrcode",
  },
];

export const education = [
  {
    title: "Degree in System Analysis and Development",
    duration: "",
    subtitle: "SENAI/SC - Brazil",
    details: [
      "I completed my studies in System Analysis and Development, where I gained proficiency in programming languages. During my studies, I also developed a strong foundation in software development methodologies, project management, and database design.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Project Management",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
      "Agile Systems",
      "QA and Test Applications", 
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/luanaschuler",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      // {
      //   text: "Enable Dark/Light Mode",
      //   func: "enableDarkMode()",
      // },
      {
        text: "Print this page",
        func: "window.print()",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/luanaschuler/",
      },
      {
        text: "Instagram",
        link: "https://instagram.com/luanaschuler",
      },
    ],
  },
  // {
  //   label: "copyright-text",
  //   data: [
  //     "Made with &hearts; by Vinay Somawat and styled by Luana.",   
  //   ],
  // },
];

const gitUserName = "luanaschuler";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};

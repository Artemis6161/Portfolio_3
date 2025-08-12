// src/data/projectsData.js

import resumeBuilderImg from "../assets/project-resume-builder.png"; // Adjust the path as necessary
import expenseTrackerImg from "../assets/project-expense-tracker.png"; 
import ecommerceImg from "../assets/project-ecommerce.png";
import netflixImg from "../assets/project-netflix.png";
export const projectsData = [
  {
    title: "Resume Builder (MERN)",
    description: "A full-stack application to create, save, and share professional resumes, featuring JWT authentication and a RESTful API.",
    imageUrl: resumeBuilderImg,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://resume-builder-frontend-u8i8.onrender.com/",
    repoUrl: "https://github.com/Artemis6161/resume-builder"
  },
  {
    title: "Income/Expense Tracker (MERN)",
    description: "A data-driven MERN stack app to track personal finances with CRUD functionality and data aggregation.",
    imageUrl: expenseTrackerImg,
    tags: ["React", "Node.js", "MERN", "Tailwind CSS"],
    liveUrl: "https://income-expense-tacker-frontend.onrender.com/login",
    repoUrl: "https://github.com/Artemis6161/income-expense-tacker"
  },
  {
    title: "E-commerce Frontend",
    description: "A complex and responsive e-commerce UI built with React, featuring state management for a shopping cart and product filtering.",
    imageUrl: ecommerceImg,
    tags: ["React", "Context API", "React Router", "FakeStore API"],
    liveUrl: "https://tranquil-pony-bf2071.netlify.app/",
    repoUrl: "https://github.com/Artemis6161/shopping-fake"
  },
  {
    title: "Netflix Clone Frontend",
    description: "A visually polished clone of the Netflix interface, fetching movie data from the TMDB API and displayed in dynamic carousels.",
    imageUrl: netflixImg,
    tags: ["React", "API", "Vite", "UI/UX"],
    liveUrl: "https://netflix-clone-93d11.web.app/",
    repoUrl: "https://github.com/Artemis6161/netflix-clone"
  },
];
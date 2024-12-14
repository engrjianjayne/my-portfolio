import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';

import { AiFillGithub } from 'react-icons/ai';
import ShinyEffect from './ShinyEffect.jsx';
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiGit, DiBootstrap } from 'react-icons/di'
import { BiLogoTailwindCss } from 'react-icons/bi'

const projects = [
  {
    img: project7,
    title: "Project #7",
    description: "A responsive data finance landing page made with React.js and Tailwind CSS highlights key insights with interactive features and works smoothly on all devices.",
    links: {
      site: "https://data-finance-sable.vercel.app/",
      github: "https://github.com/engrjianjayne/data-finance"
    },
    icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiReact />, <BiLogoTailwindCss />]
  },
  {
    img: project6,
    title: "Project #6",
    description: "CRUD: Create, Read, Upload and Delete Web App using React.js and Bootstrap.",
    links: {
      site: "https://crud-app-zeta-six.vercel.app/",
      github: "https://github.com/engrjianjayne/crud-app"
    },
    icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiReact />, <DiBootstrap />]
  },
  {
    img: project5,
    title: "Project #5",
    description: "Amazon (a JavaScript practice project).",
    links: {
      site: "https://engrjianjayne.github.io/amazon/javascript-amazon-project-main/amazon.html",
      github: "https://github.com/engrjianjayne/amazon"
    },
    icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiGit />]
  },
  {
    img: project4,
    title: "Project #4",
    description: "Rock Paper Scissors Game: Playing this game helped me understand web programming since it just used HTML5, CSS3, and JavaScript.",
    links: {
      site: "https://engrjianjayne.github.io/rock-paper-scissors/12-rock-paper-scissors.html",
      github: "https://github.com/engrjianjayne/rock-paper-scissors"
    },
    icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiGit />]
  },
  {
    img: project3,
    title: "Project #3",
    description: "To-Do List: My understanding of crud and local storage has improved thanks to this to-do list software.",
    links: {
      site: "https://engrjianjayne.github.io/to-do-list/12-todo-list.html",
      github: "https://github.com/engrjianjayne/to-do-list"
    },
    icons: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiGit />]
  },
  {
    img: project2,
    title: "Project #2",
    description: "UI for frontend development using HTML5 & CSS3.",
    links: {
      site: "https://engrjianjayne.github.io/pet-foody/",
      github: "https://github.com/engrjianjayne/pet-foody"
    },
    icons: [<DiHtml5 />, <DiCss3 />]
  },
  {
    img: project1,
    title: "Project #1",
    description: "An Article about Touchguidance: Enhancing Accessibility with an Arduino-based Smart Cane Device for Visually Impaired in San Pablo City of Laguna.",
    links: {
      site: "https://engrjianjayne.github.io/smart-cane/",
      github: "https://github.com/engrjianjayne/smart-cane"
    },
    icons: [<DiHtml5 />, <DiCss3 />]
  }
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className="relative max-w-[800px] mx-auto p-10 md:my-20 flex flex-col md:flex-row" id="portfolio">
      {/* Project Display Section */}
      <div className="glass p-6 w-full border-2 max-w-[100%] z-10">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-gray-200 my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        {/* Technology Icons */}
        <div className="flex flex-wrap mt-0 space-x-2 text-2xl text-gray-200">
          {projects[currentProject].icons.map((icon, index) => (
            <span key={index} className="flex items-center">
                {icon}
            </span>
          ))}
        </div>
          
        </div>
         
      </div>

      {/* Background Shiny Effect */}
      <div className="absolute inset-0">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
      </div>

      {/* Project Navigation */}
      <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;

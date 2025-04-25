import React, { useState, useEffect } from 'react';
import airesume from "../assets/airesume.png";
import hallbooking from "../assets/hallbooking.png";
import wow from "../assets/wow.png";
import rescue from "../assets/rescue.png";
import boat from "../assets/boat.png";
import craft from "../assets/craft.png";
import { FaReact, FaNodeJs, FaPython, FaVuejs, FaFigma, FaRobot, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiStrapi, SiOpenai, SiClerk, SiVite, SiPostgresql, SiVercel } from 'react-icons/si';

// Updated projects data
const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "Developed a sleek and intuitive resume builder web application with a strong emphasis on user experience and modern design. The front-end utilizes React, Vite.js, TailwindCSS, and Shadcn to create a polished and responsive interface. For a robust back-end, the app incorporates Clerk for user management, NeonDB for secure data storage, and Strapi as a headless CMS. It also leverages Axios for seamless API requests and the Gemini API for AI-driven enhancements. The builder achieves an ATS score of 60-70 and has been effectively used by my college mates for creating their own websites.",
    image: airesume,
    category: "web applications",
    technologies: ["React", "Tailwind", "Strapi", "OpenAI", "Clerk","Vite","NeonDB","JavaScript"],
    githubUrl: "https://github.com/Vikashuvi/AI-Resume",
    liveUrl: "https://ai-resume-builder.vercel.app/"
  },
  {
    id: 2,
    title: "GDSC WOW Tamil Nadu",
    description: "Developed the official website for GDSC WOW Tamilnadu, one of the largest events in Tamilnadu GDSC's history. The site is built using Tailwind CSS and HTML, focusing on creating a sleek, responsive, and user-friendly experience. It serves as the central hub for all event details, showcasing the event's significance and enhancing user engagement.",
    image: wow,
    category: "web applications",
    technologies: ["HTML", "CSS", "JavaScript","Tailwind"],
    githubUrl: "https://github.com/Vikashuvi/Wow-tamilnadu",
    liveUrl: "https://gdsc-wow-tn.vercel.app/"
  },
  {
    id: 3,
    title: "Hall Booking System",
    description: "Developed a hall booking system tailored for college management using React, Firebase, and Tailwind CSS. This application streamlines the process of reserving halls for events and meetings, providing a user-friendly interface for easy navigation and bookings. It integrates with Firebase for real-time data management and ensures a responsive, modern design through Tailwind CSS. This system enhances the efficiency of hall reservations within the college.",
    image: hallbooking,
    category: "web applications",
    technologies: ["React", "Tailwind", "Firebase","JavaScript","CSS"],
    githubUrl: "https://github.com/Vikashuvi/hall-booking-KSR",
    liveUrl: "https://hallbooking.ksrce.ac.in/"
  },

  {
    id: 4,
    title: "Rescue Net",
    description: "RescueNet is a web application designed to streamline the rescue operations during emergencies. It allows users to report incidents, request assistance, and track ongoing rescue missions in real-time. The platform features a user-friendly interface for quick reporting and dispatching of resources. It integrates with mapping services to provide real-time location tracking and updates. RescueNet also includes communication tools for coordination between rescue teams and individuals in need, ensuring efficient and effective emergency response.",
    image: rescue,
    category: "ux/ui design",
    technologies: ["Figma"],
    prototypeUrl: "https://www.figma.com/proto/oYSvBbKc0jZ75wKPhuOk3f/Rescue-net?node-id=121-292&p=f&t=IbBzUqKyt93MAzwr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=121%3A292"
  },

  {
    id: 5,
    title: "Boat Hero Page",
    description: "The Boat homepage is designed to be a modern and engaging entry point for users interested in exploring boating products and services. The homepage features a clean, visually appealing layout with high-quality images and prominent calls-to-action. It highlights key products and offers easy navigation to different sections, such as product categories, special offers, and customer support. The design emphasizes user experience with intuitive interfaces and a responsive design that ensures accessibility across various devices.",
    image: boat,
    category: "ux/ui design",
    technologies: ["Figma"],
    prototypeUrl: "https://www.figma.com/proto/Fw8oFH5eiF9nJX7PTB2HRg/Boat?node-id=1-2&t=Qz5otJTdZjmEuYNh-1"
  },
  {
    id: 6,
    title: "Craftors",
    description: "Craftors is a web-based application designed to bridge the gap between local skilled workers and customers in need of on-demand services. The platform connects users with nearby professionals such as plumbers, electricians, mechanics, and carpenters, making it easy to find reliable help in just a few clicks. This project focuses on solving the real-world problem of locating trustworthy service providers quickly and efficiently. Users can explore worker profiles, view availability, check reviews, and book services directly through the application.",
    image: craft,
    category: "ux/ui design",
    technologies: ["Figma"],
    prototypeUrl: "https://www.figma.com/proto/0h90eM54yqE5QuWrUyzCGF/web-design-Ui?node-id=1-2&t=q4FTrPJBRLQf93My-1"
  },
  // Add more projects as needed
];

const technologyIcons = {
  React: FaReact,
  Node: FaNodeJs,
  Python: FaPython,
  Vue: FaVuejs,
  Tailwind: SiTailwindcss,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Firebase: SiFirebase,
  Figma: FaFigma,
  Strapi: SiStrapi,
  OpenAI: SiOpenai,
  Clerk: SiClerk,
  Gemini: FaRobot, // Using a generic robot icon for AI
  Vite: SiVite,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  NeonDB: SiPostgresql, // Using PostgreSQL icon for NeonDB
  Vercel: SiVercel, // Adding Vercel icon
  // Add more technology icons as needed
};

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition duration-300 hover:shadow-xl cursor-pointer w-full h-full"
      onClick={() => setOpenModal({ type: 'details', project })}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col h-[180px]">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => {
            const IconComponent = technologyIcons[tech];
            return IconComponent ? (
              <IconComponent key={index} className="text-black dark:text-white text-xl" title={tech} />
            ) : (
              <span key={index} className="text-black dark:text-white text-sm bg-gray-200 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-30 px-2 py-1 rounded" title={tech}>
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 justify-between mt-auto">
          <div>
            {project.category === 'web applications' && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="text-lg" /> Source Code
              </a>
            )}
          </div>

          {project.category === 'web applications' && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-lg" /> Live Demo
            </a>
          )}

          {project.category === 'ux/ui design' && project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-3 py-1.5 rounded text-sm hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-md ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-lg" /> Prototype
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [toggle, setToggle] = useState('web applications');
  const [modalContent, setModalContent] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = ['web applications', 'ux/ui design'];

  const handleCloseModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    console.log('Toggle changed:', toggle);
    const filtered = projects.filter((project) => project.category === toggle);
    console.log('Filtered projects:', filtered);
    setFilteredProjects(filtered);
  }, [toggle]);

  return (
    <div id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">
          Projects
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  console.log('Changing category to:', category);
                  setToggle(category);
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  toggle === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white bg-opacity-20 text-black hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:bg-opacity-20 dark:text-white dark:hover:bg-blue-600'
                } backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition duration-300 ${
                  index === 0 ? 'rounded-l-lg' : ''
                } ${
                  index === categories.length - 1 ? 'rounded-r-lg' : ''
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setOpenModal={setModalContent}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-white">No projects found for this category.</p>
          )}
        </div>

        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg max-w-2xl w-full mx-4 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                {modalContent.type === 'source' ? 'Source Code' : 'Project Details'}
              </h2>
              {modalContent.type === 'source' ? (
                <p className="text-black dark:text-white">
                  Source code for {modalContent.project.title} goes here.
                </p>
              ) : (
                <div>
                  <img src={modalContent.project.image} alt={modalContent.project.title} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{modalContent.project.title}</h3>
                  <p className="text-black dark:text-white mb-4">{modalContent.project.description}</p>

                  {/* Links section */}
                  {/* Web applications links */}
                  {modalContent.project.category === 'web applications' && (
                    <div className="flex flex-wrap gap-3 mb-4 justify-between">
                      <div>
                        {modalContent.project.githubUrl && (
                          <a
                            href={modalContent.project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
                          >
                            <FaGithub className="text-lg" /> Source Code
                          </a>
                        )}
                      </div>
                      <div>
                        {modalContent.project.liveUrl && (
                          <a
                            href={modalContent.project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
                          >
                            <FaExternalLinkAlt className="text-lg" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* UX/UI design links */}
                  {modalContent.project.category === 'ux/ui design' && (
                    <div className="flex flex-wrap gap-3 mb-4 justify-end">
                      <div>
                        {modalContent.project.prototypeUrl && (
                          <a
                            href={modalContent.project.prototypeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white px-3 py-1.5 rounded text-sm hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-md"
                          >
                            <FaExternalLinkAlt className="text-lg" /> Prototype
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition duration-300 shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
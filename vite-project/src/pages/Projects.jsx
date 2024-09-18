import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import airesume from "../assets/airesume.png";
import hallbooking from "../assets/hallbooking.png";
import wow from "../assets/wow.png";
import rescue from "../assets/rescue.png";
import boat from "../assets/boat.png";
import { FaReact, FaNodeJs, FaPython, FaVuejs, FaFigma, FaRobot, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiStrapi, SiOpenai, SiClerk, SiVite, SiPostgresql, SiVercel } from 'react-icons/si';

// Updated projects data
const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "Developed a sleek and intuitive resume builder web application with a strong emphasis on user experience and modern design. The front-end utilizes React, Vite.js, TailwindCSS, and Shadcn to create a polished and responsive interface. For a robust back-end, the app incorporates Clerk for user management, NeonDB for secure data storage, and Strapi as a headless CMS. It also leverages Axios for seamless API requests and the Gemini API for AI-driven enhancements. The builder achieves an ATS score of 60-70 and has been effectively used by my college mates for creating their own websites.",
    image: airesume,
    category: "web development",
    technologies: ["React", "Tailwind", "Strapi", "OpenAI", "Clerk","Vite","NeonDB","JavaScript"],
    githubUrl: "https://github.com/Vikashuvi/AI-Resume" // Add this line
  },
  {
    id: 2,
    title: "GDSC WOW Tamil Nadu",
    description: "Developed the official website for GDSC WOW Tamilnadu, one of the largest events in Tamilnadu GDSC's history. The site is built using Tailwind CSS and HTML, focusing on creating a sleek, responsive, and user-friendly experience. It serves as the central hub for all event details, showcasing the event's significance and enhancing user engagement.",
    image: wow,
    category: "web development",
    technologies: ["HTML", "CSS", "JavaScript","Tailwind"],
    githubUrl: "https://github.com/Vikashuvi/Wow-tamilnadu" // Add this line
  },
  {
    id: 3,
    title: "Hall Booking System",
    description: "Developed a hall booking system tailored for college management using React, Firebase, and Tailwind CSS. This application streamlines the process of reserving halls for events and meetings, providing a user-friendly interface for easy navigation and bookings. It integrates with Firebase for real-time data management and ensures a responsive, modern design through Tailwind CSS. This system enhances the efficiency of hall reservations within the college.",
    image: hallbooking,
    category: "web development",
    technologies: ["React", "Tailwind", "Firebase","JavaScript","CSS"],
    githubUrl: "https://github.com/Vikashuvi/hall-booking-KSR" // Add this line
  },
  
  {
    id: 4,
    title: "Rescue Net",
    description: "RescueNet is a web application designed to streamline the rescue operations during emergencies. It allows users to report incidents, request assistance, and track ongoing rescue missions in real-time. The platform features a user-friendly interface for quick reporting and dispatching of resources. It integrates with mapping services to provide real-time location tracking and updates. RescueNet also includes communication tools for coordination between rescue teams and individuals in need, ensuring efficient and effective emergency response.",
    image: rescue,
    category: "ux/ui design",
    technologies: ["Figma"],
    
  },

  {
    id: 5,
    title: "Boat Hero Page",
    description: "The Boat homepage is designed to be a modern and engaging entry point for users interested in exploring boating products and services. The homepage features a clean, visually appealing layout with high-quality images and prominent calls-to-action. It highlights key products and offers easy navigation to different sections, such as product categories, special offers, and customer support. The design emphasizes user experience with intuitive interfaces and a responsive design that ensures accessibility across various devices.",
    image: boat,
    category: "ux/ui design",
    technologies: ["Figma"],
    
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

const ProjectCard = ({ project, setOpenModal, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition duration-300 hover:shadow-xl"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
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
        <div className="flex justify-between">
          {project.category === 'web development' && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
            >
              <FaGithub className="text-lg" /> Source Code
            </a>
          )}
          <button 
            onClick={() => setOpenModal({ type: 'details', project })}
            className="bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [toggle, setToggle] = useState('web development');
  const [modalContent, setModalContent] = useState(null);

  const categories = ['web development', 'ux/ui design'];

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      id="projects" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4"
        >
          Projects
        </motion.h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => setToggle(category)}
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
        
        <div className={`grid ${
          toggle === 'ux/ui design' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        } gap-8`}>
          {projects
            .filter((project) => project.category === toggle)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <ProjectCard 
                  project={project}
                  setOpenModal={setModalContent}
                  index={index}
                />
              </motion.div>
            ))}
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
                  {/* Add more project details here */}
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
    </motion.div>
  );
};

export default Projects;
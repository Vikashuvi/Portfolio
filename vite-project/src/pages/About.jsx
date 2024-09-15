import React from 'react';
import { Download } from 'lucide-react';
import profileImage from './../assets/vikash.jpg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left side - Image */}
        <div className="w-full md:w-1/3">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-64 h-64 object-cover mx-auto rounded-lg shadow-2xl drop-shadow-2xl dark:shadow-gray-700/50 dark:drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/40"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-2/3 mt-4">
          <h2 className="text-2xl font-semibold mb-4">Hello, </h2>
          <p className="mb-4 leading-relaxed">
            I am a Computer Science student and a full-stack React developer with a passion for building intuitive and engaging web applications. With a strong background in UI/UX design, I enjoy creating user-friendly interfaces and solving complex problems. I am constantly learning and exploring new technologies to enhance my skills and contribute to innovative projects.
          </p>
          
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
            onClick={() => {/* Add your download logic here */}}
          >
            Download Resume
            <Download size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
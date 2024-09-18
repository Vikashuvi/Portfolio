import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from './../assets/vikash.jpg';

const About = () => {
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
      className="container mx-auto px-4 py-8 relative z-10"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/3"
        >
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-64 h-64 object-cover mx-auto rounded-lg shadow-2xl drop-shadow-2xl dark:shadow-gray-700/50 dark:drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/40"
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-2/3 mt-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Hello, </h2>
          <p className="mb-4 leading-relaxed">
            I am a Computer Science student and a full-stack React developer with a passion for building intuitive and engaging web applications. With a strong background in UI/UX design, I enjoy creating user-friendly interfaces and solving complex problems. I am constantly learning and exploring new technologies to enhance my skills and contribute to innovative projects.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf'; // Assuming your file is named 'resume.pdf'
              link.download = 'Vikash_Resume.pdf';
              link.click();
            }}
          >
            Download Resume
            <Download size={18} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
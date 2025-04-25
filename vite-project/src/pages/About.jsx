import React, { useEffect, useState } from 'react';
import { Download, Code, Palette, Smartphone, Briefcase, Zap, User, Award, BookOpen, Lightbulb, Paintbrush } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from './../assets/vikash.jpg';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

  const glassmorphicStyle = {
    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    padding: '24px'
  };

  const expertiseAreas = [
    { title: 'Full-stack Development', icon: Code, description: 'Building complete web applications with modern frameworks and technologies.' },
    { title: 'Flutter Development', icon: Smartphone, description: 'Developing cross-platform mobile applications with Flutter framework.' },
    { title: 'UX/UI Design', icon: Palette, description: 'Creating intuitive and visually appealing user interfaces and experiences.' },
    { title: 'Graphic Design', icon: Paintbrush, description: 'Creating visual content for digital and print media with creative design solutions.' },
    { title: 'Freelancing', icon: Briefcase, description: 'Working on diverse client projects with adaptability and professionalism.' },
    { title: 'Fast Learner', icon: Zap, description: 'Quickly adapting to new technologies and methodologies to stay current.' }
  ];

  const aboutHighlights = [
    { title: 'Who I Am', icon: User, content: 'Full-stack Developer & Community Leader passionate about building impactful digital experiences.' },
    { title: 'My Expertise', icon: Award, content: 'Skilled in React.js, Tailwind CSS, Firebase, Flutter & JavaScript.' },
    { title: 'My Interests', icon: BookOpen, content: 'Design & development, DSA, system architecture, open source, and community building.' },
    { title: 'My Goal', icon: Lightbulb, content: 'Build scalable apps & inspire developers through community leadership.' }
  ];

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="container mx-auto px-4 py-16 relative z-10"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-16 text-center relative"
      >
        <span className="relative z-10">About Me</span>
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
      </motion.h1>

      {/* Hero Section with Asymmetric Layout */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
        {/* Left Column - Profile Image with Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="lg:w-2/5 relative"
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30"></div>
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg z-0"></div>
            <div className="absolute -left-6 -top-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg z-0"></div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-blue-500/40 z-10"
            />
          </div>

          {/* Resume Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg mx-auto mt-14"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Vikash_Resume.pdf';
              link.click();
            }}
          >
            Download Resume
            <Download size={18} />
          </motion.button>
        </motion.div>

        {/* Right Column - About Content */}
        <motion.div
          variants={itemVariants}
          className="lg:w-3/5"
        >
          <div className="p-8 rounded-2xl" style={{...glassmorphicStyle, borderLeft: '4px solid rgba(37, 99, 235, 0.5)'}}>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Hello! <span style={{color: 'yellow'}}>👋</span></h2>

            {/* About Highlights */}
            <div className="space-y-6">
              {aboutHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex-shrink-0 mt-1">
                    <highlight.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{highlight.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Expertise Section */}
      <motion.div variants={itemVariants} className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="relative z-10">My Expertise</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] border border-transparent hover:border-blue-500/30"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-8" style={glassmorphicStyle}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 mr-4 shadow-lg">
                    <area.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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

  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Strapi', icon: 'https://cdn.worldvectorlogo.com/logos/strapi-2.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const glassmorphicStyle = {
    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
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
        staggerChildren: 0.1
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
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="container mx-auto px-4 py-16 relative z-10"
    >
      <motion.h1 
        variants={itemVariants}
        className={`text-4xl font-bold mb-12 text-center text-ellipsis`}
      >
        Skills
      </motion.h1>
      <Marquee 
        gradient={false} 
        speed={40} 
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="mx-4 mb-8 py-6"
            variants={itemVariants}
          >
            <div
              className={`w-32 h-32 flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:scale-110 origin-center`}
              style={{
                ...glassmorphicStyle,
                transition: 'all 0.3s ease'
              }}
            >
              <div className="w-16 h-16 relative mb-4">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className={`text-center text-sm font-semibold text-ellipsis transition-colors duration-300`}>
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </motion.section>
  );
};

export default Skills;
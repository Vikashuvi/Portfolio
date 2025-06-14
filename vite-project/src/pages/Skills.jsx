import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = ({ isDarkTheme }) => {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Vite.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
        { name: 'GSAP', icon: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Strapi', icon: 'https://cdn.worldvectorlogo.com/logos/strapi-2.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'DynamoDB', icon: 'https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg' }
      ]
    },
    {
      title: "Developer & Designer Tools",
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
        { name: 'BitBucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
        { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Garuda Linux', icon: 'https://garudalinux.org/assets/garuda-purple.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' }
      ]
    }
  ];

  const glassmorphicStyle = {
    background: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
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
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
      >
        Skills
      </motion.h1>

      <div className="max-w-5xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            {/* Category Header */}
            <div className="flex items-center mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-6 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + (skillIndex * 0.05) }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600"
                    style={{
                      boxShadow: isDarkTheme
                        ? '0 0 15px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(0, 0, 0, 0.4)'
                        : '0 0 15px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.1)'
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: isDarkTheme
                        ? '0 0 20px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(0, 0, 0, 0.5)'
                        : '0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: isDarkTheme
                          ? 'brightness(1.2) drop-shadow(0 0 3px rgba(0, 0, 0, 0.5))'
                          : 'brightness(1.2) drop-shadow(0 0 3px rgba(0, 0, 0, 0.2))'
                      }}
                    />
                  </motion.div>
                  <span className="text-center text-xs font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section> 
  );
};

export default Skills;
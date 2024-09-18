import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-vertical-timeline-component/style.min.css';
// Import your logo images
import TechCorpLogo from '../assets/gdsc.png';
import StartupIncLogo from '../assets/quick.jpeg';  
import UniversityLogo from '../assets/atmega.jpeg';

const ExperienceContent = () => {
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

  const glassmorphicStyle = {
    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  };

  const timelineStyle = {
    ...glassmorphicStyle,
    padding: '20px',
    marginBottom: '40px'
  };

  const greyColor = '#808080'; // Medium grey color

  const iconStyle = {
    background: 'transparent', // Remove the background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0, // Remove any padding
  };

  const iconImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
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
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      id="experience" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={itemVariants}
          className={`text-3xl md:text-4xl font-bold text-center text-ellipsis mb-8`}
        >
          My Experience
        </motion.h2>
        <motion.div variants={itemVariants} style={timelineStyle}>
          <VerticalTimeline lineColor={greyColor}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="2024 - Present"
              iconStyle={iconStyle}
              icon={
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '50%' }}>
                  <img src={TechCorpLogo} alt="Tech Corp Logo" style={iconImageStyle} />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                GDGc Lead
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Google Developer Groups 
              </h4>
              <p>
              Selected as the GDSC Design Lead 2023 on my campus, I now serve as the GDG Lead, fostering innovation and collaboration in our developer community.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="2024 - Present"
              iconStyle={iconStyle}
              icon={
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '50%' }}>
                  <img src={StartupIncLogo} alt="Startup Inc Logo" style={iconImageStyle} />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                React Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Quick App Studio
              </h4>
              <p>
              Working as a React Developer at Quick App Studio, creating dynamic web applications and enhancing user experiences with modern front-end technologies.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="2023"
              iconStyle={iconStyle}
              icon={
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '50%' }}>
                  <img src={UniversityLogo} alt="University Logo" style={iconImageStyle} />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                UX/UI Designer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Atmega Software Technologies
              </h4>
              <p>
              Worked as a UX/UI Designer at Atmega Software Technologies, designing intuitive user interfaces for an ERP software system tailored to school management.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Experience = () => {
  return <ExperienceContent />;
};

export default Experience;
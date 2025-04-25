import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-vertical-timeline-component/style.min.css';
import '../TimelineStyles.css';
// Import your logo images
import GDGLogo from '../assets/GDG.webp';
import PrasklaLogo from '../assets/py.jpg';
import SpotKwikLogo from '../assets/spotkwik.png';
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

  // Custom CSS for desktop view content positioning
  const customTimelineStyles = `
    @media only screen and (min-width: 1170px) {
      .vertical-timeline.vertical-timeline--two-columns:before {
        left: 50%;
        margin-left: -2px;
      }

      .vertical-timeline-element {
        margin: 4em 0;
      }

      /* Fix content positioning */
      .vertical-timeline-element-content {
        margin-left: 0;
        padding: 1.5em;
        width: 44%;
      }

      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content,
      .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content {
        float: right;
      }

      .vertical-timeline-element-content .vertical-timeline-element-date {
        position: absolute;
        width: 100%;
        left: 124%;
        top: 6px;
        font-size: 16px;
      }

      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date,
      .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content .vertical-timeline-element-date {
        left: auto;
        right: 124%;
        text-align: right;
      }
    }
  `;

  const greyColor = '#808080'; // Medium grey color

  const iconStyle = {
    background: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)', // Slate background in dark mode, white in light mode
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    boxShadow: isDarkMode ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.2)',
    border: isDarkMode ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(0, 0, 0, 0.05)',
    // Make the icon circles bigger
    width: '70px',  // Increased from 60px
    height: '70px', // Increased from 60px
  };

  const iconContainerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '50%',
    padding: '6px', // Reduced padding to allow for bigger logo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const iconImageStyle = {
    width: '90%', // Increased size
    height: '90%',
    objectFit: 'contain', // Ensures the logo maintains its aspect ratio
    borderRadius: '50%',
    maxWidth: '56px', // Increased from 48px
    maxHeight: '56px', // Increased from 48px
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
      {/* Add custom styles to fix timeline line centering */}
      <style>{customTimelineStyles}</style>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className={`text-3xl md:text-4xl font-bold text-center text-ellipsis mb-8`}
        >
          My Experience
        </motion.h2>
        <motion.div variants={itemVariants} style={timelineStyle}>
          <VerticalTimeline lineColor={greyColor} className="custom-timeline">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="February 2025 - Present"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={PrasklaLogo}
                    alt="Praskla Technology Logo"
                    style={{
                      ...iconImageStyle,
                      maxWidth: '60px',
                      maxHeight: '60px'
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Full Stack & Flutter Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Praskla Technology
              </h4>
              <p>
                Built the Enterprise Management System frontend with Flutter and integrated backend services. Designed and deployed a responsive company website using React.js and Tailwind CSS. Handled end-to-end deployment for web and mobile apps, ensuring performance and scalability.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="October 2024 - Present"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={SpotKwikLogo}
                    alt="SpotKwik Logo"
                    style={{
                      ...iconImageStyle,
                      maxWidth: '60px',
                      maxHeight: '60px'
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Software Development Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SpotKwik
              </h4>
              <p>
                Contributed as an SDE Intern, delivering 6 real-time projects. Collaborated with teams to build scalable solutions and wrote high-quality code ensuring performance and reliability.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="August 2024 - Present"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={GDGLogo}
                    alt="GDG Logo"
                    style={{
                      ...iconImageStyle,
                      width: '95%',  // Increased specifically for GDG logo
                      height: '95%', // Increased specifically for GDG logo
                      maxWidth: '62px', // Larger than the default
                      maxHeight: '62px' // Larger than the default
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                On Campus Organiser
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Google Developer Groups On Campus - KSRIET
              </h4>
              <p>
                Cracked Google's interview and currently serving as the On-Campus Organizer for Google Developer Groups On Campus – KSRIET. Leading a vibrant community of 600+ members, organizing impactful tech events, and driving campus-wide developer engagement.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="April 2023 - August 2024"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={TechCorpLogo}
                    alt="Tech Corp Logo"
                    style={{
                      ...iconImageStyle,
                      maxWidth: '60px', // Slightly larger than the default
                      maxHeight: '60px' // Slightly larger than the default
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Design Lead
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Google Developer Student Clubs
              </h4>
              <p>
              Selected and served as Design Lead at Google Developer Student Clubs KSRIET. Led design initiatives for events, workshops, and marketing materials, while mentoring design-focused members.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="August 2024 - October 2024"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={StartupIncLogo}
                    alt="Startup Inc Logo"
                    style={{
                      ...iconImageStyle,
                      maxWidth: '60px', // Slightly larger than the default
                      maxHeight: '60px' // Slightly larger than the default
                    }}
                  />
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
              Developed a responsive HRMS platform using React, enhancing employee management and user experience. Worked closely with the team to ensure smooth functionality and performance.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={glassmorphicStyle}
              contentArrowStyle={{ borderRight: isDarkMode ? '7px solid rgba(255, 255, 255, 0.2)' : '7px solid rgba(0, 0, 0, 0.1)' }}
              date="April 2023 - May 2023"
              iconStyle={iconStyle}
              icon={
                <div style={iconContainerStyle}>
                  <img
                    src={UniversityLogo}
                    alt="University Logo"
                    style={{
                      ...iconImageStyle,
                      maxWidth: '60px', // Slightly larger than the default
                      maxHeight: '60px' // Slightly larger than the default
                    }}
                  />
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
              Designed a responsive UI for a school ERP system using Figma, improving workflows and user experience. Collaborated with stakeholders to align designs with institutional goals.
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
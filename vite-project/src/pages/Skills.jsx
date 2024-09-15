import React from 'react';
import Marquee from 'react-fast-marquee';

const Skills = ({ isDarkTheme }) => {
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

  const textGlowStyle = {
    textShadow: isDarkTheme 
      ? '0 0 10px rgba(31,38,135,0.37), 0 0 20px rgba(31,38,135,0.2)'
      : '0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.05)'
  };

  const subtleBlueGlowStyle = {
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 5px rgba(74, 159, 255, 0.3)'
  };

  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h1 className={`text-4xl font-bold mb-12 text-center text-ellipsis`} style={textGlowStyle}>Skills</h1>
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
          <div key={index} className="mx-4 mb-8 py-6">
            <div className={`w-32 h-32 flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:scale-110 origin-center 
              ${isDarkTheme 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-black/5 hover:bg-black/10'
              } 
              backdrop-filter backdrop-blur-xl border 
              ${isDarkTheme ? 'border-white/20' : 'border-black/10'}
              `}
              style={subtleBlueGlowStyle}
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
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
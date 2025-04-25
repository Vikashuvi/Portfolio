import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Home, User, Briefcase, Code, Mail, Cpu } from 'lucide-react';
import '../index.css';

const Portfolio = ({ toggleTheme, isDarkTheme }) => {
  const [activeLink, setActiveLink] = useState('home');

  const textGlowStyle = {
    textShadow: isDarkTheme
      ? '0 0 10px rgba(31,38,135,0.37), 0 0 20px rgba(31,38,135,0.2)'
      : '0 0 10px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.05)'
  };

  const separatorGlowStyle = {
    textShadow: '0 0 10px #4a9fff, 0 0 20px #4a9fff, 0 0 30px #4a9fff',
    color: '#4a9fff'
  };

  const subtleBlueGlowStyle = {
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 5px rgba(74, 159, 255, 0.3)'
  };

  const name = "Vikash Thirumurugan";

  const navItems = [
    { name: 'home', icon: Home },
    { name: 'about', icon: User },
    { name: 'skills', icon: Cpu },
    { name: 'projects', icon: Code },
    { name: 'experience', icon: Briefcase },
    { name: 'contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80; // Adjust this value to account for any fixed headers
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setActiveLink(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sections = navItems.map(item =>
        item.name === 'home' ? { offsetTop: 0, offsetHeight: window.innerHeight } : document.getElementById(item.name)
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop + (section.offsetHeight / 2)) {
          setActiveLink(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl p-4 ${
        isDarkTheme ? 'bg-white/10' : 'bg-black/5'
      } backdrop-filter backdrop-blur-xl border ${
        isDarkTheme ? 'border-white/20' : 'border-black/10'
      } rounded-2xl z-50 font-['Poppins']`} style={subtleBlueGlowStyle}>
        <div className="flex justify-between items-center">
          <a href="#" className={`${isDarkTheme ? 'text-white' : 'text-black'} text-xl font-semibold tracking-wide relative group`} style={textGlowStyle}>
            &lt;Portfolio/&gt;
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkTheme ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name}`}
                className={`${isDarkTheme ? 'text-white hover:text-white' : 'text-black hover:text-black'} transition duration-300 ease-in-out text-sm tracking-wide font-medium relative ${
                  activeLink === item.name ? (isDarkTheme ? 'text-white' : 'text-black') : (isDarkTheme ? 'text-white/90' : 'text-black/70')
                }`}
                style={textGlowStyle}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.name);
                }}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                <span className={`absolute -bottom-1 left-0 h-0.5 ${isDarkTheme ? 'bg-white' : 'bg-black'} transition-all duration-300 ${
                  activeLink === item.name ? 'w-full' : 'w-0'
                }`}></span>
              </a>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className={`${isDarkTheme ? 'text-white' : 'text-black'} hover:bg-white/20 p-2 rounded-full transition-colors duration-300`}
            style={textGlowStyle}
          >
            {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm p-2 bg-white/10 dark:bg-black/10 backdrop-filter backdrop-blur-xl border border-white/20 dark:border-black/20 rounded-full z-50">
        <nav className="flex justify-around items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name}`}
              className={`p-2 rounded-full ${
                activeLink === item.name
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.name);
              }}
            >
              <item.icon size={20} />
            </a>
          ))}
        </nav>
      </div>

      <main className="pt-24 px-6 flex flex-col items-center justify-center min-h-screen">
        <h1 className="luminance-text text-4xl sm:text-4xl md:text-8xl font-normal mb-4 font-['Beau_Rivage',cursive] text-center">
          {name}
        </h1>

        <p className={`text-lg sm:text-xl md:text-2xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-center max-w-2xl font-['Poppins',sans-serif] font-light`}>
        Full Stack Developer <span style={separatorGlowStyle}>|</span> Flutter Developer <span style={separatorGlowStyle}>|</span> UX/UI Designer <span style={separatorGlowStyle}>|</span> Graphic Designer <span style={separatorGlowStyle}>|</span> Python Programmer
        </p>
      </main>
    </div>
  );
};

export default Portfolio;
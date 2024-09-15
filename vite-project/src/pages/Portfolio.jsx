import React, { useState } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import '../index.css';

const Portfolio = ({ toggleTheme, isDarkTheme }) => {
  const [activeLink, setActiveLink] = useState('Home');

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

  return (
    <div>
      <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl p-4 ${
        isDarkTheme ? 'bg-white/10' : 'bg-black/5'
      } backdrop-filter backdrop-blur-xl border ${
        isDarkTheme ? 'border-white/20' : 'border-black/10'
      } rounded-2xl z-50 font-['Poppins']`} style={subtleBlueGlowStyle}>
        <div className="flex justify-between items-center">
          <a href="#" className={`${isDarkTheme ? 'text-white' : 'text-black'} text-xl font-semibold tracking-wide relative group`} style={textGlowStyle}>
            LOGO
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkTheme ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`${isDarkTheme ? 'text-white hover:text-white' : 'text-black hover:text-black'} transition duration-300 ease-in-out text-sm tracking-wide font-medium relative ${
                  activeLink === item ? (isDarkTheme ? 'text-white' : 'text-black') : (isDarkTheme ? 'text-white/90' : 'text-black/70')
                }`}
                style={textGlowStyle}
                onClick={() => setActiveLink(item)}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkTheme ? 'bg-white' : 'bg-black'} transition-all duration-300 ${
                  activeLink === item ? 'w-full' : 'group-hover:w-full'
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
      
      <main className="pt-24 px-6 flex flex-col items-center justify-center min-h-screen">
        <h1 className="luminance-text text-5xl md:text-7xl font-normal mb-4 font-['Beau_Rivage',cursive] text-center">
          {name}
        </h1>
        
        <p className={`text-xl md:text-2xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-center max-w-2xl font-['Poppins',sans-serif] font-light`}>
          UI/UX Designer <span style={separatorGlowStyle}>|</span> Full Stack React Developer <span style={separatorGlowStyle}>|</span> Java Programmer
        </p>
      </main>
    </div>
  );
};

export default Portfolio;
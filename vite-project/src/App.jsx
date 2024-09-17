import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark bg-black text-white' : 'light bg-white text-black'}`}>
      <div className={`fixed top-0 left-0 w-full h-full ${
        isDarkTheme 
          ? 'bg-[linear-gradient(to_right,#151719_0.75px,transparent_0.5px),linear-gradient(to_bottom,#1A1D1E_0.75px,transparent_0.5px)]' 
          : 'bg-[linear-gradient(to_right,#E0E0E0_0.75px,transparent_0.5px),linear-gradient(to_bottom,#E0E0E0_0.75px,transparent_0.5px)]'
      } bg-[size:40px_40px]`} />
      
      <div className="relative z-10">
        <Portfolio toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
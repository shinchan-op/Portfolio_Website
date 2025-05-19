import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import MatrixBackground from './components/MatrixBackground/MatrixBackground';

function App() {
  return (
    <>
      {/* Place MatrixBackground outside the App div */}
     
      <div className="App">
      <MatrixBackground />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Chhayank Patel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

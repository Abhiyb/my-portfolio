import React from 'react'; // Added this line
  import Navbar from './components/Navbar';
  import Hero from './components/Hero';
import AboutMe from "./components/AboutMe";
import  Skills  from './components/Skills';
import Projects from './components/Projects'; 
import  Contact  from './components/Contact';
  function App() {
    return (
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Navbar />
        <Hero />
        <AboutMe/>
        <Skills/>
        <Projects/> 
        <Contact/>
            </div>
    );
  }

  export default App;
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className="bg-white black">
      <Header />
      <About />
      <Projects />
      <Contact />
   
    </div>
  );
};

export default App;
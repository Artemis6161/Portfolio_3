// src/components/Hero.jsx
import React from 'react';
import myAvatar from '../assets/hero-image.png'; // Adjust the path as necessary
import resume from '../assets/Resume.txt.pdf'; // Adjust the path as necessary
const Hero = () => {
  return (
   <section className="bg-surface min-h-screen flex flex-col md:flex-row items-center justify-center text-center gap-12 p-8 lg:p-16">
   <div className='text-center p-4'>
    <h1 className='font-serif text-5xl md:text-7xl font-bold text-text-primary'>
      Sangeetha Rajan
    </h1>
    <p className="font-sans text-xl text-text-secondary mt-4 max-w-2xl mx-auto md:mx-0">
 A Frontend & MERN Stack Developer passionate about building modern web applications.
    </p>
   
  <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8'>

  <a href="#projects" className="bg-accent text-surface font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
View My Work
  </a>
<a href={resume} target="_blank" rel="noopener noreferrer" className="border-2 border-text-secondary/40 text-text-secondary font-bold py-3 px-6 rounded-lg hover:bg-surface-light hover:border-text-secondary transition-all">
 Resume
</a>    
</div>

 </div>
  <div className="shrink-0 mt-12 md:mt-0">
  <img 
    src={myAvatar}
    alt="An illustration of a woman developer coding on a laptop." 
    className="
      w-64 h-64 md:w-80 lg:w-96 md:h-80 lg:h-96 
      transition-all duration-300 
      hover:scale-105 
      hover:shadow-2xl 
      hover:shadow-accent/30
    " 
  />
</div>
   </section>
  );
};

export default Hero;
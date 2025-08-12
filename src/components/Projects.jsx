import React from 'react'
import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';
const Projects = () => {
  return (
    <section id ="projects" className='py-8 lg:py-12'>
      
<div className='container mx-auto px-4'>
<h2 className='text-center font-serif text-4xl md:text-5xl font-bold text-text-primary mb-12 '>
    My Work
</h2>

<div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {projectsData.map((project) => (
            // Using spread props for cleaner code, but your original way is also correct!
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
</div>
      
    </section>
  )
}

export default Projects

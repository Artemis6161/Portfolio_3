import React from 'react'
const frontendSkills=["HTML5", "CSS3", "JavaScript (ES6+)", "React","Readux Toolkit", "Tailwind CSS"];
const backendSkills=["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"];
const toolsSkills=["Git", "GitHub", "VS Code", "Postman"];
const Skill = () => {
  return (
    <section id="skills" className='py-8 lg:py-12'>
      <div className='container mx-auto px-4'>
         <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-text-primary mb-12">
          My Toolbox
        </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">

  <div className="bg-surface-light p-6 rounded-lg shadow-lg transition-all duration-300 hover:ring-2 hover:ring-accent">
             <h3 className="text-accent font-bold text-xl mb-4">Frontend</h3>
 <ul className="list-none space-y-2">
  {frontendSkills.map(skill =>(
    <li key={skill} className='font-sans text-secondary'>
    {skill}
    </li>
  ))}
 </ul>


 </div>

  
   <div className="bg-surface-light p-6 rounded-lg shadow-lg transition-all duration-300 hover:ring-2 hover:ring-accent">
             <h3 className="text-accent font-bold text-xl mb-4">Frontend</h3>
 <ul className="list-none space-y-2">
  {backendSkills.map(skill =>(
    <li key={skill} className='font-sans text-secondary'>
    {skill}
    </li>
  ))}
 </ul>


 </div>

  <div className="bg-surface-light p-6 rounded-lg shadow-lg transition-all duration-300 hover:ring-2 hover:ring-accent">
             <h3 className="text-accent font-bold text-xl mb-4">Frontend</h3>
 <ul className="list-none space-y-2">
  {toolsSkills.map(skill =>(
    <li key={skill} className='font-sans text-secondary'>
    {skill}
    </li>
  ))}
 </ul>


 </div>

 </div>
     
    </section>
  )
}

export default Skill

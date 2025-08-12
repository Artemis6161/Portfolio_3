import React from 'react'
const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, repoUrl }) => {
  return (
    <div className='bg-surface-light rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2'>
      <img src={imageUrl} 
        alt={`Screenshot of the ${title} project`} 
        className="w-full h-48 object-cover"/>
      <div className="p-6">
       <h3 className="font-serif text-2xl font-bold mb-2 text-text-primary">{title}</h3>
        <p className="font-sans text-base text-text-secondary mb-4 h-24">{description}</p>
         <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
       <div className="flex items-center gap-4">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-surface font-bold py-2 px-5 rounded-md hover:opacity-90 transition-opacity"
          >
            Live Demo
          </a>
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-text-secondary/40 text-text-secondary font-bold py-2 px-5 rounded-md hover:bg-surface-light hover:border-text-secondary transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;

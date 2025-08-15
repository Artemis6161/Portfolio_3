import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialSidebar = () => {
  return (
    // Main container for the sidebar
    // hidden lg:flex: Hidden on mobile, flexbox on large screens
    // fixed: Locks it to the screen
    // bottom-0 left-8: Pins it to the bottom left, with some padding from the edge
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 left-8">
      
      {/* List of social icons */}
      <ul className="flex flex-col items-center">
        <li className="mb-4">
          <a href="https://www.linkedin.com/in/sangeetha-rajan-283106198/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="mb-4">
          <a href="https://github.com/Artemis6161" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="mailto:sanrajan2@gmail.com" className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300">
            <HiOutlineMail size={24} />
          </a>
        </li>
      </ul>

      {/* The vertical line */}
      <div className="w-px h-40 bg-text-secondary mt-4"></div>

    </div>
  );
};

export default SocialSidebar;
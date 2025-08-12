import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // A nice icon for the link

const Footer = () => {
  // This gets the current year automatically. No more manual updates!
  const currentYear = new Date().getFullYear();

  return (
    // A top border is a great way to separate the footer from the content above
    <footer className="py-6 border-t border-text-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright Info */}
          <p className="text-sm text-text-secondary text-center md:text-left">
            &copy; {currentYear} Sangeetha Rajan. All Rights Reserved.
          </p>
          
          {/* A nice touch for a developer's portfolio */}
          <p className="text-sm text-text-secondary">
            Designed & Built by Sangeetha Rajan
          </p>

          {/* Back to Top Link */}
          <a 
            href="#" // A simple "#" link automatically goes to the top of the page
            className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-2"
          >
            Back to Top <FaArrowUp />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
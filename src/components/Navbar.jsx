import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, title: 'About', to: 'about' },
    { id: 2, title: 'Projects', to: 'projects' },
    { id: 3, title: 'Skills', to: 'skills' },
    { id: 4, title: 'Contact', to: 'contact' },
  ];
  
  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // If user scrolls more than 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-surface shadow-lg shadow-accent/10' : 'bg-transparent'}
      `}
    >
      
      {/* Logo/Name - This is the first flex item */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-accent cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>Sangeetha Rajan</Link>
        </h1>
      </div>

      {/* Desktop Navigation Links - This is the second flex item */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6">
          {navLinks.map(({ id, title, to }) => (
            <li key={id} className="font-semibold hover:text-accent transition-colors duration-300 cursor-pointer">
              <Link to={to} smooth={true} duration={500}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile - This is NOT part of the main flex layout */}
      <div onClick={toggleMenu} className="md:hidden z-20 cursor-pointer">
        {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu Overlay - This is positioned absolutely, outside the flex flow */}
      <ul
        className={
          !isOpen
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-surface flex flex-col justify-center items-center z-10'
        }
      >
        {navLinks.map(({ id, title, to }) => (
          <li key={id} className="py-6 text-4xl cursor-pointer">
            <Link onClick={toggleMenu} to={to} smooth={true} duration={500}>{title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
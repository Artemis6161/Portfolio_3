import React from 'react';
// Import the icons you need
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Get In Touch
          </h2>
          
          <p className="font-sans text-lg text-text-secondary mb-10 leading-relaxed">
            I'm currently available for new opportunities and my inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll get back to you!
          </p>
          
          {/* Email Button */}
          <a 
            href="mailto:sanrajan2@gmail.com" // IMPORTANT: Change this to your actual email
            className="inline-block bg-accent text-surface font-bold text-lg py-3 px-8 rounded-lg hover:opacity-90 transition-opacity mb-12"
          >
            Say Hello
          </a>

          
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
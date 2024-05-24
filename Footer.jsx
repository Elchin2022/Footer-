//fontawsome installation:
//npm i --save @fortawesome/free-brands-svg-icons

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-4">
            <a href="#" className="hover:text-white">
              Policy area
            </a>
            <a href="#" className="hover:text-white">
              Dashboard
            </a>
            <a href="#" className="hover:text-white">
              About us
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram}  />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn}  />
            </a>
            
          </div>
          
          <div> Copyright &copy; 2024 Privacy and policy Searchart</div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

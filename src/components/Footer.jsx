import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Fantastic Gallery</h2>
            <p className="text-gray-400">
              A place to discover and share beautiful images.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faBriefcase} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Fantastic Gallery. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
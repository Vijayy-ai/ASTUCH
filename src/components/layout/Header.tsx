'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">ASTUCH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-blue-600 transition-colors">
            AI Projects
          </Link>
          <Link href="/tools" className="text-gray-800 hover:text-blue-600 transition-colors">
            Tools
          </Link>
          <Link href="/internship" className="text-gray-800 hover:text-blue-600 transition-colors">
            Internship
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              AI Projects
            </Link>
            <Link href="/tools" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Tools
            </Link>
            <Link href="/internship" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Internship
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
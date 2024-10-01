"use client"; // Necessary for using React hooks in Next.js

import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 py-4 container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Image 
        src="/images/logo.png" 
        alt="Logo" 
        width={100} 
        height={100} 
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href || '#'} className="text-white text-sm hover:text-gray-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes className="text-white w-6 h-6" /> : <FaBars className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-0 right-0 w-96 h-full bg-gray-700 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden z-50`}>
        {/* Close Button */}
        <div className="flex  p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FaTimes className="text-white w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href || '#'} className="text-white text-sm hover:text-gray-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Login Button */}
      <Button variant="default" className="px-6 hidden md:block">
        Login
      </Button>
    </div>
  );
};

export default Navbar;

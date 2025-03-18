'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { navLinks } from '@/data';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 py-5 container mx-auto flex justify-between items-center max-w-6xl">
      {/* Logo */}
      <Link href="/">
        <Image 
          src="/images/logo.png" 
          alt="Logo" 
          width={150} 
          height={150} 
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link 
                href={link.href || '#'} 
                className={`${pathname === link.href ? 'text-sky-600' : 'text-white'} text-md font-bold hover:text-sky-600`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes className="text-white w-6 h-6" /> : <FaBars className="text-sky-600 w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-0 right-0 w-56 px-3 h-64 bg-gradient-to-b from-sky-600 to-sky-800 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden z-50`}>
        {/* Close Button */}
        <div className="flex p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FaTimes className="text-white w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col items-start space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link 
                href={link.href || '#'} 
                className={`${pathname === link.href ? 'text-white' : 'text-white'} text-sm hover:text-sky-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50  border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="h-auto w-24 sm:w-28"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-12">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href || "#"}
                  className="text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-accent"
          >
            {theme === "dark" ? (
              <LuMoon  className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <LuSun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            asChild
            variant="default"
            
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="md:hidden"
          >
            {theme === "dark" ? (
              <LuMoon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <LuSun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isOpen ? (
              <LiaTimesSolid className="w-5 h-5 text-foreground" />
            ) : (
              <LuMenu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="px-6 py-4 ">
            <ul className="flex flex-col space-y-4 mb-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className={`block py-1 text-sm font-medium hover:text-water-blue-600 dark:hover:text-water-blue-400 transition-colors`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="text-sm mt-4 hover:text-water-blue-600 dark:hover:text-water-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

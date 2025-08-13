"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { navLinks } from "@/data";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

        {/* <nav className="hidden md:flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-[60px] ">
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.subItems ? (
                    <div className="relative group">
                      <button className="flex items-center gap-1 text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <ul className="absolute left-0 mt-2 w-40 rounded-md border bg-background shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-50">
                        {link.subItems.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm hover:bg-accent"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav> */}
  
    <nav className="hidden md:flex items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-[60px]">
          {navLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              {link.subItems ? (
                <>
                  <NavigationMenuTrigger className="text-sm bg-transparent hover:text-sky-600 dark:hover:text-sky-400 transition-colors data-[state=open]:text-sky-600 dark:data-[state=open]:text-sky-400">
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 w-80 rounded-md border   shadow-md z-50">
                    <ul className="p-1 md:w-[180px] ">
                      {link.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-sm hover:bg-accent  rounded-md"
                            >
                              {sub.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href || "#"}
                    className="text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  


        {/* Theme Toggle & Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-accent"
          >
            {theme === "dark" ? (
              <LuMoon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <LuSun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button asChild variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="px-6 py-4">
            <ul className="flex flex-col space-y-4 mb-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.subItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubmenuIndex(
                            openSubmenuIndex === index ? null : index
                          )
                        }
                        className="flex justify-between w-full text-left text-sm font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 ml-2 transition-transform ${
                            openSubmenuIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSubmenuIndex === index && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {link.subItems.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={sub.href}
                                onClick={toggleMenu}
                                className="block text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      onClick={toggleMenu}
                      className="block py-1 text-sm font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="text-sm mt-4 hover:text-sky-600 dark:hover:text-sky-400 transition-colors block"
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

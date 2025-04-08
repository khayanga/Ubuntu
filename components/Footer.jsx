"use client";
import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import dynamic from "next/dynamic";
import { navLinks } from "@/data";
import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container py-12 md:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Image
              className="mb-6"
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={140}
            />

            <h1 className="text-gray-400">Follow us on our social networks</h1>

            <div className="flex flex-row gap-4  justify-center items-center">
              <Link href="https://www.instagram.com/ubuntu_waterhub/" className="text-gray-300 hover:text-sky-600 transition-colors">
                <FaInstagram className="w-6 h-6 " />
              </Link>

              <Link href="https://www.linkedin.com/company/ubuntu-waterhub-africa/" className="text-gray-300 hover:text-sky-600 transition-colors">
                <FaLinkedin className="w-6 h-6 " />
              </Link>

              <Link href="https://www.facebook.com/profile.php?id=61564003078907"className="text-gray-300 hover:text-sky-600 transition-colors">
                <FaFacebook className="w-6 h-6 " />
              </Link>

              <Link href="https://x.com/UbuntuWaterhub"className ="text-gray-300 hover:text-sky-600 transition-colors">
                <FaTwitter className="w-6 h-6 " />
              </Link>
            </div>
          </div>

          {/* Comapny links
           */}

          <nav className="items-center ">
            <h1 className="text-gray-400 font-bold mb-3 text-center">Company Links</h1>
            <ul className="space-y-2  text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-gray-400 text-md text-[14px] hover:text-sky-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact details */}

          <div className="flex flex-col space-y-3  items-center ">
            <h1 className="text-gray-400 font-bold mb-2">Contact Us</h1>
            <div className="flex flex-row space-x-4">
              <Phone className="w-5 h-5 text-sky-600 " />
              <p className="text-[14px]  text-gray-400">0794093465</p>
            </div>
            <div className="flex flex-row space-x-4">
              <Mail className="w-5 h-5 text-sky-600 " />
              <p className="text-[14px]  text-gray-400">info@waterhub.africa</p>
            </div>
            <div className="flex flex-row space-x-4">
              <MapPin className="w-5 h-5 text-sky-600 " />
              <p className="text-[14px]  text-gray-400">
                Avon Center, Industrial Area, Nairobi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400 w-full mx-auto my-6 relative z-10" />

      {/* Copyright */}

      <div className="text-center  text-gray-400 text-[12px] font-light relative pb-4">
        Ubuntu Waterhub Africa © {currentYear} . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

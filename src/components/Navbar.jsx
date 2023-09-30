'use client'

import Link from 'next/link';
import { useState } from 'react';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
 console.log(pathname)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src="/images/profile.jpeg"
            alt="Logo"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <span className="font-semibold text-xl tracking-tight">Portafolio</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={!isOpen ? 'block' : 'hidden'}
                d="M0 4h20v1H0V4zm0 6h20v1H0v-1zm0 6h20v1H0v-1z"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                d="M0 6h20v1H0V6zm0 6h20v1H0v-1zm0 6h20v1H0v-1z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 ${pathname === "/" ? "text-black-300" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/skills"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 ${pathname === "/skills" ? "text-red" : ""}`}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 ${pathname === "/projects" ? "text-red" : ""}`}
            >
              projects
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
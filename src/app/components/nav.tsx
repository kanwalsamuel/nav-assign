'use client'; // Marks the component as a Client Component

import Link from 'next/link';
import { useState } from 'react';
 
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-[#d92ef7] px-4 py-2 top-0 w-full z-50 shadow-md relative">
      <div className="flex justify-between items-center">
        {/* Hamburger icon for mobile */}
        <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          &#9776;
        </div> 

        {/* Menu links */}
        <ul className={`md:flex space-x-4 items-center transition-all duration-300 ${isOpen ? 'block absolute top-full left-0 w-full bg-gradient-to-br from-pink-400 to-gray-600 rounded-lg shadow-lg md:relative md:w-auto md:top-0' : 'hidden md:flex'}`}>
          <li>
            <Link href="/" className="text-white text-lg px-4 py-2 block hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white text-lg px-4 py-2 block hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white text-lg px-4 py-2 block hover:text-black">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/feedback" className="text-white text-lg px-4 py-2 block hover:text-black">
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
 
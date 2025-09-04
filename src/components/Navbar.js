import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">Joseph M. Lugaho</div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-64}
                className="cursor-pointer hover:text-blue-600"
                activeClass="text-blue-600 font-bold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setIsOpen(false)}
                spy={true}
                className="cursor-pointer hover:text-blue-600 block text-lg"
                activeClass="text-blue-600 font-bold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}


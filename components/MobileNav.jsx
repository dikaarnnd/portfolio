"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { Menu } from "lucide-react";

const links = [
  { path: '#home', name: 'Home' },
  { path: '#about', name: 'About Me' },
  { path: '#project', name: 'Project' },
  { path: '#contact', name: 'Contact' },
];

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "#home";

      for (const link of links) {
        const id = link.path.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
              current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set awal
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1c1c22] border border-gray-700 rounded-md shadow-lg z-50">
          <ul className="flex flex-col p-2">
            {links.map((link, index) => {
              const isActive = link.path === activeSection;
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)} // tutup dropdown saat klik
                    className={`block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                        : "text-white hover:text-[#00ff99]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default MobileNav;
"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { FaBars } from 'react-icons/fa';

const links = [
  { path: '#home', name: 'Home' },
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
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <Button 
        variant="ghost"
        onClick={() => setOpen(!open)}
        className="text-white cursor-pointer"
      >
        <FaBars className="" />
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-30 text-right glass rounded-md shadow-lg z-50">
          <ul className="flex flex-col px-2">
            {links.map((link, index) => {
              const isActive = link.path === activeSection;
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)} // tutup dropdown saat klik
                    className={`block py-2 rounded-md transition-all ${
                      isActive
                        ? "text-[#00ff99]"
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
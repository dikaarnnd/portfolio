"use client"; // Add this directive to mark the file as a client component

import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';

const links = [
    // { path: '/', name: 'Home' },
    // { path: '/aboutme', name: 'About Me' },
    // { path: '/skills', name: 'Skills' },
    // { path: '/project', name: 'Project' },
    // { path: '/contact', name: 'Contact' },
    { path: '#home', name: 'Home' },
    { path: '#project', name: 'Project' },
    { path: '#contact', name: 'Contact' },
];

const Nav = () => {
    // const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("#home");
    useEffect(() => {
        const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        const sectionIds = links.map(link => link.path.replace("#", ""));
        let current = "#home";

        for (let id of sectionIds) {
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

    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                // const isActive = link.path === pathname;
                const isActive = link.path === activeSection;
                return (
                    
                    <Link
                        href={link.path}
                        key={index}
                        className={`font-medium accentHover transition-all ${
                            isActive ? 'text-[#00ff99]' : ''
                        }`}
                    >
                       {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;

"use client"; // Add this directive to mark the file as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    // { path: '/', name: 'Home' },
    // { path: '/aboutme', name: 'About Me' },
    // { path: '/skills', name: 'Skills' },
    // { path: '/project', name: 'Project' },
    // { path: '/contact', name: 'Contact' },
    { path: '#home', name: 'Home' },
    { path: '#about', name: 'About Me' },
    { path: '#project', name: 'Project' },
    { path: '#contact', name: 'Contact' },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`font-medium accentHover transition-all ${isActive ? 'text-[#00ff99] border-b-2 border-[#00ff99]' : ''}`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;

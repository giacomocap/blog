"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl">Giacomo Cappellozza</h1>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block fixed md:static bg-gray-800 w-full md:w-auto h-full md:h-auto top-0 left-0 p-4 md:p-0 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none`}>
                    <li className="mt-2 md:mt-0"><Link href="#about" className="hover:underline block md:inline" onClick={closeMenu}>About Me</Link></li>
                    <li className="mt-2 md:mt-0"><Link href="#experience" className="hover:underline block md:inline" onClick={closeMenu}>Experience</Link></li>
                    <li className="mt-2 md:mt-0"><Link href="#projects" className="hover:underline block md:inline" onClick={closeMenu}>Projects</Link></li>
                    <li className="mt-2 md:mt-0"><Link href="#skills" className="hover:underline block md:inline" onClick={closeMenu}>Skills</Link></li>
                    <li className="mt-2 md:mt-0"><Link href="#contact" className="hover:underline block md:inline" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

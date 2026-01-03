"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', hasDropdown: false },
        { name: 'About', href: '/#about', hasDropdown: false },
        { name: 'Services', href: '/#services', hasDropdown: false },
        { name: 'Ecosystem', href: '/#ecosystem', hasDropdown: false },
        { name: 'BrandPe', href: '/brandpe', hasDropdown: false },
        { name: 'Club Chaos', href: '/club-chaos', hasDropdown: false },
        { name: 'Contact', href: '/#contact', hasDropdown: false },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-4 md:px-8 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <a href="/" className="cursor-pointer">
                        <Image src="/logo.png" alt="Collabify Logo" width={128} height={40} className="w-32 h-auto" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-50" />}
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-7 py-3 rounded-full transition-all shadow-md shadow-primary/20"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl py-8 px-6 flex flex-col gap-5 border border-slate-100 animate-in slide-in-from-top-4">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800">
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-slate-100 my-2" />
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl w-full">Get Started</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

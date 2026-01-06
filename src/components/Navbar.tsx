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
        {
            name: 'Our Brands',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'BrandPe', href: '/brandpe' },
                { name: 'Club Chaos', href: '/club-chaos' }
            ]
        },
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
                            <div key={link.name} className="relative group">
                                <a
                                    href={link.href}
                                    className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors py-2"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-50 group-hover:rotate-180 transition-transform" />}
                                </a>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && link.dropdownItems && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                                        {link.dropdownItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a href="/#contact" className="">
                            <button
                                className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-7 py-3 rounded-full transition-all shadow-md shadow-primary/20"
                            >
                                Let's collab
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl py-8 px-6 flex flex-col gap-5 border border-slate-100 animate-in slide-in-from-top-4 max-h-[80vh] overflow-y-auto">
                    {navLinks.map(link => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <div className="space-y-3">
                                    <div className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                        {link.name}
                                        <ChevronDown size={16} className="opacity-50" />
                                    </div>
                                    <div className="pl-4 space-y-3 border-l-2 border-slate-100 ml-1">
                                        {link.dropdownItems?.map(item => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-base font-medium text-slate-600 hover:text-primary"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800 block">
                                    {link.name}
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="h-px bg-slate-100 my-2" />
                    <a href="https://wa.me/918427600516" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl w-full">Let's collab</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

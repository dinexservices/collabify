"use client";

import React from 'react';
import Image from 'next/image';

import { Instagram, Linkedin, Twitter, ArrowUpRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className=" text-white pb-10 rounded-t-[3rem] mt-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="">
                            <Image src="/logowhite.png" alt="Collabify Logo" width={150} height={150} />
                        </div>
                        <p className="text-slate-400 leading-relaxed font-medium">
Collabify is where ideas turn into momentum.
We bring strategy, people, and opportunities together to help brands grow with purpose — not noise.                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                      
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="/#about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="/#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="/#ecosystem" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">Ecosystem <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Verticals</h4>
                        <ul className="space-y-4">
                            <li><a href="/brandpe" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">BrandPe <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Growth</span></a></li>
                            <li><a href="/club-chaos" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">ClubChaos <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">Events</span></a></li>
                        </ul>
                    </div>

                    {/* Contact Info (Minimal) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400 font-medium">
                            <li>Noida, Uttar Pradesh, India</li>
                            <li>info@collabify.sbs</li>
                            <li>+91 84276 00516</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} Collabify Growth Labs. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm font-medium flex items-center gap-1">
                        Made with <Heart size={14} className="text-secondary fill-current" /> by Collabify
                    </p>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

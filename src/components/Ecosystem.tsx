"use client";

import React from 'react';
import { ArrowUpRight, Rocket, Music } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Ecosystem: React.FC = () => {
    return (
        <section id="ecosystem" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <span className="text-primary font-bold tracking-tight text-lg">// Our Ecosystem</span>
                    <h2 className="text-4xl md:text-[56px] font-[900] text-slate-900 leading-[1.1] tracking-tight">
                        Two Verticals. <br />
                        <span className="text-primary">One Vision.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium pt-4">
                        Under Collabify Growth Labs, we operate two independent but interconnected verticals, each with its own identity and services.
                    </p>
                </div>

                {/* Verticals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* BrandPe Card - Blue Theme */}
                    <div className="group relative bg-white rounded-[2.5rem] p-10 overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 blur-xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image src="/brand.png" alt="BrandPe" width={150} height={60} className="w-32 h-auto object-contain" />
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                BrandPe
                                <span className="text-slate-400 font-medium text-lg block mt-1">by Collabify</span>
                            </h3>

                            <p className="text-slate-600 font-medium text-lg mb-10 leading-relaxed mt-4">
                                Startup Growth & Marketing. Dedicated to scaling startups through branding, positioning, and strategies.
                            </p>

                            <div className="mt-auto">
                                <Link href="/brandpe">
                                    <button className="flex items-center gap-3 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all group/btn w-full md:w-auto justify-center md:justify-start">
                                        Explore BrandPe
                                        <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ClubChaos Card - Pink Theme */}
                    <div className="group relative bg-white rounded-[2.5rem] p-10 overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 blur-xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image src="/club.jpeg" alt="ClubChaos" width={150} height={60} className="w-32 h-auto object-contain rounded-lg" />
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-secondary/20 to-transparent"></div>
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 mb-2 group-hover:text-secondary transition-colors">
                                ClubChaos
                                <span className="text-slate-400 font-medium text-lg block mt-1">by Collabify</span>
                            </h3>

                            <p className="text-slate-600 font-medium text-lg mb-10 leading-relaxed mt-4">
                                Artist & Creative Event Management. Empowering creators and curating unforgettable event experiences.
                            </p>

                            <div className="mt-auto">
                                <Link href="/club-chaos">
                                    <button className="flex items-center gap-3 bg-secondary/5 hover:bg-secondary text-secondary hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all group/btn w-full md:w-auto justify-center md:justify-start">
                                        Explore ClubChaos
                                        <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Ecosystem;

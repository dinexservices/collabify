"use client";

import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const TEAM_MEMBERS = [
    {
        name: "Aarav Sharma",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687",
        bio: "Visionary leader with a passion for scaling startups and empowering creators.",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Priya Patel",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=687",
        bio: "Strategist at heart, driving growth through data-driven insights and innovation.",
        socials: { linkedin: "#", instagram: "#" }
    },
    {
        name: "Rohan Gupta",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=687",
        bio: "Award-winning creative mind shaping the visual identity of brands and events.",
        socials: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
        name: "Ananya Singh",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=764",
        bio: "Building vibrant communities and fostering meaningful connections across the ecosystem.",
        socials: { linkedin: "#", instagram: "#" }
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-tight text-lg block mb-2">// The Squad</span>
                    <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-6">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Minds.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        A diverse team of dreamers, doers, and disruptors working together to redefine growth.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="relative h-[400px] mb-4 overflow-hidden rounded-[2rem] shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                                        )}
                                        {member.socials.twitter && (
                                            <a href={member.socials.twitter} className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>
                                        )}
                                        {member.socials.instagram && (
                                            <a href={member.socials.instagram} className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm font-bold text-secondary uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;

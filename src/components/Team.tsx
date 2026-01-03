"use client";

import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const TEAM_MEMBERS = [
    {
        name: "Sakshi Shrivastava",
        role: "CO-Founder & Growth Director",
        image: "/team/sakshi.jpg",
        bio: "Growth Director & Co-Founder leading business strategy, marketing, partnerships, and revenue expansion while building sustainable brand and market presence.",
        socials: { linkedin: "https://www.linkedin.com/in/sakshi-srivastava-256486299", instagram: "https://www.instagram.com/sakshii.work" }
    },
    {
        name: "Vikram Razz",
        role: "CEO & Business Director",
        image: "/team/vikram.jpg",
        bio: "Vision-driven CEO leading strategy, business growth, and overall company direction while building strong partnerships and ensuring long-term success.",
        socials: { linkedin: "https://www.linkedin.com/in/vikraminfo", instagram: "https://www.instagram.com/_mafia_mindset" }
    },
    {
        name: "Rishi Raj",
        role: "Technical Director",
        image: "/team/rishi.jpg",
        bio: "Technical Director leading technology vision, product execution, and innovation to drive business success.",
        socials: { linkedin: "https://www.linkedin.com/in/rishi-raj-8a87b0249", instagram: "https://www.instagram.com/ri.shii_?igsh=ZHBjeDR3d3d2ZGt1" }
    },
   
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="relative h-[400px] mb-4 overflow-hidden rounded-[2rem] shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110  "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
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


import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
    const points = [
        "Strategic Growth Roadmaps",
        "Community-Led Expansion",
        "Cross-Pollination Opportunities",
        "End-to-End Execution"
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Top Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                    <div className="space-y-4">
                        <span className="text-secondary font-bold tracking-tight text-lg">// About Us</span>
                        <h2 className="text-4xl md:text-[56px] font-[900] text-slate-900 leading-[1.1] max-w-3xl tracking-tight">
                            Growth is Not Accidental. <br />It is <span className="text-primary">Designed.</span>
                        </h2>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-primary/20 shrink-0 mt-8 lg:mt-4">
                        More About Us
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
                    {/* Left Image */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                            alt="Our Team"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Collabify Growth Labs is a growth-focused marketing and collaboration ecosystem built to help startups, creators, and brands scale with clarity, strategy, and execution. We operate as a parent organization housing specialized verticals that address different growth needs across the startup and creative economy.
                            </p>

                            <blockquote className="border-l-4 border-secondary pl-6 py-2 italic text-slate-700 text-lg font-medium leading-relaxed">
                                "At Collabify, we believe growth is not accidental — it is designed. Our approach combines strategy, execution, collaboration, and community to build brands that last."
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            {/* Bullet Points */}
                            <ul className="space-y-4">
                                {points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                                        <div className="bg-primary/10 text-primary p-1 rounded-full">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-[2rem] text-white text-center shadow-xl shadow-primary/20">
                                    <div className="text-5xl font-black mb-2">12+</div>
                                    <div className="text-xs uppercase font-bold tracking-widest opacity-80">Years of Experience</div>
                                </div>
                                <div className="bg-gradient-to-br from-secondary to-accent p-8 rounded-[2rem] text-white text-center shadow-xl shadow-secondary/20">
                                    <div className="text-5xl font-black mb-2">270+</div>
                                    <div className="text-xs uppercase font-bold tracking-widest opacity-80">Creative Talents</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

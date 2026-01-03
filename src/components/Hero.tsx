
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-44 pb-20 overflow-hidden bg-white">
            {/* Background subtle elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Top Text Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 mb-16 items-start">
                    <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 leading-[1.05] tracking-tight">
                            Building Brands. Accelerating Growth. <span className="brand-gradient-text">Creating Impact.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col gap-8 lg:pt-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                            Collabify Growth Labs is a growth ecosystem helping startups, creators, and brands scale through strategy, collaboration, community, and execution.
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20">
                                Explore Our Ecosystem
                            </button>
                            <a href="#ecosystem" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors group">
                                Work With Us
                                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Big Rounded Image Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 animate-in fade-in zoom-in-95 duration-1000 delay-500 group">
                    <img
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070"
                        alt="Creative Community & Growth"
                        className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay gradient for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

                    {/* Floating dynamic tag */}
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                            ))}
                        </div>
                        <div className="text-sm font-bold text-slate-800">
                            Join 2,400+ Creators
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/50 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">

                {/* Trust Line / Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-slate-600">
                        Launching Soon | Limited Early Access Spots
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    Collabify — Where Creators & Startups
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                        Grow Together
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    India’s first all-in-one growth ecosystem for Creators, Startups, Brands, Students & Communities.
                </p>

                {/* Supporting Line */}
                <p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    Find paid collaborations, build meaningful connections, attend exclusive events, and grow faster — all in one platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <a href="#early-access" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Join Early Access
                        </button>
                    </a>
                    <a href="#features" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 text-lg font-bold py-4 px-8 rounded-full border border-slate-200 transition-all hover:border-slate-300 flex items-center justify-center gap-2">
                            Explore Features
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;

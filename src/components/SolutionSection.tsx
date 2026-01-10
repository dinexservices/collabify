import React from 'react';
import { Handshake, TrendingUp, Globe } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="ecosystem">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-6">
                        Meet Collabify — Your Growth Ecosystem
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Collabify brings everything together — collaboration, growth tools, events, community and opportunities — into one powerful platform built for India’s next generation.
                    </p>
                </div>

                {/* 3 Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="group bg-slate-50 hover:bg-white p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            <Handshake size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Collaborate Smarter</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Find creators, brands, startups and work together with built-in contracts & payments.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-slate-50 hover:bg-white p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-green-500/5 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Grow Faster</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Use growth tools, insights and strategies to scale your personal brand or business.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-slate-50 hover:bg-white p-8 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect Deeper</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Join a real community of founders, creators, students and professionals.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;

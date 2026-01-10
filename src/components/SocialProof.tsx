import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">

                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
                    Built by people who understand the struggle
                </h2>

                <div className="relative p-8 md:p-12 bg-slate-50/50 rounded-3xl">
                    <Quote className="absolute top-8 left-8 text-primary/10 w-16 h-16 -z-10 transform -scale-x-100" />

                    <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed italic mb-8">
                        “We’ve been creators, startup builders, event organizers — we’ve faced these problems ourselves.
                        Collabify is our attempt to fix the ecosystem, not just build another app.”
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            TC
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900">Team Collabify</div>
                            <div className="text-sm text-slate-500">Founders</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;

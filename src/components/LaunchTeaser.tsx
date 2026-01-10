import React from 'react';
import { Rocket } from 'lucide-react';

const LaunchTeaser: React.FC = () => {
    return (
        <section className="py-12 bg-slate-900 border-t border-slate-800 text-center">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

                <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-primary animate-pulse" />
                    <span className="text-xl font-bold text-white tracking-tight">Launching Soon</span>
                </div>

                <div className="h-4 w-px bg-slate-700 hidden md:block"></div>

                <p className="text-slate-400 text-sm md:text-base">
                    We’re currently in private beta and onboarding early users.
                    <span className="text-slate-200 block md:inline md:ml-1">Public launch coming in the next few months.</span>
                </p>

                <div className="h-4 w-px bg-slate-700 hidden md:block"></div>

                <span className="text-primary font-medium text-sm">
                    Join now and be part of the founding community.
                </span>

            </div>
        </section>
    );
};

export default LaunchTeaser;

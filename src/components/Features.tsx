import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        "Creator & Brand Collaboration Hub",
        "Paid Campaigns & Deal Management",
        "Events, Meetups & Networking",
        "Job & Internship Opportunities",
        "Community Spaces & Groups",
        "Growth Tools (Coming Soon)",
        "Verified Profiles & Trust Layer"
    ];

    return (
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">

                <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-16 text-center">
                    What You’ll Get Access To
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-12 w-full max-w-5xl">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 text-lg font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                        </div>
                    ))}
                    {/* Placeholder for the "And this is just the beginning" if needed, or keeping grid balanced */}
                    <div className="flex items-center justify-center p-4">
                        <span className="text-slate-400 font-medium italic">And this is just the beginning...</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;

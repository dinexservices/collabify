import React from 'react';
import { Camera, Rocket, GraduationCap, Briefcase, Zap } from 'lucide-react';

const TargetAudience: React.FC = () => {
    const audiences = [
        {
            icon: <Camera className="w-8 h-8 text-pink-500" />,
            title: "Creators & Influencers",
            description: "Monetize your passion, find brand deals, and network with peers."
        },
        {
            icon: <Rocket className="w-8 h-8 text-orange-500" />,
            title: "Startup Founders & Brands",
            description: "Scale your reach, find talent, and build powerful partnerships."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
            title: "Students & Young Talent",
            description: "Gain experience, find internships, and connect with mentors."
        },
        {
            icon: <Briefcase className="w-8 h-8 text-green-500" />,
            title: "Agencies & Professionals",
            description: "Discover new clients, manage talent, and expand your network."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Builders, Dreamers, Doers",
            description: "If you're building something — Collabify is for you."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 text-center mb-16">
                    Built for People Who Want to Grow
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {audiences.map((item, index) => (
                        <div key={index} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 hover:shadow-lg transition-shadow ${index === 4 ? 'col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white to-yellow-50' : ''}`}>
                            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 mb-2">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TargetAudience;

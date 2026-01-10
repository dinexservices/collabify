import React from 'react';
import { XCircle, AlertTriangle, Search, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
    const problems = [
        {
            icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
            text: "Creators struggle to find genuine paid collaborations"
        },
        {
            icon: <XCircle className="w-6 h-6 text-red-500" />,
            text: "Startups waste money on random influencer campaigns"
        },
        {
            icon: <Search className="w-6 h-6 text-blue-500" />,
            text: "Opportunities are scattered across platforms"
        },
        {
            icon: <Users className="w-6 h-6 text-purple-500" />,
            text: "Networking feels forced, not valuable"
        }
    ];

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">

                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12">
                    Growth today is broken.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 text-left transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                {item.icon}
                            </div>
                            <p className="text-lg text-slate-700 font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="inline-block relative">
                    <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        So we built something better.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProblemSection;

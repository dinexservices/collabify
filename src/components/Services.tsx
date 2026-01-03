import React from 'react';
import { ArrowUpRight, Check, Zap, Target, Users, Calendar, Mic2, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            title: "Startup Growth & Marketing Support",
            icon: <Zap className="w-8 h-8 text-primary" />,
            points: [
                "Branding & Positioning",
                "Social Media Growth",
                "Content & Marketing Strategy",
                "Visibility & Awareness Building",
                "Lead Generation Support"
            ],
            color: "from-primary/10 to-primary/5"
        },
        {
            title: "Collaborations & Partnerships",
            icon: <Users className="w-8 h-8 text-secondary" />,
            points: [
                "Brand Collaborations",
                "Creator / Influencer Collaborations",
                "Business Partnerships",
                "Startup-to-Startup Collaborations"
            ],
            color: "from-secondary/10 to-secondary/5"
        },
        {
            title: "Community & Networking",
            icon: <Target className="w-8 h-8 text-accent" />,
            points: [
                "Founder Meetups",
                "Networking Events",
                "Panel Talks & Discussions",
                "Knowledge Sharing & Support Systems"
            ],
            color: "from-accent/10 to-accent/5"
        },
        {
            title: "Events & Opportunities",
            icon: <Calendar className="w-8 h-8 text-teal" />,
            points: [
                "Startup Events & Meetups",
                "College & Youth Events",
                "Creator Events",
                "Brand Events"
            ],
            color: "from-teal/10 to-teal/5"
        },
        {
            title: "Artist / Creator Growth Support",
            icon: <Mic2 className="w-8 h-8 text-primary" />,
            points: [
                "Brand Deals",
                "Paid Collaborations",
                "Event Opportunities",
                "Personal Branding Support"
            ],
            color: "from-primary/10 to-primary/5"
        },
        {
            title: "Consultation & Strategy",
            icon: <Lightbulb className="w-8 h-8 text-secondary" />,
            points: [
                "Growth Roadmaps",
                "Marketing Strategy",
                "Collaboration Strategy",
                "Long-Term Growth Planning"
            ],
            color: "from-secondary/10 to-secondary/5"
        }
    ];

    const philosophy = [
        "Growth is built, not advertised",
        "Collaboration accelerates scale",
        "Strategy + Execution = Impact"
    ];

    return (
        <section id="services" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-secondary font-bold tracking-tight text-lg">// What We Do</span>
                        <h2 className="text-4xl md:text-[56px] font-[900] text-slate-900 leading-[1.1] tracking-tight">
                            Tailored Solutions for Talent and Influence
                        </h2>
                    </div>

                    {/* Core Philosophy Cards */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Core Philosophy</h3>
                        <div className="flex flex-col gap-2">
                            {philosophy.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`relative group p-8 rounded-[2.5rem] bg-gradient-to-br ${service.color} border border-white hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1`}>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight min-h-[64px]">
                                {service.title}
                            </h3>

                            <ul className="space-y-3">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                                        <Check size={16} className="text-primary mt-1 shrink-0" strokeWidth={3} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

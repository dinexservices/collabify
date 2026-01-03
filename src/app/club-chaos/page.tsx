import React from 'react';
import Image from 'next/image';
import { Music, Mic, Star, Users, Calendar, Zap, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function ClubChaos() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-secondary/20 selection:text-secondary">

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white rounded-b-[3rem] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-32 -mb-32 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className=" flex items-center justify-center text-secondary mb-8 mx-auto animate-in fade-in zoom-in duration-500">
                        <Image src="/club.jpeg" alt="Collabify Logo" className='rounded-3xl' width={200} height={200} />
                    </div>

                    <span className="text-secondary font-bold tracking-tight text-lg block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Club Chaos by Collabify
                    </span>

                    <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Artist & Creator <br /><span className="text-secondary">Growth Vertical.</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        Empowering artists, creators, and creative professionals. We operate at the intersection of visibility, branding, and real-world opportunities. From emerging creators to established artists, we enable growth through curated events and strategic promotions.
                    </p>

                    {/* Hero Image Collage */}
                    <div className="mt-16 relative max-w-5xl mx-auto h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-500 group">
                        <img
                            src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2070"
                            alt="Concert Crowd"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12 text-left">
                            <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2">Live Experiences</p>
                            <h3 className="text-white text-2xl md:text-4xl font-black">Where Creativity Meets Chaos.</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Club Chaos Does */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 mb-4">What Club Chaos Does</h2>
                    <p className="text-slate-500 font-medium">More than just management. We build ecosystems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Star size={24} />,
                            title: "Artist Growth Support",
                            desc: "We help creators build sustainable visibility and recognition through structured strategies — not random exposure."
                        },
                        {
                            icon: <Calendar size={24} />,
                            title: "Creative Event Management",
                            desc: "We conceptualize and manage curated events: meetups, showcases, brand activations, and experiential events."
                        },
                        {
                            icon: <Zap size={24} />,
                            title: "Opportunities & Experiences",
                            desc: "Connecting creators with platforms aligned with their brand: events, collaborations, gigs, and campaigns."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all md:hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 bg-white rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-tight text-lg block mb-2">// Core Services</span>
                        <h2 className="text-4xl md:text-5xl font-[900] text-slate-900">How We Empower You</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Service 1 */}
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-secondary/20 transition-all flex gap-6">
                                <div className="mt-2 shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                                    <Mic size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Artist & Creator Events</h3>
                                    <p className="text-slate-600 mb-3 text-sm">Curated creative events, artist showcases, and community-led experiences.</p>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-secondary/20 transition-all flex gap-6">
                                <div className="mt-2 shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Brand & College Events</h3>
                                    <p className="text-slate-600 mb-3 text-sm">Brand activations, youth & college events, and experience-driven campaigns.</p>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-secondary/20 transition-all flex gap-6">
                                <div className="mt-2 shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Event Strategy & Execution</h3>
                                    <p className="text-slate-600 mb-3 text-sm">Ideation, planning, partnerships, sponsorships, and end-to-end execution.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1770"
                                alt="Event Atmosphere"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent mix-blend-multiply opacity-60"></div>
                            <div className="absolute bottom-8 left-8 text-white max-w-sm">
                                <div className="text-2xl font-black mb-2 leading-tight">Authentic Connections. Real Vibes.</div>
                                <p className="text-white/90 text-sm font-medium">We create spaces where artists shine and audiences connect.</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Services Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            { label: "Promotions", sub: "Cross-platform" },
                            { label: "Paid Collabs", sub: "Brand aligned" },
                            { label: "Event Opps", sub: "Showcases & Gigs" },
                            { label: "Personal Branding", sub: "Strategy & Story" }
                        ].map((s, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                                <div className="text-secondary font-black text-xl mb-1">{s.label}</div>
                                <div className="text-slate-500 text-sm font-medium">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works & Why */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* How It Works */}
                    <div>
                        <h2 className="text-3xl font-[900] text-slate-900 mb-8">How Club Chaos Works</h2>
                        <div className="space-y-6">
                            <p className="text-slate-600 font-medium">Club Chaos follows a flexible, gig-based model:</p>
                            <ul className="space-y-4">
                                {[
                                    "Project-based collaborations",
                                    "Event-based gigs",
                                    "Campaign-specific opportunities",
                                    "Paid, growth-focused engagements"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <span className="text-slate-800 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-500 text-sm italic mt-4 border-l-4 border-secondary pl-4">
                                Creators work with us when the opportunity fits — ensuring authenticity and alignment.
                            </p>
                        </div>
                    </div>

                    {/* Why Club Chaos */}
                    <div className="bg-secondary text-white p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
                        <h2 className="text-3xl font-[900] mb-8 relative z-10">Why Club Chaos?</h2>
                        <div className="space-y-6 relative z-10">
                            {[
                                "Built for creators, not agencies",
                                "Focus on real opportunities, not vanity metrics",
                                "Flexible collaboration model",
                                "Backed by Collabify’s strategy and ecosystem"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <Heart className="shrink-0 mt-1 text-white fill-white" size={20} />
                                    <span className="text-lg font-medium opacity-90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Placeholder */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6 border border-slate-100">
                        <span className="text-secondary font-bold text-sm uppercase tracking-widest">Pricing & Models</span>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Customized for Every Occasion</h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                        Pricing models vary based on event scale, audience size, type of collaboration, and specific requirements. We ensure fair value for both brands and creators.
                    </p>
                    <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-12 rounded-full shadow-xl shadow-secondary/20 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                        Inquire for Pricing <ArrowRight size={20} />
                    </button>
                </div>
            </section>

        </div>
    );
}

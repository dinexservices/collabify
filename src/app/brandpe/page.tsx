import React from 'react';
import { Rocket, Target, BarChart, Share2, Users, Mic, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "BrandPe | Startup Growth & Marketing",
    description: "BrandPe by Collabify provides structured, affordable, and execution-focused growth solutions for startups. Branding, Marketing, and Strategy under one roof.",
};

export default function BrandPe() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary">

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white rounded-b-[3rem] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className=" flex items-center justify-center mb-8 mx-auto animate-in fade-in zoom-in duration-500">
                        <Image src="/brand.png" alt="Collabify Logo" width={300} height={300} />
                    </div>

                    <span className="text-primary font-bold tracking-tight text-lg block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        BrandPe by Collabify
                    </span>

                    <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Startup se Brand tak — <span className="text-primary">Together.</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        BrandPe is Collabify’s dedicated startup growth vertical, created to support Indian startups with affordable, structured, and execution-focused growth solutions. Bridging the gap between idea-stage startups and market-ready brands.
                    </p>
                </div>
            </section>

            {/* Why BrandPe Exists */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 mb-4">Why BrandPe Exists</h2>
                    <p className="text-slate-500 font-medium">Solving the fragmentation in startup growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Unified Services", desc: "Startups need branding, marketing, and opportunities together — not fragmented services." },
                        { title: "Strategic Direction", desc: "Founders often struggle with direction, consistency, and execution. We provide the compass." },
                        { title: "Structured Growth", desc: "BrandPe provides structure, clarity, and momentum under one growth system." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all md:hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Strategic Role */}
                <div className="mt-16 bg-primary text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Strategic Role Within Collabify</h3>
                            <p className="text-primary-foreground/90 text-lg max-w-2xl">
                                BrandPe strengthens the Collabify ecosystem by offering clear, actionable growth roadmaps, hands-on branding execution, and access to our wider community and events.
                            </p>
                        </div>
                        <div className="flex shrink-0">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Target size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white rounded-[3rem]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-tight text-lg block mb-2">// What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-[900] text-slate-900">BrandPe Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Branding & Positioning</h3>
                            <p className="text-slate-500 font-medium mb-6 text-sm">Builds credibility, clarity, and strong brand recall.</p>
                            <ul className="space-y-3">
                                {['Logo & brand identity guidance', 'Positioning & messaging strategy', 'Social media profile setup', 'Website / landing page guidance'].map((li, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <BarChart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth & Strategy</h3>
                            <p className="text-slate-500 font-medium mb-6 text-sm">Replaces random marketing with goal-driven growth.</p>
                            <ul className="space-y-3">
                                {['Go-to-market strategy', 'Structured marketing roadmap', 'Lead generation planning', 'Campaign execution support'].map((li, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Share2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Social Media & Content</h3>
                            <p className="text-slate-500 font-medium mb-6 text-sm">Ensures consistent visibility and engagement.</p>
                            <ul className="space-y-3">
                                {['Instagram & LinkedIn growth', 'Content calendar planning', 'Reels & content support', 'Optional full account handling'].map((li, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Collaborations</h3>
                            <p className="text-slate-500 font-medium mb-6 text-sm">Accelerated growth through connections.</p>
                            <ul className="space-y-3">
                                {['Influencer & brand collaborations', 'Startup-to-startup partnerships', 'Cross-promotional opportunities'].map((li, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Mic size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Community & Events</h3>
                            <p className="text-slate-500 font-medium mb-6 text-sm">Visibility beyond digital platforms.</p>
                            <ul className="space-y-3">
                                {['Networking and exposure', 'Access to events & meetups', 'PR-lite assistance'].map((li, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-sm leading-relaxed">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-tight text-lg block mb-2">// Pricing Plans</span>
                    <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-6">From Launch to Market Leadership</h2>
                    <p className="text-slate-600 text-lg">BrandPe is built for startups that don’t just want advice, but visible and measurable growth. Pricing is affordable, scalable, and confidence-driven.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Tier 1 */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative group hover:border-primary/50 transition-colors">
                        <div className="mb-6">
                            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Launch</span>
                            <h3 className="text-3xl font-black text-slate-900 mt-4">₹7,999</h3>
                            <p className="text-slate-500 font-medium mt-2">Starter Plan</p>
                        </div>
                        <p className="text-slate-600 mb-8 h-12 text-sm leading-relaxed">Early-stage startups, solo founders, first-time entrepreneurs.</p>

                        <div className="space-y-6 mb-8">
                            {[
                                "Branding Basics (Identity, Templates)",
                                "Social Media Setup & Guidance",
                                "Email + Chat Support",
                                "Onboarding Checklist"
                            ].map((feat, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                                    <span className="text-slate-700 text-sm font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                        <a href="https://wa.me/918427600516" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">Get Started</a>
                    </div>

                    {/* Tier 2 */}
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 border border-slate-900 shadow-xl relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[2rem]">BEST VALUE</div>
                        <div className="mb-6">
                            <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Scale</span>
                            <h3 className="text-3xl font-black text-white mt-4">₹14,999</h3>
                            <p className="text-slate-400 font-medium mt-2">Growth Plan</p>
                        </div>
                        <p className="text-slate-300 mb-8 h-12 text-sm leading-relaxed">Startups with traction aiming for faster, smarter growth.</p>

                        <div className="space-y-6 mb-8">
                            {[
                                "Customized Marketing Strategy (90 Days)",
                                "Content Templates & Frameworks",
                                "Monthly 1:1 Strategy Call",
                                "Bottleneck Analysis"
                            ].map((feat, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                                    <span className="text-slate-200 text-sm font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                        <a href="https://wa.me/918427600516" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-primary/20">Choose Scale</a>
                    </div>

                    {/* Tier 3 */}
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative group hover:border-primary/50 transition-colors">
                        <div className="mb-6">
                            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Dominate</span>
                            <h3 className="text-3xl font-black text-slate-900 mt-4">₹34,999</h3>
                            <p className="text-slate-500 font-medium mt-2">Premium Plan</p>
                        </div>
                        <p className="text-slate-600 mb-8 h-12 text-sm leading-relaxed">High-intent founders aiming for authority & market leadership.</p>

                        <div className="space-y-6 mb-8">
                            {[
                                "Full Growth Support & Advisor",
                                "Collaborations & Partnerships Access",
                                "Priority Invites to Events",
                                "Founder Roundtables"
                            ].map((feat, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                                    <span className="text-slate-700 text-sm font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                        <a href="https://wa.me/918427600516" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">Go Premium</a>
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Ready to Scale Your Startup?</h2>
                    <a href="https://wa.me/918427600516" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                        Apply for BrandPe <ArrowRight size={20} />
                    </a>
                </div>
            </section>

        </div>
    );
}

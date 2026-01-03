"use client";

import React from 'react';
import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-white border-t border-slate-100 py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-tight text-lg">// Contact Us</span>
                    <h2 className="text-4xl md:text-[56px] font-[900] text-slate-900 leading-[1.1] tracking-tight">
                        Let's Build Your <br /><span className="text-primary">Growth Story.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium pt-4">
                        Reach out to us for collaborations, consultations, or ecosystem inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {/* Email Card */}
                    <a href="mailto:hello@collabify.in" className="group bg-slate-50 rounded-[2rem] p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                        <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-500 font-medium mb-4">For general inquiries</p>
                        <div className="flex items-center justify-center gap-2 text-primary font-bold">
                            hello@collabify.in
                            <ArrowUpRight size={18} />
                        </div>
                    </a>

                    {/* WhatsApp Card */}
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="group bg-slate-50 rounded-[2rem] p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                        <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-[#25D366] shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                        <p className="text-slate-500 font-medium mb-4">Quick chat & support</p>
                        <div className="flex items-center justify-center gap-2 text-primary font-bold">
                            Chat Now
                            <ArrowUpRight size={18} />
                        </div>
                    </a>

                    {/* Location Card */}
                    <div className="group bg-slate-50 rounded-[2rem] p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                        <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                        <p className="text-slate-500 font-medium mb-4">Headquarters</p>
                        <div className="text-slate-700 font-bold">
                            New Delhi, India
                        </div>
                    </div>

                </div>
            </div>

            {/* Additional Quick Links */}
            <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                <p className="text-slate-500 font-medium mb-8">Ready to transform your vision?</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                        Get Started
                    </button>
                    <a href="/brandpe" className="bg-white hover:bg-slate-50 text-slate-700 font-bold py-4 px-8 rounded-full border border-slate-200 transition-all hover:-translate-y-1 hover:border-primary/20 hover:text-primary">
                        Explore BrandPe
                    </a>
                    <a href="/club-chaos" className="bg-white hover:bg-slate-50 text-slate-700 font-bold py-4 px-8 rounded-full border border-slate-200 transition-all hover:-translate-y-1 hover:border-secondary/20 hover:text-secondary">
                        Explore Club Chaos
                    </a>
                </div>
            </div>
        
        </section >
    );
};

export default Contact;

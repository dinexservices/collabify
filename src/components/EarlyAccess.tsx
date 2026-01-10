"use client";

import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const EarlyAccess: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white" id="early-access">
            <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">

                <h2 className="text-4xl md:text-5xl font-[900] mb-6">
                    Be Among the First to Experience Collabify
                </h2>

                <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                    We’re opening limited early access to our founding users. <br className="hidden md:block" />
                    Join the waitlist and shape the future of this platform with us.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
                        <div className="flex flex-col gap-6 text-left">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">I am a</label>
                                <select
                                    id="role"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                                >
                                    <option>Creator</option>
                                    <option>Startup</option>
                                    <option>Student</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl mt-4 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin w-5 h-5" />
                                        Joining...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Join the Waitlist
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-500 mt-2">
                                No spam. Only early access invites and updates.
                            </p>

                        </div>
                    </form>
                ) : (
                    <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🚀</h3>
                        <p className="text-slate-300">
                            Keep an eye on your inbox. We'll be in touch soon with your exclusive invite.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default EarlyAccess;

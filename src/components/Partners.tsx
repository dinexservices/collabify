
import React from 'react';

const Partners: React.FC = () => {
    const partners = [
        { name: 'Logoipsum 1', url: 'https://logoipsum.com/assets/logo/logo-1.svg' },
        { name: 'Logoipsum 2', url: 'https://logoipsum.com/assets/logo/logo-2.svg' },
        { name: 'Logoipsum 3', url: 'https://logoipsum.com/assets/logo/logo-3.svg' },
        { name: 'Logoipsum 4', url: 'https://logoipsum.com/assets/logo/logo-4.svg' },
        { name: 'Logoipsum 5', url: 'https://logoipsum.com/assets/logo/logo-5.svg' },
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                        Our Partners in Success, The Brands Behind <span className="text-secondary">the Stars</span>
                    </h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:opacity-100 transition-all">
                    {partners.map((p, i) => (
                        <img
                            key={i}
                            src={`https://logoipsum.com/assets/logo/logo-${i + 10}.svg`}
                            alt={p.name}
                            className="h-8 md:h-10 object-contain hover:grayscale-0 transition-all"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;

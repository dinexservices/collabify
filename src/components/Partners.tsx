
import React from 'react';
import Image from 'next/image';
const Partners: React.FC = () => {
    const partners = [
        { name: 'Logoipsum 1', url: '/partners/idfc.jpg' },
        { name: 'Logoipsum 2', url: '/partners/7ixm.png' },
        { name: 'Logoipsum 3', url: '/partners/gostop.png' },
        { name: 'Logoipsum 4', url: '/partners/whinta.png' },
     
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                        Our Partners in Success, The Brands Behind <span className="text-secondary">the Stars</span>
                    </h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 hover:opacity-100 transition-all">
                    {partners.map((p, i) => (
                        <Image
                            key={i}
                            src={p.url}
                            alt={p.name}
                            width={150}
                            height={150}
                            className="h-8 md:h-10 object-contain  transition-all"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;

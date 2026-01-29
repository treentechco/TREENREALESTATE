'use client';

import Link from 'next/link';

export default function Brands() {
    const brands = [
        { category: 'Cement', items: ['Maple Leaf Cement', 'Bestway Cement'], image: '/construction.png' },
        { category: 'Steel', items: ['Ittehad Steel', 'Pakistan Steel'], image: '/real-estate.png' },
        { category: 'Electrical & Solar', items: ['Knox Inverters', 'Knox Batteries', 'Knox Wires', 'Schneider Electric'], image: '/solar.png' },
        { category: 'Cables', items: ['Fast Cables', 'Pakistan Cables'], image: '/construction.png' },
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

                {/* Ambient Background Flags/Effect (Optional reuse or distinct style) */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <span className="text-primary-light font-semibold tracking-wider text-sm uppercase mb-4 block animate-fade-in-up">Our Partners</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up delay-100">
                        Trusted <span className="gradient-text">Brands</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
                        We collaborate with industry leaders to ensure the highest quality and reliability in every project we undertake.
                    </p>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="section pb-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {brands.map((category, idx) => (
                            <div key={idx} className="glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 animate-fade-in-up group overflow-hidden relative" style={{ animationDelay: `${idx * 100}ms` }}>
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                                    <img
                                        src={category.image}
                                        alt={category.category}
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-display font-bold mb-6 text-accent-gold border-b border-white/10 pb-4">
                                        {category.category}
                                    </h3>
                                    <div className="grid gap-4">
                                        {category.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="flex items-center gap-4 group/item">
                                                <div className="w-10 h-10 rounded-lg bg-primary-light/10 flex items-center justify-center text-primary-light group-hover/item:bg-primary-light group-hover/item:text-white transition-all">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-lg text-gray-300 font-medium group-hover/item:text-white transition-colors">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-24 text-center glass rounded-3xl p-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-4">Quality Guaranteed</h2>
                        <p className="text-gray-400 mb-8">
                            By using materials from these top-tier manufacturers, we ensure structural integrity and long-lasting performance for all our construction and solar projects.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

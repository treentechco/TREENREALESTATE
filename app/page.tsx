'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'construction',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/923027685693?text=${encodedText}`, '_blank');

        setFormData({ name: '', email: '', phone: '', service: 'construction', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const featuredProjects = [
        {
            title: 'Luxury Residential Complex',
            location: 'F-11, Islamabad',
            type: 'Construction',
            image: '/construction.png',
            link: '/projects'
        },
        {
            title: 'Solar Power Installation',
            location: 'G-13, Islamabad',
            type: 'Solar Energy',
            image: '/solar.png',
            link: '/projects'
        },
        {
            title: 'Premium Real Estate',
            location: 'DHA Phase 2, Islamabad',
            type: 'Real Estate',
            image: '/real-estate.png',
            link: '/projects'
        },
    ];

    const testimonials = [
        {
            name: 'Ahmed Khan',
            role: 'Business Owner',
            project: 'Commercial Building',
            text: 'TREEN delivered beyond expectations! The construction quality and timely delivery show their professionalism. Highly recommended for anyone looking for reliable construction services in Islamabad.',
            rating: 5
        },
        {
            name: 'Fatima Malik',
            role: 'Homeowner',
            project: 'Solar Installation',
            text: 'After extensive research, I chose TREEN for solar installation. The team was professional, and the installation was seamless. My electricity bills have reduced significantly!',
            rating: 5
        },
        {
            name: 'Hassan Raza',
            role: 'Investor',
            project: 'Real Estate Investment',
            text: 'As a first-time investor, TREEN made the entire process smooth and transparent. Their market knowledge and commitment to excellence gave me complete confidence.',
            rating: 5
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10 w-full max-w-4xl px-4">
                    <div className="mb-12 animate-float">
                        <Image
                            src="/calligraphy-logo.png"
                            alt="TREEN Calligraphy Branding"
                            width={500}
                            height={300}
                            className="mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] invert brightness-200"
                            priority
                        />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-semibold mb-8 text-white">
                        A World Beyond Excellence
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        At TREEN, contemporary luxury meets timeless elegance. Crafted for those with a taste for the extraordinary, our projects blend modern architecture, refined interiors, and an effortless connection to a vibrant lifestyle of prestige and comfort.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center text-lg md:text-xl text-accent-gold">
                        <span className="flex items-center gap-2">
                            <span className="text-2xl">🏗️</span> Construction
                        </span>
                        <span className="text-primary-light">•</span>
                        <span className="flex items-center gap-2">
                            <span className="text-2xl">☀️</span> Solar Energy
                        </span>
                        <span className="text-primary-light">•</span>
                        <span className="flex items-center gap-2">
                            <span className="text-2xl">🏘️</span> Real Estate
                        </span>
                    </div>

                    <div className="mt-12 flex gap-4 justify-center">
                        <Link href="/services" className="btn-primary inline-block">
                            Explore Our Services
                        </Link>
                        <Link href="/contact" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300 inline-block">
                            Get In Touch
                        </Link>
                    </div>
                </div>


            </section>

            {/* Featured Projects Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover our portfolio of exceptional projects across Islamabad
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                            className="glass glass-hover rounded-2xl overflow-hidden group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-primary-light/90 text-background text-sm font-semibold rounded-full">
                                    {project.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-display font-bold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 flex items-center gap-2">
                                    <span>📍</span> {project.location}
                                </p>
                                <div className="text-primary-light font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                                    View Details
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/projects" className="btn-primary inline-block">
                        View All Projects
                    </Link>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building excellence with proven results
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🏆</div>
                        <div className="text-4xl font-bold text-primary-light mb-2">10+</div>
                        <div className="text-gray-400">Years Experience</div>
                        <p className="text-sm text-gray-500 mt-2">Building excellence in Islamabad</p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">✅</div>
                        <div className="text-4xl font-bold text-accent-green mb-2">100+</div>
                        <div className="text-gray-400">Projects Completed</div>
                        <p className="text-sm text-gray-500 mt-2">Delivered with quality and care</p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">👥</div>
                        <div className="text-4xl font-bold text-accent-gold mb-2">500+</div>
                        <div className="text-gray-400">Happy Clients</div>
                        <p className="text-sm text-gray-500 mt-2">Satisfied customers across Pakistan</p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">⭐</div>
                        <div className="text-4xl font-bold text-primary-light mb-2">100%</div>
                        <div className="text-gray-400">Client Satisfaction</div>
                        <p className="text-sm text-gray-500 mt-2">Excellence in every project</p>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions for all your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Construction */}
                    <Link href="/services/construction" className="glass glass-hover rounded-2xl overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="/construction.png"
                                alt="Construction Services"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-display font-bold mb-3 text-primary-light">
                                🏗️ Construction
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Premium construction services for residential and commercial projects. From foundation to finishing, we deliver excellence.
                            </p>
                            <div className="text-primary-light font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Solar */}
                    <Link href="/services/solar" className="glass glass-hover rounded-2xl overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="/solar.png"
                                alt="Solar Energy Solutions"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-display font-bold mb-3 text-accent-green">
                                ☀️ Solar Energy
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Sustainable solar energy solutions to power your future. Reduce costs and embrace clean energy.
                            </p>
                            <div className="text-accent-green font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Real Estate */}
                    <Link href="/services/real-estate" className="glass glass-hover rounded-2xl overflow-hidden group">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="/real-estate.png"
                                alt="Real Estate Services"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-display font-bold mb-3 text-accent-gold">
                                🏘️ Real Estate
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Expert real estate services in Islamabad. Find your dream property or sell with confidence.
                            </p>
                            <div className="text-accent-gold font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>


            {/* Global Clientele Section */}
            <section className="section bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>

                {/* Ambient Background Flags */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-5">
                    <div className="absolute top-10 left-10 text-9xl transform -rotate-12">🇬🇧</div>
                    <div className="absolute bottom-10 right-10 text-9xl transform rotate-12">🇺🇸</div>
                    <div className="absolute top-1/2 left-1/4 text-9xl transform -rotate-6">🇨🇦</div>
                    <div className="absolute top-10 right-20 text-9xl transform rotate-45">🇦🇺</div>
                    <div className="absolute bottom-20 left-1/3 text-9xl transform -rotate-12">🇪🇺</div>
                </div>
                <div className="text-center mb-16 relative z-10">
                    <span className="text-primary-light font-semibold tracking-wider text-sm uppercase mb-4 block">International Reach</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Serving Clients <span className="gradient-text">Globally</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        We specialize in assisting overseas Pakistanis and international investors from across the globe with their real estate and construction needs in Islamabad.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
                        {[
                            { name: 'United Kingdom', flag: '🇬🇧' },
                            { name: 'USA', flag: '🇺🇸' },
                            { name: 'Canada', flag: '🇨🇦' },
                            { name: 'Australia', flag: '🇦🇺' },
                            { name: 'Europe', flag: '🇪🇺' }
                        ].map((region) => (
                            <div key={region.name} className="glass px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all cursor-default">
                                <span className="text-3xl filter drop-shadow-lg">{region.flag}</span>
                                <span className="font-semibold text-white">{region.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Trusted by hundreds of satisfied clients across Islamabad
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass rounded-2xl p-8">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-accent-gold text-xl">⭐</span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <div className="font-bold text-white">{testimonial.name}</div>
                                <div className="text-sm text-gray-400">{testimonial.role}</div>
                                <div className="text-sm text-primary-light mt-1">{testimonial.project}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Start Your <span className="gradient-text">Project</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's craft your next chapter together. Contact us today for a free consultation and discover how TREEN can bring your vision to life.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Get Free Consultation
                        </Link>
                        <Link href="/projects" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300">
                            View Our Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

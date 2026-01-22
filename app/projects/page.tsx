'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            title: 'Luxury Residential Complex',
            location: 'F-11, Islamabad',
            category: 'construction',
            image: '/construction.png',
            description: 'A premium residential complex featuring modern architecture and world-class amenities.',
            year: '2024',
            status: 'Completed'
        },
        {
            title: 'Commercial Plaza Construction',
            location: 'Blue Area, Islamabad',
            category: 'construction',
            image: '/construction.png',
            description: 'State-of-the-art commercial plaza with retail and office spaces.',
            year: '2023',
            status: 'Completed'
        },
        {
            title: 'Residential Solar Installation',
            location: 'G-13, Islamabad',
            category: 'solar',
            image: '/solar.png',
            description: '15kW solar system installation for a residential property, reducing electricity costs by 85%.',
            year: '2024',
            status: 'Completed'
        },
        {
            title: 'Commercial Solar Project',
            location: 'I-8 Markaz, Islamabad',
            category: 'solar',
            image: '/solar.png',
            description: '50kW solar installation for a commercial building with net metering.',
            year: '2023',
            status: 'Completed'
        },
        {
            title: 'DHA Phase 2 Villa',
            location: 'DHA Phase 2, Islamabad',
            category: 'real-estate',
            image: '/real-estate.png',
            description: 'Luxury villa sale in prime DHA location with modern amenities.',
            year: '2024',
            status: 'Sold'
        },
        {
            title: 'Bahria Town Investment',
            location: 'Bahria Town, Islamabad',
            category: 'real-estate',
            image: '/real-estate.png',
            description: 'Successful investment consultation for commercial plot acquisition.',
            year: '2023',
            status: 'Completed'
        },
        {
            title: 'Modern Villa Construction',
            location: 'F-10, Islamabad',
            category: 'construction',
            image: '/construction.png',
            description: 'Contemporary villa with sustainable design and smart home features.',
            year: '2024',
            status: 'Ongoing'
        },
        {
            title: 'Industrial Solar System',
            location: 'I-9, Islamabad',
            category: 'solar',
            image: '/solar.png',
            description: '100kW solar installation for industrial facility.',
            year: '2024',
            status: 'Ongoing'
        },
        {
            title: 'F-7 Apartment Complex',
            location: 'F-7, Islamabad',
            category: 'real-estate',
            image: '/real-estate.png',
            description: 'Premium apartment sales in the heart of Islamabad.',
            year: '2023',
            status: 'Sold Out'
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const filters = [
        { id: 'all', label: 'All Projects', icon: '🏗️' },
        { id: 'construction', label: 'Construction', icon: '🏗️' },
        { id: 'solar', label: 'Solar Energy', icon: '☀️' },
        { id: 'real-estate', label: 'Real Estate', icon: '🏘️' },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Our <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Showcasing Excellence Across Islamabad
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="section pt-8">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-primary-light text-background'
                                    : 'glass text-gray-300 hover:bg-white/10'
                                }`}
                        >
                            <span className="mr-2">{filter.icon}</span>
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass glass-hover rounded-2xl overflow-hidden group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
                                    {project.status}
                                </div>
                                <div className="absolute top-4 left-4 px-3 py-1 glass text-white text-sm font-semibold rounded-full">
                                    {project.year}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-display font-bold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-3 flex items-center gap-2">
                                    <span>📍</span> {project.location}
                                </p>
                                <p className="text-gray-300 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-semibold ${project.category === 'construction' ? 'text-primary-light' :
                                            project.category === 'solar' ? 'text-accent-green' :
                                                'text-accent-gold'
                                        }`}>
                                        {project.category === 'construction' ? '🏗️ Construction' :
                                            project.category === 'solar' ? '☀️ Solar Energy' :
                                                '🏘️ Real Estate'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-400">No projects found in this category.</p>
                    </div>
                )}
            </section>

            {/* Stats Section */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Project <span className="gradient-text">Statistics</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Numbers that speak for our excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏗️</div>
                            <div className="text-4xl font-bold text-primary-light mb-2">50+</div>
                            <div className="text-gray-400">Construction Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">☀️</div>
                            <div className="text-4xl font-bold text-accent-green mb-2">30+</div>
                            <div className="text-gray-400">Solar Installations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏘️</div>
                            <div className="text-4xl font-bold text-accent-gold mb-2">100+</div>
                            <div className="text-gray-400">Properties Sold</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⭐</div>
                            <div className="text-4xl font-bold text-white mb-2">100%</div>
                            <div className="text-gray-400">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Start Your <span className="gradient-text">Project</span> Today
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our growing list of satisfied clients. Let's create something exceptional together.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Discuss Your Project
                        </Link>
                        <Link href="/services" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300">
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

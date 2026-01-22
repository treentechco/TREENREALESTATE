import Image from 'next/image';
import Link from 'next/link';

export default function Construction() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <div className="text-6xl mb-6">🏗️</div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        <span className="gradient-text">Construction</span> Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Building Your Dreams with Excellence and Precision
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="glass rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-96 md:h-auto">
                            <Image
                                src="/construction.png"
                                alt="Construction Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-display font-bold mb-6 text-primary-light">
                                Premium Construction Solutions
                            </h2>
                            <p className="text-lg text-gray-300 mb-6">
                                TREEN Real Estate & Builders offers comprehensive construction services for residential and commercial projects across Islamabad. With over a decade of experience, we deliver exceptional quality from foundation to finishing.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Our team of skilled professionals combines modern construction techniques with traditional craftsmanship to create structures that stand the test of time. We handle every aspect of your project with meticulous attention to detail.
                            </p>
                            <Link href="/contact" className="btn-primary w-fit">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        What We <span className="gradient-text">Build</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive construction services for every need
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🏠</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Residential Buildings</h3>
                        <p className="text-gray-400 mb-4">
                            Custom homes, villas, and apartment complexes designed to your specifications
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Single-family homes</li>
                            <li>✓ Multi-story villas</li>
                            <li>✓ Apartment buildings</li>
                            <li>✓ Housing societies</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🏢</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Commercial Complexes</h3>
                        <p className="text-gray-400 mb-4">
                            Modern commercial spaces built for business success
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Office buildings</li>
                            <li>✓ Shopping centers</li>
                            <li>✓ Retail spaces</li>
                            <li>✓ Mixed-use developments</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🔨</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Renovation & Remodeling</h3>
                        <p className="text-gray-400 mb-4">
                            Transform existing spaces into modern, functional areas
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Interior renovations</li>
                            <li>✓ Exterior upgrades</li>
                            <li>✓ Space optimization</li>
                            <li>✓ Modernization projects</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">📋</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Project Management</h3>
                        <p className="text-gray-400 mb-4">
                            End-to-end project oversight and coordination
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Planning & scheduling</li>
                            <li>✓ Budget management</li>
                            <li>✓ Quality control</li>
                            <li>✓ Vendor coordination</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🏗️</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Structural Work</h3>
                        <p className="text-gray-400 mb-4">
                            Strong foundations and structural integrity
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Foundation work</li>
                            <li>✓ Concrete structures</li>
                            <li>✓ Steel frameworks</li>
                            <li>✓ Load-bearing walls</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🎨</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Finishing Work</h3>
                        <p className="text-gray-400 mb-4">
                            Premium finishes that add value and beauty
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Flooring & tiling</li>
                            <li>✓ Painting & plastering</li>
                            <li>✓ Electrical & plumbing</li>
                            <li>✓ Fixtures & fittings</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Construction Process */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our Construction <span className="gradient-text">Process</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A systematic approach to building excellence
                    </p>
                </div>

                <div className="space-y-6">
                    {[
                        { step: 1, title: 'Initial Consultation', desc: 'Understanding your vision, requirements, and budget' },
                        { step: 2, title: 'Site Analysis & Planning', desc: 'Detailed site survey, soil testing, and architectural planning' },
                        { step: 3, title: 'Design & Approvals', desc: 'Creating detailed designs and obtaining necessary permits' },
                        { step: 4, title: 'Foundation Work', desc: 'Excavation, foundation laying, and structural groundwork' },
                        { step: 5, title: 'Structural Construction', desc: 'Building the main structure with quality materials' },
                        { step: 6, title: 'MEP Installation', desc: 'Mechanical, electrical, and plumbing systems installation' },
                        { step: 7, title: 'Finishing & Interiors', desc: 'Final touches, painting, flooring, and interior work' },
                        { step: 8, title: 'Quality Check & Handover', desc: 'Final inspection, quality assurance, and project delivery' },
                    ].map((item) => (
                        <div key={item.step} className="glass rounded-2xl p-6 flex items-center gap-6 hover:bg-white/5 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center text-2xl font-bold text-primary-light flex-shrink-0">
                                {item.step}
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Why Choose <span className="gradient-text">TREEN</span> Construction?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: '✓', title: 'Experienced Team', desc: '10+ years of construction expertise in Islamabad' },
                            { icon: '✓', title: 'Quality Materials', desc: 'We use only premium, certified building materials' },
                            { icon: '✓', title: 'On-Time Delivery', desc: 'Committed to meeting project deadlines' },
                            { icon: '✓', title: 'Transparent Pricing', desc: 'No hidden costs, clear quotations' },
                            { icon: '✓', title: 'Safety Standards', desc: 'Strict adherence to safety protocols' },
                            { icon: '✓', title: 'After-Sales Support', desc: 'Comprehensive warranty and maintenance' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <span className="text-2xl text-accent-gold">{item.icon}</span>
                                <div>
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Build Your <span className="gradient-text">Dream Project</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and let's discuss how we can bring your construction vision to life.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Get Free Quote
                        </Link>
                        <Link href="/projects" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300">
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

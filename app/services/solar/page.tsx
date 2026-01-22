import Image from 'next/image';
import Link from 'next/link';

export default function Solar() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-green/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <div className="text-6xl mb-6">☀️</div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        <span className="text-accent-green">Solar Energy</span> Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Power Your Future with Clean, Sustainable Energy
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="glass rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-96 md:h-auto">
                            <Image
                                src="/solar.png"
                                alt="Solar Energy Solutions"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-display font-bold mb-6 text-accent-green">
                                Sustainable Solar Solutions
                            </h2>
                            <p className="text-lg text-gray-300 mb-6">
                                TREEN offers comprehensive solar energy solutions designed to reduce your electricity costs and carbon footprint. Our expert team provides end-to-end services from consultation to installation and maintenance.
                            </p>
                            <p className="text-gray-400 mb-6">
                                With rising electricity costs in Pakistan, solar energy is not just an environmentally conscious choice—it's a smart financial investment. Our systems are designed to maximize efficiency and provide long-term savings.
                            </p>
                            <Link href="/contact" className="btn-primary w-fit">
                                Get Solar Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar Services */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our Solar <span className="text-accent-green">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Complete solar energy solutions for homes and businesses
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🔆</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Solar Panel Installation</h3>
                        <p className="text-gray-400 mb-4">
                            Professional installation of high-efficiency solar panels
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Residential systems</li>
                            <li>✓ Commercial installations</li>
                            <li>✓ Industrial solutions</li>
                            <li>✓ Rooftop & ground-mounted</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">📊</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Energy Consultation</h3>
                        <p className="text-gray-400 mb-4">
                            Expert analysis of your energy needs and savings potential
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Energy audit</li>
                            <li>✓ System sizing</li>
                            <li>✓ ROI analysis</li>
                            <li>✓ Savings calculation</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">⚙️</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">System Design</h3>
                        <p className="text-gray-400 mb-4">
                            Custom solar system design optimized for your property
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Site assessment</li>
                            <li>✓ Custom layouts</li>
                            <li>✓ Efficiency optimization</li>
                            <li>✓ 3D modeling</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🔧</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Maintenance & Support</h3>
                        <p className="text-gray-400 mb-4">
                            Ongoing maintenance to ensure optimal performance
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Regular cleaning</li>
                            <li>✓ Performance monitoring</li>
                            <li>✓ Repairs & replacements</li>
                            <li>✓ 24/7 support</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🔌</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Grid Integration</h3>
                        <p className="text-gray-400 mb-4">
                            Seamless connection to the national grid
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Net metering setup</li>
                            <li>✓ Grid-tied systems</li>
                            <li>✓ Hybrid solutions</li>
                            <li>✓ Battery backup</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">💰</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Financing Options</h3>
                        <p className="text-gray-400 mb-4">
                            Flexible payment plans to make solar affordable
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Installment plans</li>
                            <li>✓ Leasing options</li>
                            <li>✓ Government incentives</li>
                            <li>✓ ROI guarantees</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Benefits of <span className="text-accent-green">Solar Energy</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Why thousands are switching to solar power
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">📉</div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Reduce Bills</h3>
                        <p className="text-gray-400">
                            Save up to 90% on your monthly electricity costs
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">🌍</div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Eco-Friendly</h3>
                        <p className="text-gray-400">
                            Reduce carbon footprint and help the environment
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">📈</div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Increase Value</h3>
                        <p className="text-gray-400">
                            Boost your property value with solar installation
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-4">⚡</div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Energy Independence</h3>
                        <p className="text-gray-400">
                            Generate your own power and reduce grid dependence
                        </p>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Installation <span className="text-accent-green">Process</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From consultation to activation in simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                    {[
                        { step: 1, title: 'Consultation', desc: 'Free energy audit and system design' },
                        { step: 2, title: 'Proposal', desc: 'Detailed quote and savings analysis' },
                        { step: 3, title: 'Installation', desc: 'Professional panel installation' },
                        { step: 4, title: 'Inspection', desc: 'Quality check and testing' },
                        { step: 5, title: 'Activation', desc: 'System activation and training' },
                    ].map((item) => (
                        <div key={item.step} className="glass rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center text-xl font-bold text-accent-green mx-auto mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-display font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Go <span className="text-accent-green">Solar</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Start saving on your electricity bills today. Contact us for a free solar consultation and discover how much you can save.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Get Free Solar Quote
                        </Link>
                        <Link href="/projects" className="px-8 py-3 rounded-lg border border-accent-green text-accent-green hover:bg-accent-green/10 transition-all duration-300">
                            View Solar Projects
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

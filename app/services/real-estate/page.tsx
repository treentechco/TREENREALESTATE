import Image from 'next/image';
import Link from 'next/link';

export default function RealEstate() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <div className="text-6xl mb-6">🏘️</div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        <span className="text-accent-gold">Real Estate</span> Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Your Trusted Partner in Islamabad's Property Market
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="glass rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-96 md:h-auto">
                            <Image
                                src="/real-estate.png"
                                alt="Real Estate Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-4xl font-display font-bold mb-6 text-accent-gold">
                                Expert Real Estate Solutions
                            </h2>
                            <p className="text-lg text-gray-300 mb-6">
                                TREEN Real Estate & Builders offers comprehensive real estate services in Islamabad. Whether you're buying your first home, selling a property, or looking for investment opportunities, our expert team is here to guide you.
                            </p>
                            <p className="text-gray-400 mb-6">
                                With deep knowledge of Islamabad's property market and a commitment to transparency, we help clients make informed decisions and achieve their real estate goals.
                            </p>
                            <Link href="/contact" className="btn-primary w-fit">
                                Find Your Property
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our Real Estate <span className="text-accent-gold">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Complete property solutions for buyers, sellers, and investors
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🏠</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Property Sales</h3>
                        <p className="text-gray-400 mb-4">
                            Find your dream property with our extensive listings
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Residential properties</li>
                            <li>✓ Commercial spaces</li>
                            <li>✓ Plots & land</li>
                            <li>✓ Luxury villas</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">💼</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Property Purchase</h3>
                        <p className="text-gray-400 mb-4">
                            Expert assistance in buying the right property
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Property search</li>
                            <li>✓ Market analysis</li>
                            <li>✓ Negotiation support</li>
                            <li>✓ Documentation help</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">📈</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Investment Consultation</h3>
                        <p className="text-gray-400 mb-4">
                            Strategic advice for profitable real estate investments
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Market insights</li>
                            <li>✓ ROI analysis</li>
                            <li>✓ Portfolio planning</li>
                            <li>✓ Risk assessment</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🔑</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Property Management</h3>
                        <p className="text-gray-400 mb-4">
                            Professional management of your real estate assets
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Tenant management</li>
                            <li>✓ Rent collection</li>
                            <li>✓ Maintenance oversight</li>
                            <li>✓ Financial reporting</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">⚖️</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Legal Assistance</h3>
                        <p className="text-gray-400 mb-4">
                            Complete legal support for property transactions
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Title verification</li>
                            <li>✓ Contract review</li>
                            <li>✓ Transfer documentation</li>
                            <li>✓ Legal compliance</li>
                        </ul>
                    </div>

                    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">📊</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Market Analysis</h3>
                        <p className="text-gray-400 mb-4">
                            In-depth market research and property valuation
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>✓ Price trends</li>
                            <li>✓ Area comparisons</li>
                            <li>✓ Property valuation</li>
                            <li>✓ Investment hotspots</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Property Types */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Property <span className="text-accent-gold">Types</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Diverse options to match your needs and budget
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: '🏡', title: 'Houses', desc: 'Single & multi-story homes' },
                        { icon: '🏢', title: 'Apartments', desc: 'Modern apartment units' },
                        { icon: '🏬', title: 'Commercial', desc: 'Offices & retail spaces' },
                        { icon: '📐', title: 'Plots', desc: 'Residential & commercial plots' },
                        { icon: '🏰', title: 'Villas', desc: 'Luxury villa properties' },
                        { icon: '🏭', title: 'Industrial', desc: 'Warehouses & factories' },
                        { icon: '🌳', title: 'Farmhouses', desc: 'Rural & agricultural land' },
                        { icon: '🏗️', title: 'Under Construction', desc: 'Pre-launch projects' },
                    ].map((type, idx) => (
                        <div key={idx} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                            <div className="text-4xl mb-3">{type.icon}</div>
                            <h3 className="text-lg font-display font-bold mb-2 text-white">{type.title}</h3>
                            <p className="text-sm text-gray-400">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Areas */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Popular Areas in <span className="text-accent-gold">Islamabad</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Prime locations we specialize in
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            'DHA Islamabad', 'Bahria Town', 'F-11', 'F-10', 'F-8', 'F-7', 'F-6',
                            'G-13', 'G-11', 'G-10', 'I-8', 'E-11', 'B-17', 'PWD Housing',
                            'Naval Anchorage', 'Gulberg Greens'
                        ].map((area, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                                <span className="text-gray-300">📍 {area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Why Choose <span className="text-accent-gold">TREEN</span> Real Estate?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: '🎯', title: 'Local Expertise', desc: 'Deep knowledge of Islamabad property market' },
                        { icon: '🤝', title: 'Trusted Service', desc: '500+ satisfied clients and counting' },
                        { icon: '💎', title: 'Premium Listings', desc: 'Access to exclusive property deals' },
                        { icon: '📱', title: 'Easy Process', desc: 'Simplified buying and selling procedures' },
                        { icon: '⚡', title: 'Quick Transactions', desc: 'Fast and efficient deal closures' },
                        { icon: '🔒', title: 'Secure Deals', desc: 'Complete legal verification and safety' },
                    ].map((item, idx) => (
                        <div key={idx} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Find Your Dream <span className="text-accent-gold">Property</span> Today
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you're buying, selling, or investing, we're here to help you navigate Islamabad's real estate market with confidence.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Contact Our Agents
                        </Link>
                        <Link href="/projects" className="px-8 py-3 rounded-lg border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-all duration-300">
                            Browse Properties
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

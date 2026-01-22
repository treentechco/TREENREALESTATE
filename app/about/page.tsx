import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        About <span className="gradient-text">TREEN</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Building Excellence in Islamabad Since 2014
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Our <span className="gradient-text">Story</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6">
                                TREEN Real Estate & Builders is a leading provider of construction, solar energy, and real estate services in Islamabad, Pakistan. Since our establishment, we have built a reputation for delivering exceptional projects that transform spaces into outstanding destinations.
                            </p>
                            <p className="text-gray-400 mb-6">
                                With over a decade of experience, we have established ourselves as a trusted name in the industry. Our team of professionals is dedicated to delivering high-quality solutions that exceed expectations, combining modern architecture with refined interiors and sustainable practices.
                            </p>
                            <p className="text-gray-400">
                                At TREEN, we believe in building not just structures, but lasting relationships with our clients. Our commitment to excellence, transparency, and customer satisfaction has made us one of Islamabad's most trusted real estate developers and construction companies.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="glass rounded-2xl p-6">
                                <Image
                                    src="/logo-dark.jpg"
                                    alt="TREEN"
                                    width={400}
                                    height={400}
                                    className="rounded-xl mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass rounded-2xl p-8">
                        <div className="text-5xl mb-4">🎯</div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-primary-light">
                            Our Mission
                        </h3>
                        <p className="text-gray-300">
                            To deliver exceptional construction, solar energy, and real estate solutions that exceed client expectations while maintaining the highest standards of quality, integrity, and sustainability. We strive to build lasting relationships and create value for our clients, employees, and communities.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8">
                        <div className="text-5xl mb-4">👁️</div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-accent-green">
                            Our Vision
                        </h3>
                        <p className="text-gray-300">
                            To be the most trusted and innovative provider of construction, solar energy, and real estate services in Pakistan. We envision a future where sustainable building practices and renewable energy solutions are the norm, and where every client's dream property becomes a reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our <span className="gradient-text">Values</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">✨</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Excellence</h3>
                        <p className="text-gray-400">
                            We are committed to delivering the highest quality in every project, ensuring exceptional results that stand the test of time.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🤝</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Integrity</h3>
                        <p className="text-gray-400">
                            Honesty and transparency are at the core of our business. We build trust through ethical practices and open communication.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">🌱</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Sustainability</h3>
                        <p className="text-gray-400">
                            We embrace eco-friendly practices and renewable energy solutions to create a better future for generations to come.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">💡</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Innovation</h3>
                        <p className="text-gray-400">
                            We continuously explore new technologies and methods to deliver cutting-edge solutions to our clients.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">👥</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Customer Focus</h3>
                        <p className="text-gray-400">
                            Our clients are at the heart of everything we do. We listen, understand, and deliver solutions tailored to their needs.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl mb-4">⚡</div>
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">Reliability</h3>
                        <p className="text-gray-400">
                            We deliver on our promises with consistent quality, timely completion, and dependable service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Why Choose <span className="gradient-text">TREEN</span>?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            What sets us apart in Islamabad's competitive market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Local Expertise</h4>
                                <p className="text-gray-400">Deep understanding of Islamabad's market, regulations, and opportunities</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Proven Track Record</h4>
                                <p className="text-gray-400">100+ successfully completed projects with 100% client satisfaction</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Comprehensive Services</h4>
                                <p className="text-gray-400">One-stop solution for construction, solar energy, and real estate needs</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Quality Assurance</h4>
                                <p className="text-gray-400">Rigorous quality control at every stage of project execution</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Timely Delivery</h4>
                                <p className="text-gray-400">Commitment to meeting deadlines without compromising quality</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Transparent Pricing</h4>
                                <p className="text-gray-400">No hidden costs, clear communication, and honest pricing</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">Professional Team</h4>
                                <p className="text-gray-400">Experienced professionals dedicated to your project's success</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-2xl text-accent-gold">✓</span>
                            <div>
                                <h4 className="font-bold text-white mb-2">After-Sales Support</h4>
                                <p className="text-gray-400">Comprehensive support even after project completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Work <span className="gradient-text">With Us</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied clients who have trusted TREEN for their construction, solar, and real estate needs.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Get In Touch
                        </Link>
                        <Link href="/services" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

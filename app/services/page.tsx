import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: 'Construction',
            icon: '🏗️',
            description: 'Premium construction services for residential and commercial projects',
            image: '/construction.png',
            link: '/services/construction',
            color: 'primary-light',
            features: [
                'Residential Buildings',
                'Commercial Complexes',
                'Renovation & Remodeling',
                'Project Management',
                'Quality Assurance',
                'Timely Delivery'
            ]
        },
        {
            title: 'Solar Energy',
            icon: '☀️',
            description: 'Sustainable solar energy solutions to power your future',
            image: '/solar.png',
            link: '/services/solar',
            color: 'accent-green',
            features: [
                'Solar Panel Installation',
                'Energy Consultation',
                'System Design',
                'Maintenance & Support',
                'Grid Integration',
                'Cost Savings Analysis'
            ]
        },
        {
            title: 'Real Estate',
            icon: '🏘️',
            description: 'Expert real estate services in Islamabad',
            image: '/real-estate.png',
            link: '/services/real-estate',
            color: 'accent-gold',
            features: [
                'Property Sales & Purchase',
                'Investment Consultation',
                'Property Management',
                'Legal Assistance',
                'Market Analysis',
                'Portfolio Development'
            ]
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="section min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"></div>

                <div className="animate-fade-in-up relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive solutions for all your construction, energy, and real estate needs
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className={`glass rounded-3xl overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-80 md:h-auto overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="text-6xl mb-4">{service.icon}</div>
                                    <h2 className={`text-4xl font-display font-bold mb-4 text-${service.color}`}>
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-gray-300 mb-6">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-400">
                                                <span className={`text-${service.color}`}>✓</span>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={service.link}
                                        className="btn-primary inline-block w-fit"
                                    >
                                        Learn More About {service.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="section">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Our <span className="gradient-text">Process</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A streamlined approach to delivering exceptional results
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center text-2xl font-bold text-primary-light mx-auto mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Consultation</h3>
                        <p className="text-gray-400 text-sm">
                            We listen to your needs and understand your vision
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center text-2xl font-bold text-accent-green mx-auto mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Planning</h3>
                        <p className="text-gray-400 text-sm">
                            Detailed planning and design tailored to your requirements
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center text-2xl font-bold text-accent-gold mx-auto mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Execution</h3>
                        <p className="text-gray-400 text-sm">
                            Professional implementation with quality assurance
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center text-2xl font-bold text-primary-light mx-auto mb-4">
                            4
                        </div>
                        <h3 className="text-xl font-display font-bold mb-3 text-white">Delivery</h3>
                        <p className="text-gray-400 text-sm">
                            Timely completion with ongoing support
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Why Choose <span className="gradient-text">Our Services</span>?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Benefits that set us apart
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">💎</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">Premium Quality</h3>
                            <p className="text-gray-400">
                                We use only the best materials and employ skilled professionals to ensure top-tier results
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⏱️</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">On-Time Delivery</h3>
                            <p className="text-gray-400">
                                We respect your time and commit to delivering projects within agreed timelines
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">Value for Money</h3>
                            <p className="text-gray-400">
                                Competitive pricing without compromising on quality or service excellence
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">Guaranteed Work</h3>
                            <p className="text-gray-400">
                                We stand behind our work with comprehensive warranties and guarantees
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">📞</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">24/7 Support</h3>
                            <p className="text-gray-400">
                                Our team is always available to address your concerns and queries
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🌟</div>
                            <h3 className="text-xl font-display font-bold mb-3 text-white">Customer Satisfaction</h3>
                            <p className="text-gray-400">
                                100% client satisfaction rate with hundreds of happy customers
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass rounded-3xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Ready to Get <span className="gradient-text">Started</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and let's discuss how we can help bring your project to life.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/contact" className="btn-primary">
                            Request Free Consultation
                        </Link>
                        <Link href="/projects" className="px-8 py-3 rounded-lg border border-primary-light text-primary-light hover:bg-primary-light/10 transition-all duration-300">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

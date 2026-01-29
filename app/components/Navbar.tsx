'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'All Services', path: '/services' },
                { name: 'Construction', path: '/services/construction' },
                { name: 'Solar Energy', path: '/services/solar' },
                { name: 'Real Estate', path: '/services/real-estate' },
            ]
        },
        { name: 'Projects', path: '/projects' },
        { name: 'Brands', path: '/brands' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-white/10' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/calligraphy-logo.png"
                            alt="TREEN"
                            width={120}
                            height={40}
                            className="group-hover:scale-105 transition-transform duration-300 invert brightness-200"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.dropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive(link.path)
                                                ? 'text-primary-light bg-primary-light/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {isServicesOpen && (
                                            <div className="absolute top-full left-0 mt-2 w-48 glass rounded-xl border border-white/10 overflow-hidden animate-fade-in-up">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        href={item.path}
                                                        className={`block px-4 py-3 transition-colors ${pathname === item.path
                                                            ? 'text-primary-light bg-primary-light/10'
                                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive(link.path)
                                            ? 'text-primary-light bg-primary-light/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-4 btn-primary"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in-up">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.path}
                                    onClick={() => !link.dropdown && setIsMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg transition-colors ${isActive(link.path)
                                        ? 'text-primary-light bg-primary-light/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <div className="pl-4 mt-1 space-y-1">
                                        {link.dropdown.slice(1).map((item) => (
                                            <Link
                                                key={item.path}
                                                href={item.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${pathname === item.path
                                                    ? 'text-primary-light bg-primary-light/10'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block mt-4 btn-primary text-center"
                        >
                            Get Quote
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

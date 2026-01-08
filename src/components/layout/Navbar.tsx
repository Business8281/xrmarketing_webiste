import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-black/50 backdrop-blur-xl border-white/10 py-4'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="relative z-50 block group no-underline">
                    <div className="flex items-center gap-2">
                        {/* Stylized XR Mark */}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-white transition-transform group-hover:scale-110">
                            <path d="M8 8L20 20L32 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 20L8 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 20H28C32 20 32 24 28 28L20 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
                                XRMarketing
                            </span>
                            <span className="text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.2em] text-gray-400">
                                PVT. LTD.
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={clsx(
                                "text-lg md:text-xl font-bold transition-colors relative group",
                                location.pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300",
                                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                            )} />
                        </Link>
                    ))}
                    <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-black font-bold text-base hover:bg-gray-200 transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold text-lg">
                                Get Started
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav >
    );
}

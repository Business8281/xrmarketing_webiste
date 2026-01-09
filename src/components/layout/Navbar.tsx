import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import logoHeader from '../../assets/header-logo.jpg';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown state
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when location changes
    useEffect(() => {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
    }, [location]);

    const servicesList = [
        'Marketing Automation', 'Content Marketing',
        'Social Media Optimization', 'WhatsApp Marketing',
        'Social Media Marketing', 'Email Marketing',
        'Search Engine Optimization', 'Video Production',
        'Search Engine Marketing', 'UI/UX Design',
        'Brand Management'
    ];

    const simpleLinks = [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-black border-white/10',
                isScrolled ? 'py-3' : 'py-4'
            )}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="relative z-50 block group">
                    <div className="relative">
                        <img
                            src={logoHeader}
                            alt="XRMarketing"
                            className="h-16 md:h-20 w-auto object-contain invert mix-blend-screen transition-transform transform group-hover:scale-105"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">

                    {/* Services Dropdown Trigger */}
                    <div className="relative">
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={clsx(
                                "flex items-center gap-1 text-base md:text-lg font-bold transition-colors focus:outline-none",
                                isServicesOpen || location.pathname.includes('/services') ? "text-white" : "text-gray-300 hover:text-white"
                            )}
                        >
                            Services <ChevronDown className={clsx("w-4 h-4 transition-transform duration-300", isServicesOpen ? "rotate-180" : "")} />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    className="absolute top-full left-0 mt-6 w-[700px] bg-white rounded-2xl p-8 shadow-2xl grid grid-cols-2 gap-x-12 gap-y-4 text-black z-[60] -translate-x-1/4"
                                >
                                    {/* Optional Arrow or Bridge */}
                                    <div className="absolute -top-2 left-1/4 w-4 h-4 bg-white rotate-45 transform"></div>

                                    <div className="col-span-2 mb-2 pb-2 border-b border-gray-100 flex justify-between items-center">
                                        <h3 className="font-bold text-xl text-black">Our Services</h3>
                                        <Link to="/services" className="text-sm text-blue-600 hover:underline">View All</Link>
                                    </div>

                                    {servicesList.map(service => (
                                        <Link
                                            key={service}
                                            to={`/services/${service.toLowerCase().replace(/ \//g, '').replace(/ /g, '-')}`}
                                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></span>
                                            {service}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Invisible overlay to close when clicking outside? 
                            Ideally handled by global listener, but click-toggle works for now. 
                        */}
                    </div>

                    {/* Standard Links */}
                    {simpleLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={clsx(
                                "text-base md:text-lg font-bold transition-colors relative group",
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

                    <Link to="/contact" className="px-7 py-3 rounded-full bg-white text-black font-bold text-base hover:bg-gray-200 transition-colors">
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
                            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden overflow-y-auto py-20"
                        >
                            <div className="w-full max-w-sm px-6 flex flex-col gap-6 text-center">
                                {/* Mobile Services Accordion could go here, keeping it simple for now */}
                                <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                                    <span className="text-gray-500 uppercase text-sm tracking-widest">Services</span>
                                    {servicesList.slice(0, 6).map(service => (
                                        <Link
                                            key={service}
                                            to={`/services/${service.toLowerCase().replace(/ \//g, '').replace(/ /g, '-')}`}
                                            className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                    <Link to="/services" className="text-blue-400 text-sm mt-2">View All Services...</Link>
                                </div>

                                {simpleLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link to="/contact" className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold text-lg">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav >
    );
}

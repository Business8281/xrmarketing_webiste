import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const services = [
        'SEO', 'PPC', 'Social Media', 'Content Marketing',
        'Web Development', 'App Development', 'Strategy',
        'Branding', 'Analytics', 'Email Marketing'
    ];

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-48 pb-16 container mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-black mb-12 text-center"
                >
                    Get in Touch
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                        <Mail />
                                    </div>
                                    <span>hello@xrmarketing.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                                        <Phone />
                                    </div>
                                    <span>+1 (707) 554-5960</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-full bg-pink-500/10 text-pink-400">
                                        <MapPin />
                                    </div>
                                    <span>123 Innovation Dr, Tech City, TC 90210</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Full Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Phone Number</label>
                                <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="+1 (555) 000-0000" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">I'm interested in...</label>
                                <div className="flex flex-wrap gap-3">
                                    {services.map(service => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedServices.includes(service)
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..." />
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

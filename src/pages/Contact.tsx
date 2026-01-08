import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
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
                                    <span>+1 (555) 123-4567</span>
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
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" />
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

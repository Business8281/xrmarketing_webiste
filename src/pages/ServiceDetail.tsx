import { useParams } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { Footer } from '../components/layout/Footer';

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();

    // This is a placeholder. ideally we would fetch content based on the ID.
    // For now, we will format the ID to look like a title.
    const serviceTitle = id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-32 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto py-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        {serviceTitle}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-12">
                        Comprehensive {serviceTitle} solutions tailored to elevate your brand and drive growth in the digital landscape.
                    </p>

                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-12">
                        <h2 className="text-2xl font-bold mb-4">Why Choose Our {serviceTitle}?</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>Data-driven strategies customized for your business goals.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>Expert execution by a team of industry veterans.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>Continuous optimization and transparent reporting.</span>
                            </li>
                        </ul>
                    </div>

                    <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                        Get a Quote for {serviceTitle}
                    </button>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}

import { Navbar } from '../components/layout/Navbar';
import { Services as ServicesList } from '../components/home/Services';
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-48 pb-16 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We offer a full spectrum of digital solutions designed to elevate your brand in the virtual and physical worlds.
                    </p>
                </motion.div>

                {/* Reuse the Services component list */}
                <ServicesList />
            </div>
        </div>
    );
}

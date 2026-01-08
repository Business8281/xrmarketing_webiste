import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-48 pb-16 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl font-black mb-8">About XRMarketing</h1>

                    <div className="prose prose-invert prose-lg text-gray-400">
                        <p className="lead text-xl text-white mb-6">
                            We are a forward-thinking digital agency bridging the gap between imagination and reality.
                        </p>
                        <p className="mb-6">
                            Founded in 2024, XRMarketing has rapidly evolved into a powerhouse of creative technology. We specialize in Web 3.0, immersive experiences, and high-impact digital strategies that define the future of engagement.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Our Mission</h2>
                        <p className="mb-6">
                            To empower brands with the tools of tomorrow. We believe that the digital landscape is not just about screens, but about creating environments where stories can live, breathe, and interact with the audience.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white">Creative Directors</h3>
                                <p className="mt-2">Visionaries who shape the aesthetic and narrative of every project.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold text-white">Tech Wizards</h3>
                                <p className="mt-2">Engineers mastering Three.js, React, and native technologies.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

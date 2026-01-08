import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="relative w-full h-[100dvh] bg-black overflow-hidden">
            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Hero3D />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.015,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 drop-shadow-2xl"
                    >
                        {"Dominate Your Market".split(" ").map((word, i) => (
                            <span key={i} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {/* Add space after word unless it's the last one, but handling spaces in flex/inline-block is tricky. 
                                    Using a non-breaking space inside a separate span or just a string " " is safer for wrapping. 
                                    Actually, just appending a space motion span or a regular space? */}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                        <br />
                        <span className="text-white">
                            {"with High-Impact XR Campaigns".split(" ").map((word, i) => (
                                <span key={i} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            style={{ display: "inline-block" }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    <span className="inline-block">&nbsp;</span>
                                </span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Stop struggling with low engagement—captivate your audience with immersive 3D experiences that convert.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                    >
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 group">
                            Get Your Free Proposal
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="tel:7075545960" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call 7075545960
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
}

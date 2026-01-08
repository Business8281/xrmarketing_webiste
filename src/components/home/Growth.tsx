import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export function Growth() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

                {/* Left: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        With Us, Your Digital Growth <br />
                        isn't Just Rapid — it's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Unstoppable
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                        Our growth models are designed for scaling. We focus on compound returns, turning every interaction into a long-term value asset.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-white border-b-2 border-purple-500 pb-1 hover:text-purple-400 transition-colors">
                        Start Growing <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Right: Graph Visualization */}
                <div className="flex-1 relative h-[400px] w-full flex items-end justify-center pb-12">
                    <div className="relative w-full max-w-md h-64 border-l-2 border-b-2 border-white/20">

                        {/* Graph Line */}
                        <svg className="absolute inset-0 overflow-visible w-full h-full" preserveAspectRatio="none">
                            <motion.path
                                d="M0,250 C100,200 200,150 400,0" // Bezier curve approximation to top right
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Floating Cards along the path */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-600 p-4 rounded-lg shadow-2xl"
                        >
                            <TrendingUp className="w-8 h-8 text-white" />
                        </motion.div>

                        <div className="absolute bottom-10 left-10 text-white/50 text-sm">Now</div>
                        <div className="absolute top-0 -right-10 text-white/50 text-sm">Future</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

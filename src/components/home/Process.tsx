import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function Process() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">

                {/* Left: Complex Circular Diagram */}
                <div className="flex-1 relative flex items-center justify-center">
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                        {/* CSS Conic Gradient approximation of the segments */}
                        <motion.div
                            initial={{ rotate: -90, opacity: 0 }}
                            whileInView={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: `conic-gradient(
                                    from 0deg,
                                    #3b82f6 0deg 60deg,   /* Blue */
                                    #ef4444 60deg 120deg, /* Red */
                                    #eab308 120deg 180deg, /* Yellow */
                                    #f97316 180deg 240deg, /* Orange */
                                    #a855f7 240deg 300deg, /* Purple */
                                    #06b6d4 300deg 360deg  /* Cyan */
                                )`,
                                maskImage: 'radial-gradient(transparent 45%, black 46%)',
                                WebkitMaskImage: 'radial-gradient(transparent 45%, black 46%)'
                            }}
                        />

                        {/* Labels for segments - centered in arc */}
                        <div className="absolute inset-0 pointer-events-none">
                            <span className="absolute top-[15%] left-[68%] -translate-x-1/2 -translate-y-1/2 text-sm md:text-base font-bold text-white drop-shadow-md">Strategy</span>
                            <span className="absolute top-[85%] left-[68%] -translate-x-1/2 -translate-y-1/2 text-sm md:text-base font-bold text-white drop-shadow-md">Design</span>
                            <span className="absolute top-[85%] left-[32%] -translate-x-1/2 -translate-y-1/2 text-sm md:text-base font-bold text-white drop-shadow-md">Dev</span>
                            <span className="absolute top-[15%] left-[32%] -translate-x-1/2 -translate-y-1/2 text-sm md:text-base font-bold text-white drop-shadow-md">Market</span>
                        </div>

                        {/* Central Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center border-4 border-gray-800 z-10">
                                <Lightbulb className="w-10 h-10 text-yellow-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Setting the Pace & <br />
                        Breaking the Barriers of <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Digital Marketing with AI
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        We don't just follow trends; we set them. Our AI-driven pacing methodology ensures your campaigns stay ahead of the curve, optimizing in real-time for maximum efficiency.
                    </p>
                    <button className="mt-8 px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all font-bold">
                        Learn About AI
                    </button>
                </div>
            </div>
        </section>
    );
}

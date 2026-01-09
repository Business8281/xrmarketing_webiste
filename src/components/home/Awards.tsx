import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Awards() {
    return (
        <section className="py-20 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        It Takes a Lot to Achieve an <br />
                        Award, But We're Always <br />
                        Ready for It
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        Recognized for excellence in digital innovation and marketing strategy.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {['2023', '2024', '2025'].map((year, i) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400/50 flex items-center justify-center relative bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-[0_0_20px_rgba(234,179,8,0.4)] group"
                        >
                            <div className="text-center text-black drop-shadow-sm">
                                <Award className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 text-black fill-current opacity-80" />
                                <div className="font-black text-[10px] md:text-xs tracking-wider opacity-80 leading-tight">TOP AGENCY</div>
                                <div className="font-black text-lg md:text-2xl">{year}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

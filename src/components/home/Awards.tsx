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

                <div className="flex gap-8">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ rotate: -10 }}
                            whileHover={{ rotate: 0, scale: 1.1 }}
                            className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center relative bg-gradient-to-br from-yellow-400 to-yellow-700 shadow-[0_0_30px_rgba(234,179,8,0.5)]"
                        >
                            <div className="text-center text-black font-bold text-xs uppercase p-4">
                                <Award className="w-8 h-8 mx-auto mb-1" />
                                Top Agency 2025
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

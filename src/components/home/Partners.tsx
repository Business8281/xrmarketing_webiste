import { motion } from 'framer-motion';

const partners = ['Meta', 'Google', 'Shopify', 'Amazon', 'PrestaShop', 'HubSpot'];

export function Partners() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Together, We Propel Your <br /> Growth Our Partners
                    </h2>
                    <p className="text-gray-400 text-sm max-w-sm">
                        Collaborating with industry leaders to deliver world-class digital solutions for your business.
                    </p>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {partners.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            <span className="font-bold text-xl text-gray-300">{p}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

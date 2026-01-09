import { motion } from 'framer-motion';

const partners = [
    { name: 'Meta', url: 'https://cdn.simpleicons.org/meta' },
    { name: 'Google', url: 'https://cdn.simpleicons.org/google' },
    { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify' },
    { name: 'Amazon', url: 'https://cdn.simpleicons.org/amazon' },
    { name: 'PrestaShop', url: 'https://cdn.simpleicons.org/prestashop' },
    { name: 'HubSpot', url: 'https://cdn.simpleicons.org/hubspot' }
];

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
                            className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group gap-4"
                        >
                            <img
                                src={p.url}
                                alt={`${p.name} logo`}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                            <span className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">{p.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

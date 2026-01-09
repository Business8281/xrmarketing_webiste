import { motion } from 'framer-motion';

const partners = [
    { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/white' },
    { name: 'Google', url: 'https://cdn.simpleicons.org/google/white' },
    { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify/white' },
    { name: 'Amazon', url: 'https://cdn.simpleicons.org/amazon/white' },
    { name: 'PrestaShop', url: 'https://cdn.simpleicons.org/prestashop/white' },
    { name: 'HubSpot', url: 'https://cdn.simpleicons.org/hubspot/white' }
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
                            className="flex items-center justify-center p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                            <img
                                src={p.url}
                                alt={`${p.name} logo`}
                                className="h-8 md:h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';

const clients = [
    { name: 'PHILIPS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/2560px-Philips_logo_new.svg.png' }, // Placeholder or text
    { name: 'ISB', logo: '' },
    { name: 'UpGrad', logo: '' },
    { name: 'GrowTree', logo: '' },
    { name: 'Wharton', logo: '' },
    { name: 'Greenko', logo: '' },
    { name: 'Apollo', logo: '' },
    { name: 'BITS Pilani', logo: '' },
    { name: 'L&T', logo: '' },
    { name: 'ITC', logo: '' },
];

export function Clients() {
    return (
        <section className="py-20 bg-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl font-medium text-white max-w-2xl">
                        A Trusted Digital Growth Companion And Many Startups, Scale Ups For Biggies
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Since we don't have actual SVG assets for all, we'll use text placeholders stylized to look like logos for now, 
                        or generic placeholders if user didn't provide assets. 
                        For 100% replication request, visual structure matters most. */}
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-center p-4"
                        >
                            {/* Stylized Text Fallback for Logos */}
                            <span className="text-xl md:text-2xl font-bold font-sans text-gray-400 hover:text-white transition-colors">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

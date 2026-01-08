import { motion } from 'framer-motion';
import { Share2, Search, Zap, Users, ShieldCheck, Video } from 'lucide-react';

const services = [
    {
        icon: Share2,
        title: 'Social Media Optimization',
        description: 'Maximize your brand presence across all social platforms.'
    },
    {
        icon: Search,
        title: 'Search Engine Optimization',
        description: 'Rank higher and drive organic traffic with AI-driven SEO.'
    },
    {
        icon: Zap,
        title: 'Whitelabel Marketing',
        description: 'Partner with us to scale your agency operations seamlessly.'
    },
    {
        icon: Users,
        title: 'Social Media Marketing',
        description: 'Engage communities with targeted paid and organic campaigns.'
    },
    {
        icon: ShieldCheck,
        title: 'Brand Management',
        description: 'Protect and elevate your brand reputation online.'
    },
    {
        icon: Video,
        title: 'Video Production',
        description: 'High-quality video content that tells your story effectively.'
    }
];

export function Services() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
                        Cruise Towards Intelligent Digital Marketing With Our Tailored Services
                    </h2>
                    <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all flex items-center gap-2">
                        Explore More
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="mb-4 p-3 bg-gray-100 rounded-lg w-fit group-hover:bg-black group-hover:text-white transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-gray-200 pl-3 group-hover:border-black transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


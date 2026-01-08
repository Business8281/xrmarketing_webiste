import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Monitor, Cuboid, Globe, Smartphone, BarChart3 } from 'lucide-react'; // Changed Box to Cuboid if Box is deprecated or unavailable, ensuring generic standard icons.
import clsx from 'clsx';

const services = [
    {
        icon: Rocket,
        title: 'Performance Marketing',
        description: 'Data-driven campaigns that maximize ROI and accelerate growth.'
    },
    {
        icon: Monitor,
        title: 'Web Development',
        description: 'High-performance websites built with cutting-edge technologies.'
    },
    {
        icon: Cuboid, // Using Cuboid as a 3D generic icon
        title: '3D & Immersive',
        description: 'Interactive 3D experiences that captivate and engage audiences.'
    },
    {
        icon: Globe,
        title: 'SEO & Content',
        description: 'Strategic content that ranks high and resonates with your users.'
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Native and cross-platform apps designed for modern lifestyles.'
    },
    {
        icon: BarChart3,
        title: 'Analytics & Strategy',
        description: 'Deep insights to guide your digital transformation journey.'
    }
];

export function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for the modern era.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={clsx(
                                "p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
                                "hover:bg-white/10 transition-colors duration-300 group cursor-default"
                            )}
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

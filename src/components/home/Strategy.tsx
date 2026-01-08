import { motion } from 'framer-motion';
import { Search, BrainCircuit, Rocket, BarChart2 } from 'lucide-react';

const steps = [
    {
        title: 'Research & Audit',
        desc: 'We analyze your market position.',
        color: 'bg-blue-600',
        textColor: 'text-blue-100',
        yOffset: 0,
        height: 'h-[18rem]',
        icon: Search
    },
    {
        title: 'Content Strategy',
        desc: 'Planning the narrative.',
        color: 'bg-green-500',
        textColor: 'text-green-50',
        yOffset: 40,
        height: 'h-[16rem]',
        icon: BrainCircuit
    },
    {
        title: 'Campaign Execution',
        desc: 'Launching with precision.',
        color: 'bg-purple-600',
        textColor: 'text-purple-100',
        yOffset: 80,
        height: 'h-[14rem]',
        icon: Rocket
    },
    {
        title: 'Performance Analysis',
        desc: 'Optimizing for ROI.',
        color: 'bg-orange-500',
        textColor: 'text-orange-100',
        yOffset: 120,
        height: 'h-[12rem]',
        icon: BarChart2
    }
];

export function Strategy() {
    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Side: Text */}
                    <div className="md:w-1/3 w-full text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight">
                            From Strategy to Outcomes: <br />
                            <span className="text-white">Our Proven Approach Ensures Success</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just execute; we strategize. Our 4-step framework guarantees measurable impact and sustainable growth.
                        </p>
                    </div>

                    {/* Right Side: Graph Visualization */}
                    <div className="md:w-2/3 w-full">
                        {/* Mobile: Horizontal Scroll with Graph Animation */}
                        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 items-end h-[350px]">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ height: '0%', opacity: 0 }}
                                    whileInView={{ height: '100%', opacity: 1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                                    className={`snap-center shrink-0 w-[80%] sm:w-[60%] rounded-xl ${step.color} p-6 flex flex-col justify-end relative`}
                                    style={{ minHeight: '200px' }}
                                >
                                    <div className="mb-auto pt-4">
                                        <step.icon className={`w-12 h-12 ${step.textColor} opacity-90`} />
                                    </div>
                                    <h3 className={`text-xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                                    <p className={`${step.textColor} opacity-80 text-sm`}>{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Desktop: Staggered Vertical Flow (Original) */}
                        <div className="hidden md:flex gap-6 relative min-h-[400px]">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: step.yOffset }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`flex-1 p-6 rounded-2xl ${step.color} aspect-square flex flex-col justify-end group hover:scale-105 transition-transform duration-300 mt-0`}
                                >
                                    <div className="mb-auto">
                                        <step.icon className={`w-14 h-14 ${step.textColor} opacity-90`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                                    <p className={`${step.textColor} opacity-80 text-sm`}>{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

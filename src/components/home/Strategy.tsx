import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Research & Audit',
        desc: 'We analyze your market position.',
        color: 'bg-blue-600',
        textColor: 'text-blue-100',
        yOffset: 0
    },
    {
        title: 'Content Strategy',
        desc: 'Planning the narrative.',
        color: 'bg-green-500',
        textColor: 'text-green-50',
        yOffset: 40
    },
    {
        title: 'Campaign Execution',
        desc: 'Launching with precision.',
        color: 'bg-purple-600',
        textColor: 'text-purple-100',
        yOffset: 80
    },
    {
        title: 'Performance Analysis',
        desc: 'Optimizing for ROI.',
        color: 'bg-orange-500',
        textColor: 'text-orange-100',
        yOffset: 120
    }
];

export function Strategy() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    {/* Left Side: Text */}
                    <div className="md:w-1/3 sticky top-32">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight">
                            From Strategy to Outcomes: <br />
                            <span className="text-white">Our Proven Approach Ensures Success</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just execute; we strategize. Our 4-step framework guarantees measurable impact and sustainable growth.
                        </p>
                    </div>

                    {/* Right Side: Visual Flow */}
                    <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6 relative min-h-[400px]">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: step.yOffset }} // Staggered vertical layout
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex-1 p-6 rounded-2xl ${step.color} aspect-square flex flex-col justify-end group hover:scale-105 transition-transform duration-300 md:mt-0 mt-6`}
                                style={{ marginTop: `${index * 2}rem` }} // Mobile fallback or desktop stagger
                            >
                                <h3 className={`text-2xl font-bold ${step.textColor} mb-2`}>{step.title}</h3>
                                <p className={`${step.textColor} opacity-80 text-sm`}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

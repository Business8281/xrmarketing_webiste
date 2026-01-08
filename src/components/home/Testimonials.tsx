import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Their approach to digital engagement is unparalleled.",
        author: "Pratham Sethi",
        role: "Ops Manager, GrowTree",
        bg: "bg-gray-100"
    },
    {
        quote: "We've seen 300% growth since partnering with XRMarketing.",
        author: "Tanya Sharma",
        role: "CEO, OptraClad",
        bg: "bg-blue-50"
    },
    {
        quote: "Outstanding constant marketing excellence.",
        author: "Abhishek Varman",
        role: "Director, Greenko",
        bg: "bg-purple-50"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white text-black border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
                        Some of the Golden Lines that Keep Us Motivated
                    </h2>
                    {/* Simple arrow controls */}
                    <div className="hidden md:flex gap-2">
                        <button className="p-2 border rounded-full hover:bg-black hover:text-white transition-colors">&larr;</button>
                        <button className="p-2 border rounded-full hover:bg-black hover:text-white transition-colors">&rarr;</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-xl ${t.bg} hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[250px]`}
                        >
                            <p className="text-xl font-medium leading-relaxed mb-6">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-300" />
                                <div>
                                    <h4 className="font-bold text-sm">{t.author}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

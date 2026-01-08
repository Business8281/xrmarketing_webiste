import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTABanner() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-500 to-pink-500 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
                    Ready to Embark on a Strategic Digital Marketing Voyage?
                </h2>

                <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all transform hover:scale-105">
                    Connect Now
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </section>
    );
}

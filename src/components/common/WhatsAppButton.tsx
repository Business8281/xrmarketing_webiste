
import { motion } from 'framer-motion';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/917075545960"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contact us on WhatsApp"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="transition-all duration-300 drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(37,211,102,0.6)]"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-14 h-14 md:w-16 md:h-16"
                />
            </motion.div>
            {/* Use a tooltip or label on hover? Maybe keep it simple icon first. */}
        </a>
    );
}

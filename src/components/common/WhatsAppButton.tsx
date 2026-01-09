import { MessageCircle } from 'lucide-react';
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
                className="bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
            >
                <MessageCircle className="w-8 h-8 text-white fill-current" />
            </motion.div>
            {/* Use a tooltip or label on hover? Maybe keep it simple icon first. */}
        </a>
    );
}

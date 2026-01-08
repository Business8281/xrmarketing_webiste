import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "The Rise of Web 3.0 Marketing",
        excerpt: "How decentralized technologies are changing the way brands interact with consumers.",
        date: "Oct 12, 2024",
        category: "Trends"
    },
    {
        title: "Leveraging 3D Assets for E-Commerce",
        excerpt: "Why static images are no longer enough to convert modern shoppers.",
        date: "Sep 28, 2024",
        category: "Technology"
    },
    {
        title: "UX Design in the Age of Spatial Computing",
        excerpt: "Designing interfaces that break the screen and enter the living room.",
        date: "Sep 15, 2024",
        category: "Design"
    }
];

export default function Blog() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-48 pb-16 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-black mb-6">Latest Insights</h1>
                    <p className="text-xl text-gray-400">Thoughts on technology, design, and the future.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <div className="text-sm text-blue-400 font-medium mb-4">{post.category}</div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{post.title}</h2>
                            <p className="text-gray-400 mb-6">{post.excerpt}</p>
                            <div className="text-xs text-gray-500">{post.date}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

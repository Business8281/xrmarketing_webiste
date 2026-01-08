import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            <Navbar />
            <main className="pt-48">
                <Hero />
                <Services />
            </main>

            {/* Simple Footer for now */}
            <footer className="py-8 bg-black border-t border-white/5 text-center text-gray-500 text-sm">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} XRMarketing Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

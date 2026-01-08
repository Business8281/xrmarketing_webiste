import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { Clients } from '../components/home/Clients';
import { Strategy } from '../components/home/Strategy';
import { Process } from '../components/home/Process';
import { Growth } from '../components/home/Growth';
import { Services } from '../components/home/Services';
import { Testimonials } from '../components/home/Testimonials';
import { Partners } from '../components/home/Partners';
import { Awards } from '../components/home/Awards';
import { CTABanner } from '../components/home/CTABanner';

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <Clients />
                <Strategy />
                <Process />
                <Growth />
                <Services />
                <Testimonials />
                <Partners />
                <Awards />
                <CTABanner />
            </main>
            <Footer />
        </div>
    );
}

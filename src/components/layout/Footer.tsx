import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="block mb-6">
                            <h2 className="text-2xl font-bold tracking-tighter">XRMarketing</h2>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            The go-to agency for businesses looking to dominate the digital landscape through immersion, strategy, and innovation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/services" className="hover:text-white transition-colors">Performance Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">SEO & Content</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Social Media Mgmt</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">3D Experiences</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-blue-500" />
                                <span>123 Innovation Dr, <br />Tech Park, Hyderabad, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500" />
                                <a href="tel:7075545960" className="hover:text-white transition-colors">7075545960</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500" />
                                <a href="mailto:hello@xrmarketing.com" className="hover:text-white transition-colors">hello@xrmarketing.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
                    <p>&copy; {new Date().getFullYear()} XRMarketing Pvt. Ltd. All rights reserved.</p>
                    <p>Designed with <span className="text-red-500">&hearts;</span> by Digital Team</p>
                </div>
            </div>
        </footer>
    );
}

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="container-custom py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                Hardware<span className="text-primary">Hub</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Premium tools for professionals and DIY enthusiasts. Quality you can trust, service you can rely on.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons */}
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-primary transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Shop</h4>
                        <ul className="space-y-3">
                            {['Power Tools', 'Hand Tools', 'Storage', 'Accessories', 'Safety Gear'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-500 hover:text-primary transition-colors">About Us</Link></li>
                            <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Blog</a></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Tool Street,<br />Hardware City, HC 12345</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@hardwarehub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Hardware Hub. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

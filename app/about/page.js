import Image from 'next/image';

export const metadata = {
    title: 'About Us - Hardware Hub',
    description: 'Learn about Hardware Hub, your trusted source for quality tools and equipment since 2010.',
};

export default function About() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Building Trust, <br />
                            <span className="text-primary">One Tool at a Time</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Since 2010, we've been dedicated to providing professionals and DIY enthusiasts with the highest quality hardware and exceptional service.
                        </p>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </section>

            {/* Image Grid */}
            <section className="py-12 -mt-16 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl transform md:translate-y-12">
                            <Image
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                                alt="Modern workshop"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                                alt="Team working"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl transform md:translate-y-12">
                            <Image
                                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
                                alt="Hardware store shelves"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Core Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Drives Us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Quality First',
                                desc: 'We never compromise on the quality of our products.',
                                icon: 'M5 13l4 4L19 7'
                            },
                            {
                                title: 'Customer Focus',
                                desc: 'Your satisfaction is our top priority, always.',
                                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                            },
                            {
                                title: 'Innovation',
                                desc: 'Staying ahead with the latest tools and technology.',
                                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                            },
                            {
                                title: 'Integrity',
                                desc: 'Honest and transparent in all our dealings.',
                                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mx-auto mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                            <div className="text-orange-100">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">5k+</div>
                            <div className="text-orange-100">Products</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">20k+</div>
                            <div className="text-orange-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-orange-100">Support</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

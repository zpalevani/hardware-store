import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80"
            alt="Hardware tools background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-6 backdrop-blur-sm">
              Premium Quality Tools
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Masterpiece
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Equip yourself with professional-grade tools designed for precision, durability, and performance. For contractors and serious DIYers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary text-center">
                Shop Collection
              </a>
              <a href="/about" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-8 lg:mx-16 rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Quality Guaranteed</h3>
            <p className="text-sm text-gray-500">Verified professional grade</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Fast Shipping</h3>
            <p className="text-sm text-gray-500">Free delivery over $50</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Expert Support</h3>
            <p className="text-sm text-gray-500">24/7 customer service</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section id="products" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Featured Products
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0">
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a href="#" className="btn-secondary w-full">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80"
            alt="Workshop background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Toolkit?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust Hardware Hub for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Sales
            </a>
            <a href="/about" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

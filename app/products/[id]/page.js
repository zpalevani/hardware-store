import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    // Await params in Next.js 15+
    const resolvedParams = await params;
    const product = products.find(p => p.id === parseInt(resolvedParams.id));

    if (!product) {
        return {
            title: 'Product Not Found - Hardware Hub',
        };
    }

    return {
        title: `${product.name} - Hardware Hub`,
        description: product.description,
    };
}

export default async function ProductPage({ params }) {
    // Await params in Next.js 15+
    const resolvedParams = await params;
    const product = products.find(p => p.id === parseInt(resolvedParams.id));

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-custom">
                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/#products" className="hover:text-primary transition-colors">Products</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </nav>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Product Image */}
                        <div className="relative aspect-square bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="mb-4">
                                <span className="inline-block bg-orange-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <span className="text-3xl font-bold text-gray-900 mr-4">
                                    ${product.price}
                                </span>
                                {product.inStock ? (
                                    <span className="flex items-center text-green-600 text-sm font-medium">
                                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {product.longDescription}
                            </p>

                            <div className="border-t border-gray-100 py-6 mb-8">
                                <h3 className="font-bold text-gray-900 mb-4">Key Specifications</h3>
                                <ul className="space-y-3">
                                    {product.specifications.map((spec, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                <button className="btn-primary flex-1 py-4 text-lg">
                                    Add to Cart
                                </button>
                                <button className="btn-secondary flex-1 py-4 text-lg">
                                    Save for Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                                    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center space-x-6">
                                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                                                {relatedProduct.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                                                {relatedProduct.description}
                                            </p>
                                            <span className="font-bold text-gray-900">
                                                ${relatedProduct.price}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

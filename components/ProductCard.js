import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`} className="group">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover h-full flex flex-col">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.inStock && (
                        <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-200">
                            In Stock
                        </div>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-orange-50 px-2 py-1 rounded">
                            {product.category}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.price}
                        </span>

                        <span className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors flex items-center">
                            View Details
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

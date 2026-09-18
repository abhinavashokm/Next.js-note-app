import Link from "next/link";
import Image from "next/image";

export default function Home({ products }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="border-b bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Mini Store
                        </h1>
                        <p className="text-sm text-gray-500">
                            Explore our products
                        </p>
                    </div>

                    <div className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
                        {products.length} Products
                    </div>
                </div>
            </header>

            {/* Products */}
            <main className="mx-auto max-w-7xl px-6 py-10">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Featured Products
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Discover something you might like.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <Link
                            href={`/products/${product.id}`}
                            key={product.id}
                            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />

                                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
                                    {product.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
                                    {product.title}
                                </h3>

                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                                    {product.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-bold text-gray-900">
                                        ${product.price}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        ⭐ {product.rating}
                                    </span>
                                </div>

                                <div className="mt-4 text-sm font-medium text-blue-600">
                                    View Product →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        "https://dummyjson.com/products"
    );

    const data = await response.json();
    return {
        props: {
            products: data.products,
        },
    };
}
import Link from "next/link";
import Image from "next/image";

export default function Product({ product }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            Mini Store
          </h1>
        </div>
      </header>

      {/* Product Details */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

          {/* Product Image */}
          <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Rating & Stock */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-yellow-500">
                ⭐ {product.rating}
              </span>

              <span className="text-gray-400">•</span>

              <span className="text-gray-500">
                {product.stock} in stock
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-gray-900">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y py-6 text-sm">

              <div>
                <p className="text-gray-400">Brand</p>
                <p className="mt-1 font-medium text-gray-900">
                  {product.brand || "Generic"}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Discount</p>
                <p className="mt-1 font-medium text-green-600">
                  {product.discountPercentage}% OFF
                </p>
              </div>

              <div>
                <p className="text-gray-400">SKU</p>
                <p className="mt-1 font-medium text-gray-900">
                  {product.sku}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Availability</p>
                <p className="mt-1 font-medium text-green-600">
                  In Stock
                </p>
              </div>

            </div>

            {/* Back Button */}
            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-gray-900 px-6 py-4 text-center font-medium text-white transition hover:bg-gray-700"
            >
              ← Back to Products
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${params.id}`
    );

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const product = await response.json();

    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";

const featuredProducts = [
  {
    id: "1",
    name: "Product 1",
    price: 99.99,
    image: "/product-1.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    price: 149.99,
    image: "/product-2.jpg",
  },
  {
    id: "3",
    name: "Product 3",
    price: 199.99,
    image: "/product-3.jpg",
  },
  {
    id: "4",
    name: "Product 4",
    price: 79.99,
    image: "/product-4.jpg",
  },
];

const categories = [
  {
    name: "Electronics",
    image: "/category-electronics.jpg",
    href: "/category/electronics",
  },
  {
    name: "Fashion",
    image: "/category-fashion.jpg",
    href: "/category/fashion",
  },
  {
    name: "Home & Living",
    image: "/category-home-living.jpg",
    href: "/category/home-living",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-xl mb-8">Discover amazing products at great prices</p>
            <Link
              href="/products"
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
} 
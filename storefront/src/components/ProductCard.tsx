import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative h-64 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
        Add to Cart
      </button>
    </div>
  );
} 
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToBasket: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAddToBasket }) => (
  <div className="border p-4 rounded-lg shadow-lg">
    <img src={product.image} alt={`Image of ${product.name}`} className="w-full h-48 object-cover mb-4 rounded" />
    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
    <p className="text-gray-700 mb-2">{product.description}</p>
    <p className="text-gray-900 font-bold mb-4">{product.price}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      onClick={() => onSelect(product)}
    >
      Select
    </button>
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      onClick={() => onAddToBasket(product)}
    >
      Add to Basket
    </button>
  </div>
);

export default ProductCard;

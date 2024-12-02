import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
  onAddToBasket: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelect, onAddToBasket }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onSelect={onSelect} onAddToBasket={onAddToBasket} />
    ))}
  </div>
);

export default ProductList;

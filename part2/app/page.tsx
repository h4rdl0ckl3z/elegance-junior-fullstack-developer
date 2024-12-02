'use client';

import { useState } from 'react';
import ProductList from '../components/ProductList';

const products = [
  // your product array
  { id: 1, name: 'Laptop', description: 'Description for product 1', image: 'https://placehold.co/200x200', price: 50000 },
  { id: 2, name: 'Smartphone', description: 'Description for product 2', image: 'https://placehold.co/200x200', price: 20000 },
  { id: 3, name: 'Tablet', description: 'Description for product 3', image: 'https://placehold.co/200x200', price: 15000 },
];

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  console.log(products);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Selection</h1>
      <ProductList products={products} onSelect={setSelectedProduct} onAddToBasket={addToBasket} />
      {selectedProduct && (
        <div className="mt-8 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Selected Product</h2>
          <img src={selectedProduct.image} alt={`Image of ${selectedProduct.name}`} className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
          <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
          <p className="text-gray-900 font-bold mb-4">{selectedProduct.price}</p>
        </div>
      )}
      {basket.length > 0 && (
        <div className="mt-8 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Basket</h2>
          <ul>
            {basket.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex items-center">
                  <img src={item.image} alt={`Image of ${item.name}`} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;

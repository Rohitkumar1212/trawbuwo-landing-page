'use client';

import { useEffect, useState } from 'react';
import ProductCard  from './ProductCard';
export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async()=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Set the fetched data into the state
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
  }

  // Fetch data from the mock API (e.g., jsonplaceholder or a similar API)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      {console.log("products---", products)}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

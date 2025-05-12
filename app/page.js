'use client';

import CategoryCarousel from '@/components/CategoryCarousel';
import ProductCard from '@/components/ProductCard';
import Products from '@/components/Products';

const products = [
  { id: 1, title: 'Smartphone', price: '$199.99', image: '/images/smartphone.jpg' },
  { id: 2, title: 'Laptop', price: '$799.99', image: '/images/laptop.jpg' },
  { id: 3, title: 'Headphones', price: '$99.99', image: '/images/headphones.jpg' },
  { id: 4, title: 'Watch', price: '$49.99', image: '/images/watch.jpg' },
  // Add more products as needed
];

export default function HomePage() {
  return (
    <main>
      {/* Category Carousel */}
      <CategoryCarousel />

      {/* Product Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
      <Products/>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // Accessing the totalQuantity from the Redux store
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Trabuwa
        </Link>

        <div className="flex space-x-6 items-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/cart" className="relative">
            🛒
            {/* Only show the badge if there are items in the cart */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

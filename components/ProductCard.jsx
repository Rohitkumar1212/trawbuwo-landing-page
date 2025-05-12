'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-gray-500">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

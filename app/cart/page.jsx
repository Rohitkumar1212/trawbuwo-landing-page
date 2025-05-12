'use client';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/features/cartSlice'; // Ensure the path is correct

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  console.log("cartItems--",cartItems)
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id)); // Dispatch removeFromCart action to remove the item
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    // Ensure the price is a valid number
    const itemPrice = parseFloat(item.price);
    return total + (isNaN(itemPrice) ? 0 : itemPrice);
  }, 0); // Fallback to 0 if price is invalid or NaN

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-xl font-bold text-gray-900 mt-2">${item.price}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Total */}
      {cartItems.length > 0 && (
        <div className="mt-6 text-lg font-semibold text-right">
          <p>Total: <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span></p>
        </div>
      )}
    </div>
  );
}
